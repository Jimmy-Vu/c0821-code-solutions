/* exported getKeys */
/*
  input: object(any javascript object)
  output: array(object's property keys)

  -create a storage for a newArray to be returned
  -look at each property key in the object and push it to the new array
  -return the array
*/

function getKeys(object) {
  var newArray = [];

  for (var i in object) {
    newArray.push(i);
  }
  return newArray;
}
