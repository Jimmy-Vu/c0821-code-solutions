/* exported toObject */
/*
  input: an array(containing two elements; a string key and any other js value)
  output: an object with one property consisting of the passed keyValuePair

  -create a storage for the return object
  -assign the property and the value from the array to the object using indexes
  -return the new object
*/
function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
