export default class Currency {
  constructor(code, name) {
    this._code = this._validateCode(code);
    this._name = this._validateName(name);
  }

  _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
  }

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(newCode) {
    this._code = this._validateCode(newCode);
  }

  set name(newName) {
    this._name = this._validateName(newName);
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
