/* exported includes */
/*
  input: array(any javascript array)
  and value(the value to search for in array)
  output: boolean(indicating the presence of value at any index of array)

  -create a storage variable for the boolean and set to false
  -go through each element one by one
    -if the value is found in the array, set the boolean to true
    and break out of the loop
  -return the boolean
*/

function includes(array, value) {
  var isPresent = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      isPresent = true;
      break;
    }
  }
  return isPresent;
}
