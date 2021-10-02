/* exported swapChars */
/*
  input: firstIndex(an integral JavaScript Number),
  secondIndex(an integral JavaScript Number),
  string(any JavaScript String)
  output: string with the firstIndex and secondIndex swapped

  -create a storage for the new string
  -go through each character one by one
    -if the index is the first index, concatenate the new string
    with the second index value
    -if the index is the second index, concatenate the new string
    with the first index value
  -concatentate the rest of the string into new string
  -return the new string
*/

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
