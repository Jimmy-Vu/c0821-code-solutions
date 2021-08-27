/* exported includesSeven */
function includesSeven(array) {
  var sevenExists = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenExists = true;
    }
  }

  return sevenExists;
}
