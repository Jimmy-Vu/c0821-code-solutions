/* exported intersection */
/*
  input: two arrays
  output: an array with symmetric difference

  -create a new array variable and a used array variable
  -go through each element of first array and check against
  elements in the second array
  -if not found in second array, push into the new array and
  push the element into the used array
  -go through each element of second array and check against
  elements in the first array and that it is not already in the used
  array
  -push into the new array
  -return the new array
*/
function intersection(first, second) {
  var newArray = [];
  var usedArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
      usedArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) && !usedArray.includes(second[j])) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
