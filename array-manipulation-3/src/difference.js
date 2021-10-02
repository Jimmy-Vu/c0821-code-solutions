/* exported difference */
/*
  input: two arrays
  output: an array with symmetric difference

  -create a new array variable
  -go through each element of first array and check against
  elements in the second array
  -if not found in second array, push into the new array
  -go through each element of second array and check against
  elements in the first array
  -if not found in second array, push into the new array
  -return the new array
*/

function difference(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
