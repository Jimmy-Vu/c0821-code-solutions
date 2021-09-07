/* exported dropRight */
/*
  input: array(any javascript array) and count(positive integer
    Number of elements to drop from the end of array)
  output: new array containing  the elements of array
  before the last count elements

  -create a storage variable for the new array
  -guard against if count is larger than array.length
  -go through each element of the array up to the count index
    -push the element into the new array
  -return new array
*/

function dropRight(array, count) {
  var newArray = [];

  if (array.length > count) {
    for (var i = 0; i < (array.length - count); i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
