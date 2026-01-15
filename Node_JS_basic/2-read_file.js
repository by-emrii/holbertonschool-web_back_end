const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    // read files synchronously
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // splits file into individual lines, filter out whitespaces etc
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  // remove header
  const students = lines.slice(1);
  console.log(students);

  console.log(`Number of students: ${students.length}`);

  // object to group students by field
  const fields = {};
  // looping through each line
  students.forEach((line) => {
    // split the CSV row by commas
    const individual = line.split(',');
    const firstName = individual[0];
    const field = individual[3];

    // if field does not exist yet, create an empty array
    if (!fields[field]) {
      fields[field] = [];
    }

    // add students firstname to correct field array
    fields[field].push(firstName);
  });

  // loop through each field in fields obj
  for (const field in fields) {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }
}

module.exports = countStudents;
