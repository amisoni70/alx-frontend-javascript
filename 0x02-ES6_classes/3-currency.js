export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }
}
