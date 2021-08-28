/* exported isLowerCased */
/*
   input: word(a single word javascript string)
   output: a boolean(indicating whether or not all chracters in word are lowercase)

   -create a boolean value to
    indicate if all characters are lowercase and set it to true
   -access word character by character
   -if the current character is not lowercased, set the boolean value to false
   and break out of the loop.
   -return the boolean
*/

function isLowerCased(word) {
  var isLC = true;

  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      isLC = false;
      break;
    }
  }
  return isLC;
}
