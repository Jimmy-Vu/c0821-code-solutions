/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  var newTransaction = new Transaction('deposit', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(newTransaction);
    return true;
  } else { return false; }
};

Account.prototype.withdraw = function (amount) {
  var newTransaction = new Transaction('withdrawal', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(newTransaction);
    return true;
  } else { return false; }
};

Account.prototype.getBalance = function () {
  var total = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      total += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      total -= this.transactions[i].amount;
    }
  }
  return total;
}
;
