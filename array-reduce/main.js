const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumReducer = (previousValue, currentValue) => previousValue + currentValue;
const sum = numbers.reduce(sumReducer);
console.log(sum);

const productReducer = (previousValue, currentValue) => previousValue * currentValue;
const product = numbers.reduce(productReducer);
console.log(product);

const balanceReducer = (previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    return previousValue - currentValue.amount;
  }
};
const balance = account.reduce(balanceReducer, 0);
console.log(balance);

const compositeReducer = (previousValue, currentValue) => {
  return Object.assign(previousValue, currentValue);
};
const composite = traits.reduce(compositeReducer);
console.log(composite);
