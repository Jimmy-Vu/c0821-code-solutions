/* exported getLastChar */
/*
  input: string(container holding the text string)
  output c(variable holding the last character of string)

  -create storage for holding last character of string
  -access the last index of the string by
   taking the length of the string and subtracting 1
  -assign the last value of the string into the variable to hold it
  -return the storage variable
*/

function getLastChar(string) {
  var c = '';

  c = string[string.length - 1];
  return c;
}
