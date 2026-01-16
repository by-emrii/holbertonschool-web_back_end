const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    // call database with process argv directly
    readDatabase(process.argv[2])
      .then((fields) => {
        response.status(200);
        response.write('This is the list of our students\n');

        // sort fields alphabetically (case sensitive)
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        // write each field student data
        sortedFields.forEach((field) => {
          response.write(
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`,
          );
        });
        response.end();
      })
      .catch(() => {
        // if database n/a
        response.status(500).send('Cannot load the database');
      });
  }

  // Handles GET /students/:major
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    // validate major check
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((fields) => {
        response.status(200);
        response.send(`List: ${fields[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
