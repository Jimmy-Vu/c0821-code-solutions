/* exported pick */
/*
  input: source(any javascript object)
   and keys(an array of Javascript strings)
  output: a new Object(containing all of the
  properties of source listed in keys)

  -create a storage variable for the new object
  -go through each of the elements in the key array
  -check to make sure that the current key is found in the source object
  -push key and it's value to the new object
  -return newObject
*/
function pick(source, keys) {
  var newObject = {};

  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
