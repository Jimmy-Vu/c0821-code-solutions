const data = require('./data.json');
const fs = require('fs');

function read() {
  for (let i = 1; i <= data.nextId; i++) {
    if (data.notes[i] !== undefined) {
      console.log(`${i}: ${data.notes[i]}`);
    }
  }
}

function create() {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  returnData();
}

function remove() {
  delete data.notes[process.argv[3]];
  returnData();
}

function update() {
  data.notes[process.argv[3]] = process.argv[4];
  returnData();
}

function returnData() {
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

switch (process.argv[2]) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'delete':
    remove();
    break;
  case 'update':
    update();
    break;
}
