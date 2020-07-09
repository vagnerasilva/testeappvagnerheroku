
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`\nApp listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.\n');
});