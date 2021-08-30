/* exported reverse */
/*
  input: array(any JS array)
  output: array(new array containing elements from old array in reverse order)

  -create storage array for the new array
  -look at each element in the array in reverse order and push them
   into the new array.
  -return the array
*/

function reverse(array) {
  var newArray = [];

  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
