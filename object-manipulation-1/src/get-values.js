/* exported getValues */
/*
  input: object(any javascript object)
  output: array(object's property values)

  -create a storage for a newArray to be returned
  -look at each property values in the object and push it to the new array
  -return the array
*/

function getValues(object) {
  var newArray = [];

  for (var i in object) {
    newArray.push(object[i]);
  }
  return newArray;
}
