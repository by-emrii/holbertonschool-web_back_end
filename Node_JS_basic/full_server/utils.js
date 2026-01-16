const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    // read file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      // if file cannot be read, reject promise
      if (err) {
        reject(err);
        return;
      }

      // split file into lines and remove empty lines
      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      // remove csv headers
      const students = lines.slice(1);

      const fields = {};

      // process each student line
      students.forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        // store firstname under the field
        fields[field].push(firstname);
      });

      // resolve promise with the final object
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
