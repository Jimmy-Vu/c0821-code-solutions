const takeAChance = require('./take-a-chance');
const promise1 = takeAChance('Jimmy');

promise1.then(value => {
  console.log(value);
});

promise1.catch(error => {
  console.log(error.message);
});
