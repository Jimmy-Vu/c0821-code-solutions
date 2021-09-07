/* exported drop */
/*
  input: array(any JavaScript Array) and count(positive integer Number
    of elements to drop from the beginning of array)
  output: new array(containing the elements of array
    after the first count elements)

  -create a storage for a new array
  -go through each index of the array one by one,
  starting at the index after the value of count
    -push the elements into the new array
  -return the new array
*/

function drop(array, count) {
  var newArray = [];

  for (var i = (count); i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
