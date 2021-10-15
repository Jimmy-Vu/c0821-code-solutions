function filter(array, predicate) {
  const returnArray = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      returnArray.push(array[i]);
    }
  }

  return returnArray;
}
