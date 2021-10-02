/* exported truncate */
/*
  input: length(an integral javascript number) and
  string(any javascript string)
  output: shortened version of string plus in an ellipsis

  -Create a storage for the new shortened string
  -Guard against if the given length variable is longer than the actual
  length of the string
  -Go through the original string index by index up to the index
  of length
  -Push the characters of the old string into the new string
  -Add ellipsis to the end of the new string
  -Return the new string
*/

function truncate(length, string) {
  var newString = '';

  if (string.length < length) {
    length = string.length;
  }
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  newString += '...';

  return newString;
}
