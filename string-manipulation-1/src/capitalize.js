/* exported capitalize */
/*
  input: word(a single word as a javascript string)
  output: the original word but with the first character uppercased and rest lowercased

  -create a new variable to hold the changed string
  -go through the word character by character
  -if the array is at the first index of the string,
   use method to uppercase the character and
   concatenate the capitalized letter to the new word value
  -if not, use method to lowercase the character and concatentate to the new word value
  -return the newWord
*/

function capitalize(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord += word[0].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord;
}
