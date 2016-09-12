// Enable sort button when first 5 numbers entered
function buttonEnable() {
  //console.log("buttonEnable was called");
  //can be refactored to be more DRY...
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;
  var num4 = document.getElementById("num4").value;
  var num5 = document.getElementById("num5").value;
  var buttonElement = document.getElementById("sortButton");
  
  if ((num1 != "") && (num2 != "") && (num3 != "") && (num4 != "") && (num5 != "")) {
    buttonElement.disabled = false;
  }
  else {
    buttonElement.disabled = true;
  };
};
// Grab user input, push into array, bubbleSort the array, and print resulting sorted array
// Refactor with helper function if time allows...
function bubbleSort() {
  var numbersArray =[];
  var inputElements = document.getElementsByName("inputNumber");
  //console.log(inputElements);
  
  for (i in inputElements) {
    var singleNumber = inputElements[i].value;
    //console.log(singleNumber);
    if (singleNumber !== "" && singleNumber !== undefined && singleNumber !== NaN) {
      numbersArray.push(parseFloat(singleNumber));
      //console.log(numbersArray);
    }
  }

  var length = numbersArray.length;

  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) { // j < (length - i)
      if (numbersArray[j] > numbersArray[j+1]) { // compare adjacent nums
        var temp = numbersArray[j]; // temp variable for current num
        numbersArray[j] = numbersArray[j+1]; // replace current num with adjacent num
        numbersArray[j+1] = temp; // replace adjacent num with current num
      }
    }
  }

  var sortResults = document.getElementById("showSortResults");
  sortResults.innerHTML = numbersArray
}

