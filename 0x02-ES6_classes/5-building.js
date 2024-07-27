export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    this._sqft = this._validateSqft(sqft);
  }

  _validateSqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    return sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
