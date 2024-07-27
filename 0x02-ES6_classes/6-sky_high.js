import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this._validateFloors(floors);
  }

  _validateFloors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Number of floors must be a number');
    }
    return floors;
  }

  // Getters
  get floors() {
    return this._floors;
  }

  // Override method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
