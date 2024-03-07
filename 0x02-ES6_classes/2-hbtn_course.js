export default class HolbertonCourse {
  constructor(name, length, students) {
    if ((typeof name !== 'string') && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    if ((typeof length !== 'number') && !(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    if (!(students instanceof Array) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    this._length = newLength;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStudents) {
    this._students = newStudents;
  }
}
