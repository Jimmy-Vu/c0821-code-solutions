/* exported getValue */
/*
  input: object(any javascript object) and key(a javascript key)
  output: a value in object found at the key property

  -create a storage for the return value
  -go through each property of the object one by one
  -once the key property is located, return the value inside the property
*/

function getValue(object, key) {
  return object[key];
}
