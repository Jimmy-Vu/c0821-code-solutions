/* exported union */
/*
  input: two arrays
  output: an array with symmetric difference

  -create a new array variable
  -go through each element of first array and check against
  elements in the used array
  -if not found in second array, push into the new array and used array
  -go through each element of second array and check against
  elements in the first array and used array
  -if not found in second array, push into the new array
  -return the new array
*/

function union(first, second) {
  var newArray = [];
  var usedArray = [];

  for (var i = 0; i < first.length; i++) {
    if (!usedArray.includes(first[i])) {
      newArray.push(first[i]);
      usedArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (!usedArray.includes(second[j])) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
