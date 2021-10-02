/* exported equal */
/*
  input: two arrays
  output: boolean if arrays are equal

  -create boolean variable
  -check to see if the length of both arrays are equal, if not return
  false
  -go through each index of both array and compare, if they do not
  match, change boolean to false;
  -return boolean
*/

function equal(first, second) {
  var isEqual = true;

  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        isEqual = false;
      }
    }
  }
  return isEqual;
}
