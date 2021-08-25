var num1 = 68;
var num2 = 348;
var num3 = 937;

var maximumValue = Math.max(num1, num2, num3);
console.log('Value of maximumValue:', maximumValue);

var heroes = ['Captain America', 'Colossus', 'Task Master', 'Luke Cage'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

var library = [
  {
    title: 'Hello There',
    author: 'Kenobi'
  },
  {
    title: 'Swimmy The Fish: Adventure in Rainbowland',
    author: 'Jimmy'
  },
  {
    title: 'Swimmy The Fish: Back for Blood',
    author: 'Jimmy'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('Value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library:', library);

var fullName = 'Jimmy Vu';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);
