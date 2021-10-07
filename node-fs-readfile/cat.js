const fs = require('fs');

let indexCounter = 2;
fs.readFile(process.argv[indexCounter], 'utf8', function cat(err, data) {
  if (err) throw err;
  if (indexCounter < process.argv.length) {
    console.log(data);
    indexCounter++;
    cat();
  }
});
