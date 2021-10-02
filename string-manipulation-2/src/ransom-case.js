/* exported ransomCase */
/*
  input: string(any javascript string)
  output: string(every other character is uppercase)

  -create a storage for the new string for return
  -go each character one by one
  -check if the current index is an odd number
    -if it is, then set the character to uppercase
    -else lowercase the character
  -return the new string
*/

function ransomCase(string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if ((i % 2) !== 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
