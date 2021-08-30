/* exported compact */
/*
  input: array(any JS array) and
  omission value(value that is to be disregarded from the array)
  output: array(new array with all the elements from the old array without
    the ommision values inside it)

  -create a new storage for the array
  -look at each element in the array one by one
  -check to see if the current element is not strictly
   equal to the omission value
  -if not, push current element to the new array
*/

function compact(array, omission) {
  var newArray = [];

  for (var i = 0; i <= array.length; i++) {
    if (array[i] !== omission) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
