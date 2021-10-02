/* exported reverseWords */
/*
  input: string
  output: version of String with every character reversed
  but words in their original order

  -create a new string variable
  -create a storage variable for the current word
  -go through each index of the string and store the character
  into the current word variable
  -if current index is a space, call a function to reverse the
  current word and push it into the new string
  -return new string
*/

function reverseWords(string) {
  var newString = '';
  var currentWord = '';

  for (var i = 0; i <= string.length; i++) {
    if (string[i] === ' ') {
      newString += reverseLetters(currentWord) + ' ';
      currentWord = '';
    } else if (i === (string.length)) {
      newString += reverseLetters(currentWord);
    } else {
      currentWord += string[i];
    }
  }
  return newString;
}

function reverseLetters(string) {
  var reversedString = '';

  for (var i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}
