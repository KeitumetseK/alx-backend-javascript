// 3-read_file_async.js
const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const fields = {};
        lines.slice(1).forEach((line) => {
          if (line) {
            const [firstName, , , field] = line.split(',');
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstName);
          }
        });

        let response = `Number of students: ${lines.length - 1}\n`;
        Object.keys(fields).sort().forEach((field) => {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

        resolve(response.trim());
      }
    });
  });
}

module.exports = { countStudents };

