/* exported getFirstChar */
/*
  input: string(containing text in string)
  output: c(variable containing the first character in string)

  -input: "LearningFuze"
  -create storage for holding the first character of the string
  -access the string at the first index and assign the value of the first index
  of the string to the created storage for the character.
  -return the first value
*/

function getFirstChar(string) {
  var c = '';
  c = string[0];

  return c;
}
