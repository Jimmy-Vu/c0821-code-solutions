/* exported capitalizeWord */
/*
  input: word(a single word as a JavaScript String)
  output: word(the first character is uppercased and the rest lowercased
    besides JavaScript)

  -create a storage for the new word string
  -capitalize the first character of word and concatenate to the new string
  -go through each following character of the word
    -check if the string is strictly to JavaScript
      -if it is, lowercase every character and uppercase the S
    - else, lowercase all the letters
  -return new word;
*/

function capitalizeWord(word) {
  var newWord = '';

  newWord += word[0].toUpperCase();

  for (var i = 1; i < word.length; i++) {
    if (word.toUpperCase() === 'JAVASCRIPT') {
      if (i === 4) {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i].toLowerCase();
      }
    } else {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord;
}
