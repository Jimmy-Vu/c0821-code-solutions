const express = require('./node_modules/express/lib/express');

const newExpress = express();

newExpress.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});