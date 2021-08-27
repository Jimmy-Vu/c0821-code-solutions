/* exported getWords */
/*
  input: string(container of zero or more words, separated by spaces)
  output: array(container of strings. each string is one of the words
    from the string parameter)

  -create a storage for the output array
  -create a storage for the current word
  -test if string is an empty string by checking the length. if it is,
  return the empty array.
  -go through each index of the string one by one
  -if a space value is found in the string,
   push the current word variable to the array and clear the current word
   variable
  -if the end of the string is reached, push the current word to the array
  -if not, concatentate the character at the current index to the current word
  -return the array
*/

function getWords(string) {
  var stringArray = [];
  var currentWord = '';

  if (string.length === 0) {
    return stringArray;
  }

  for (var i = 0; i <= string.length; i++) {
    if (string[i] === ' ') {
      stringArray.push(currentWord);
      currentWord = '';
    } else if (i === string.length) {
      stringArray.push(currentWord);
    } else {
      currentWord += string[i];
    }
  }
  return stringArray;
}
