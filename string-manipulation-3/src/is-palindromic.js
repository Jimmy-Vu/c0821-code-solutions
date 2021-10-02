/* exported isPalindromic */
/*
  input: string(any javascript string)
  output: boolean that indicates if the string is a palindrome

  -create storage variable for reversed string
  -create storage variable for string without space
  -go through each character of string and remove spaces
  -create a boolean variable
  -go through the string backwards character by character and
  push it into the new string variable
  -compare the string variable and the new string variable
  -if equals, set boolean to true
  -return boolean
*/

function isPalindromic(string) {
  var stringNoSpace = '';
  var reversedString = '';
  var isAPalindromic = false;

  for (var j = 0; j < string.length; j++) {
    if (string[j] === ' ') {
      continue;
    } else {
      stringNoSpace += string[j];
    }
  }

  for (var i = stringNoSpace.length - 1; i >= 0; i--) {
    reversedString += stringNoSpace[i];
  }

  if (reversedString === stringNoSpace) {
    isAPalindromic = true;
  }

  return isAPalindromic;
}
