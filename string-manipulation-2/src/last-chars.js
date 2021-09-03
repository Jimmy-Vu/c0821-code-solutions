/* exported lastChars */
/*
  input: length(an integral JavaScript Number)
  output: string(any JavaScript String)

  -create a storage for the return string
  -guard against if the value of length is longer than the actual
  length of the sting
  -go through each character of the string one by one up to the length
  index starting at the first character of the last length of string
    -concatenate the characters into the return string
  -return string;
*/

function lastChars(length, string) {
  var newString = '';

  if (string.length < length) {
    length = string.length;
  }
  for (var i = (string.length - (length)); i < string.length; i++) {
    newString += string[i];
  }

  return newString;
}
