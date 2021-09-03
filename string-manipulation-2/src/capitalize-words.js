/* exported capitalizeWords */
/*
  input: string(any javascript string)
  output: string(With the first character of every word capitalized)

  -create a storage for the new string to be returned
  -go through each character one by one
    -check to see if the current index is 0 or if the previous index
    had a value of a space
      -if it is, capitalize that character, and concatenate into new string
      -otherwise lowercase it concatenate into new string
  -return new string
*/

function capitalizeWords(string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if ((i === 0) || (string[i - 1] === ' ')) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }

  return newString;
}
