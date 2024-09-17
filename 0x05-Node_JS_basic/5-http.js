const http = require('http');
const { countStudents } = require('./3-read_file_async');
const path = require('path');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    countStudents(path.resolve(__dirname, process.argv[2]))
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;

