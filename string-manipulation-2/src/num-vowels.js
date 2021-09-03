/* exported numVowels */
/*
  input: string(any JavaScript string)
  output: number(number of vowels in a string)

  -create a storage for the number of vowels
  -uppercase the entire string for faster testing and assign to a new
  variable
  -go through each character in the string
    -if the character is a vowel, increment the vowel variable by 1;
  -return the number;
*/

function numVowels(string) {
  var vowelCounter = 0;
  var stringUpper = string.toUpperCase();

  for (var i = 0; i < string.length; i++) {
    if (stringUpper[i] === 'A' || stringUpper[i] === 'E' ||
      stringUpper[i] === 'I' || stringUpper[i] === 'O' ||
      stringUpper[i] === 'U') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
