/* exported firstChars */
/*
  input: length(an integral JavaScript Number)
  output: string(any JavaScript String)

  -create a storage for the return string
  -guard against if the value of length is longer than the actual
  length of the sting
  -go through each character of the string one by one up to the length
  index
    -concatenate the characters into the return string
  -return string;
*/

function firstChars(length, string) {
  var newString = '';

  if (string.length < length) {
    length = string.length;
  }
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }

  return newString;
}
