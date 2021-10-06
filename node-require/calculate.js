const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const a = Number.parseInt(process.argv[2], 10);
const b = Number.parseInt(process.argv[4], 10);

switch (process.argv[3]) {
  case 'add':
    console.log(`Result: ${add(a, b)}`);
    break;
  case 'subtract':
    console.log(`Result: ${subtract(a, b)}`);
    break;
  case 'multiply':
    console.log(`Result: ${multiply(a, b)}`);
    break;
  case 'divide':
    console.log(`Result: ${divide(a, b)}`);
    break;
}
