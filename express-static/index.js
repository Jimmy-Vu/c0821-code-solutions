const express = require('express');
const path = require('path');

const app = express();

const joinReturn = path.join(__dirname, 'public');

const staticReturn = express.static(joinReturn);

app.use(staticReturn);

app.listen(3000, () => {
  console.log('Currently listening on port 3000');
});
