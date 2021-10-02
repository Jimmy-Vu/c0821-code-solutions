/* exported unique */

/*
  input: array
  output: new array only containing unqiue elements

  -create storage variables for new array and used array
  -go through each element in array
  -check if the current element is in the used array already or not
  -if not, push element to new array and used array
  -return newArray
*/

function unique(array) {
  var usedArray = [];
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!usedArray.includes(array[i])) {
      newArray.push(array[i]);
      usedArray.push(array[i]);
    }
  }
  return newArray;
}
