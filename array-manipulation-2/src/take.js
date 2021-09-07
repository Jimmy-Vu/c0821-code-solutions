/* exported take */
/*
  input: array(any JavaScript Array) and count(a positive integer
    Number of elements to "take" from the beginning of array)
  output: array(containing first count elements of array)

  -create a storage variable for a new array
  -check if the count is within the length of array
  -go through each index of the array for the number of count iteration
    -push the value of the index into the new array
  -return the new array
*/

function take(array, count) {
  var newArray = [];

  if (array.length > count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
