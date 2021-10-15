const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => {
  return number * 2;
});
console.log(doubled);

const prices = numbers.map(number => {
  return `$${number.toFixed(2)}`;
});
console.log(prices);

const upperCase = languages.map(lang => {
  return lang.toUpperCase();
});
console.log(upperCase);

const firstLetters = languages.map(lang => {
  return lang[0];
});
console.log(firstLetters);
