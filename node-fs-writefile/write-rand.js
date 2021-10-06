const fs = require('fs');

const data = Math.random();
fs.writeFile(process.argv[2], data.toString(), err => {
  if (err) throw err;
});
