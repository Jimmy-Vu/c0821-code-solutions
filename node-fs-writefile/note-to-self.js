const fs = require('fs');
const data = process.argv[3].toString();
fs.writeFile(process.argv[2], data, err => {
  if (err) throw err;
});
