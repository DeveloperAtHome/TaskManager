const express = require('express')
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);

console.log("\x1b[42m", 'Succesfull started application (port 3000)...');