const express = require('express');
const passwordGenerator = require('./main.js');
const PORT = 3000;

const app = express();

app.get('/generate-password', (req, res) => {
  const password = passwordGenerator();
  res.send(password);
});

app.listen(3000, () => {
  console.log(`Server started on port ${PORT}`);
});
