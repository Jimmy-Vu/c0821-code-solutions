/* exported isVowel */
/*
  -input: char(a single javascript variable)
  -output: boolean(indicating whether or not char is a vowel)

  -create a boolean to hold the value of false
  -create a variable to hold the char character after setting to uppercase
  -set char to uppercase using a method to simplify the
   testing process by having less testing conditions and assigning to variable
  -test if char is equal to any of the vowels
  -if char is equal to a vowel, assign the boolean to the value of true
  -return the boolean
*/

function isVowel(char) {
  var vowel = false;
  var c = char.toUpperCase();

  if (c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U') {
    vowel = true;
  }
  return vowel;
}
