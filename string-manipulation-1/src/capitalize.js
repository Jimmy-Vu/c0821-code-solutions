/* exported capitalize */
/*
  input: word(a single word as a javascript string)
  output: the original word but with the first character uppercased and rest lowercased

  -create a new variable to hold the changed string
  -use method to uppercase the character at the first index of the string
   and concatenate the capitalized character to the new word value
  -go through the word character by character starting at the 1 index
  -use method to lowercase the character and concatentate to the new word value
  -return the newWord
*/

function capitalize(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}
