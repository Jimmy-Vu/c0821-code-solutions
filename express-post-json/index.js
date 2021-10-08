const express = require('express');
const app = express();

let nextID = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const returnArray = [];
  for (const x in grades) {
    returnArray.push(grades[x]);
  }
  res.json(returnArray);
});

const appJSON = express.json();
app.use(appJSON);

app.post('/api/grades', (req, res) => {
  grades[nextID] = req.body;
  grades[nextID].id = nextID;
  res.status(200).json(grades[nextID]);
  nextID++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Currently listening on port 3000');
});
