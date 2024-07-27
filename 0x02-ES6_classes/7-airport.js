export default class Airport {
  constructor(name, code) {
    this._name = this._validateName(name);
    this._code = this._validateCode(code);
  }

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Override default string description
  toString() {
    return `[object ${this._code}]`;
  }
}
