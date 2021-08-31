/* exported tail */
/*
  input: array(any javascript array)
  output: array(new array containing all elements after the first)

  -create a storage for the new array
  -look at each element one by one
   starting at the 1 index with the condition of the array length
   being subtracted by one to account for disregard index 0
  -push the element at the current index of the array into the new array
  -return the new array
*/

function tail(array) {
  var newArray = [];

  for (var i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
