/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers[currentNumber - 1] = currentNumber;
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers[currentNumber / 2] = currentNumber;
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = ' ';

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];

  for (var i = 0; i < numbers.length; i++) {
    doubled[i] = numbers[i] * 2;
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];

  var x;
  for (x in object) {
    keys[x] = object[x];
  }
  return keys;
}

function getValues(object) {
  var values = [];
  var x;

  for (x in object) {
    values[x] = object[x];
  }
  return values;
}
