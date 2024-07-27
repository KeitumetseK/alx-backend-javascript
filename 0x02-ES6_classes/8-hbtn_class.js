export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._validateSize(size);
    this._location = this._validateLocation(location);
  }

  _validateSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    return size;
  }

  _validateLocation(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    return location;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Override default type casting
  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
