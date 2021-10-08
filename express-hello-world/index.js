const express = require('./node_modules/express/lib/express');
const app = express();

app.use(function (req, res) {
  res.send('You have made it to the final round!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Currently listening on port 3000');
});
