/* exported omit */
/*
  input: source(any javascript Object)
  and keys(an array of javscript strings)
  output: a new object with properties not listed in keys

  -create a storage variable for the new object
  -look through each of the key values in the key array
  -compare the current key value with key values from source
  -if they match then proceed to the next key value of source
  -otherwise, assign the key in source into the new object
  return newObject
*/
function omit(source, keys) {
  var newObject = {};

  for (var i = 0; i < keys.length; i++) {
    for (var x in source) {
      if (x === keys[i]) {
        i++;
      } else {
        newObject[x] = source[x];
      }
    }
  }
  return newObject;
}
