function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('Result for convertMinutesToSeconds:', convertMinutesToSecondsResults);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResults = greet('Beavis');
console.log('Result for greet:', greetResults);

function getArea(width, height) {
  return width * height;
}

var getAreaResults = getArea(17, 42);
console.log('Result for getArea:', getAreaResults);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(' Result for getFirstName', getFirstNameResults);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Result for getLastElement:', getLastElementResults);
