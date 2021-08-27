/* exported isUpperCased */
/*
   input: word(a single word javascript string)
   output: a boolean(indicating whether or not all chracters in word are uppercase)

   -create a boolean value to
    indicate if all characters are uppercase and set it to true
   -access word character by character
   -if the current character is not uppercased, set the boolean value to false
   and break out of the loop.
   -return the boolean
*/

function isUpperCased(word) {
  var isUC = true;

  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      isUC = false;
      break;
    }
  }
  return isUC;
}
