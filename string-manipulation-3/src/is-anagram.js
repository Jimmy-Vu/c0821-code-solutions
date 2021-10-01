/* exported isAnagram */
/*
  input: firstString, secondString
  output: boolean indicating if the strings are anagrams

  -create a boolean variable
  -create counter variable
  -go through each character of second string and compare
  the current secondString character by going into a loop with the
  firstString
  -if the character matches with one of the characters of firstString
  increment counter
  -if counter reaches the length of firstString, set boolean as true
  -return boolean
*/

function isAnagram(firstString, secondString) {

  var newFirstString = spaceRemove(firstString);
  var newSecondString = spaceRemove(secondString);

  if (newFirstString === newSecondString) {
    return true;
  } else {
    return false;
  }
}

function spaceRemove(string) {
  var newString = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    } else {
      newString.push(string[i]);
    }
  }

  return newString.sort().join('');
}
