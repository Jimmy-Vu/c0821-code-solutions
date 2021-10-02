/* exported takeRight */
/*
  input: array(any javascript array) and count(positive integer Number of
    elements to take from the end of the array)
  output: new array(containing the last count elements of array)

  -create storage variable for the new array
  -guard against if the count is larger than the array length
  -go through each element of the array, starting at the index
  required for the number of count elements at the end
  -push the element to the new array
  -return the new array
*/

function takeRight(array, count) {
  var newArray = [];

  if (array.length > count) {
    for (var i = (array.length - count); i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
