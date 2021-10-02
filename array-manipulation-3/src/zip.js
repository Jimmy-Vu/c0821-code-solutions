/* exported zip */
/*
  input: two arrays
  output: an array with arrays as element, each subarray holding
  an element from each parent array at that index

  -create a new array variable
  -go through both array, stopping if the length of one is reached,
  and pushing their elements into the new array
  -return the new array
*/
function zip(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length && i < second.length; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
