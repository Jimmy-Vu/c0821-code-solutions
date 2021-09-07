/* exported chunk */
/*
  input: array(any JavaScript array) and size(postive integer
  indicating the desired "chunk" size)
  output: a new array of arrays(each sub array has a length
    equal to size. Remaining elements are gathered into a final sub
    array).

  -create a storage variable for the new master array
  -
*/

function chunk(array, size) {
  var newArray = [];
  var trigger = true;
  var i = 0;
  var count = 0;
  var subArray = [];

  while (trigger) {
    while (count < size) {
      subArray.push(array[i]);
      count++;
      i++;
    }
    newArray.push(subArray);
    count = 0;

    if (i > array.length) {
      trigger = false;
    }
  }
  return newArray;
}
