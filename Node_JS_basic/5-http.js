// import the http module
const http = require('http');
const fs = require('fs');

const arg = process.argv[2];
const PORT = 1245;

// create a server object
const app = http.createServer((req, res) => {
  const pathname = req.url;
  // set the response http header with http status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (pathname === '/') {
    // send the response body
    res.end('Hello Holberton School!');
    return;
  }

  if (pathname === '/students') {
    res.write('This is the list of our students\n');

    fs.readFile(arg, 'utf8', (err, data) => {
      if (err) {
        res.end('Cannot load the database');
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      res.write(`Number of students: ${students.length}\n`);

      const fields = {};

      students.forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const field in fields) {
        if (fields[field]) {
          res.write(
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`,
          );
        }
      }

      res.end();
    });
    return;
  }

  // any other routes
  res.statusCode = 404;
  res.end('Not found');
});

app.listen(PORT, 'localhost', () => {
  console.log(`App server running at http://localhost:${PORT}/`);
});

module.exports = app;
