/* exported head */
/*
  input: array(any array)
  output: the first output of the array

  -create storage for the first element in the array
  -access and assign the array at the index of 0 to the storage variable
  -return the storage variable
*/

function head(array) {
  var firstElement = array[0];
  return firstElement;
}
