/* exported reverseWord */
/*
  input: word(container for single word string)
  output: string(container for the characters of word in reverse order)

  -create a storage for the new string
  -go through the index of the word string character by character in reverse
  -concatenate the the new string with the current character
  -return the new string
*/

function reverseWord(word) {
  var newWord = '';

  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
