/* exported flatten */
/*
  input: any javascript array
  output: a new array with direct child array unwrapped

  -create new array storage
  -go through each element in the array
  -if the element itself is also an array, go through each element
  of its array and push to the new array
  -if not, push the element to the new array
  -return the new array
*/
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
