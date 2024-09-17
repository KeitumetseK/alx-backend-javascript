const express = require('express');
const { countStudents } = require('./3-read_file_async');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(path.resolve(__dirname, process.argv[2]))
    .then((data) => {
      res.end(data);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;

