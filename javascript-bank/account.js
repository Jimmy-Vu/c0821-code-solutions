/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  var transactions = [];

  Account.prototype.deposit = function (amount) {
    if (amount > 0) {
      var newTransaction = new Transaction('deposit', amount);
      transactions.push(newTransaction);
      return true;
    } else { return false; }
  };
}
