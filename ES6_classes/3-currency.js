export default class Currency {
  constructor(code, name) {
    // type checks during obj creation
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // store it
    this._code = code;
    this._name = name;
  }

  // GETTERS AND SETTERS
  get code() { return this._code; }

  set code(newCode) {
    this._code = newCode;
  }

  get name() { return this._name; }

  set name(newName) {
    this._code = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
