/* exported invert */
/*
  input: source(any javascript object)
  out: new object(containing all properties of source,
  but with the keys and values inverted)

  -create a storage variable for the new object
  -go through each properties of source
  -invert the key and value by assigning the key to the value in
  the new object
  -return the new object
*/

function invert(source) {
  var newObject = {};

  for (var x in source) {
    newObject[source[x]] = x;
  }
  return newObject;
}
