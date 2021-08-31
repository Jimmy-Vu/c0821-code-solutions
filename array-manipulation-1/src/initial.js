/* exported initial */
/*
  input: array(any javascript array)
  output: array(new array containing all elements except the last)

  -create storage for newArray
  -look at the elements in the array one by one, omitting
   the last index
  -push the current index element into the new array
  -return newArray
*/

function initial(array) {
  var newArray = [];

  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
