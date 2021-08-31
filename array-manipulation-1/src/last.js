/* exported last */
/*
  input: array(any array)
  output: the last output of the array

  -create storage for the last element in the array
  -access and assign the array at the last index of the array to the storage variable
  -return the storage variable
*/

function last(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
