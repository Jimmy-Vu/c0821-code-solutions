/* exported chunk */
/*
  input: array(any JavaScript array) and size(postive integer
  indicating the desired "chunk" size)
  output: a new array of arrays(each sub array has a length
    equal to size. Remaining elements are gathered into a final sub
    array).

  -create a storage variable for the new array
  -create a storage variable for the the sub arrays
   to be pushed into the new array
  -check if the requested size is smaller than the array
  and that the array is not empty
  -go through each element in array and push it to the subarray
  once subArray reaches the length of size, push subArray in newArray
  -return newArray
*/

function chunk(array, size) {
  var subArray = [];
  var newArray = [];
  if (size < array.length && array.length !== 0) {
    for (var i = 0; i < array.length; i++) {
      if (subArray.length === size) {
        newArray.push(subArray);
        subArray = [];
      }
      subArray.push(array[i]);
    }
    newArray.push(subArray);
  }
  return newArray;
}
