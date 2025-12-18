export default class HolbertonCourse {
  constructor(name, length, students) {
    // type checks for attr
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }

    // store attr with _
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // GETTERS AND SETTERS
  get name() { return this._name; }

  set name(newName) {
    this._name = newName;
  }

  get length() { return this._length; }

  set length(newLength) {
    this._length = newLength;
  }

  get students() { return this._students; }

  set students(newStudent) {
    this._students = newStudent;
  }
}
