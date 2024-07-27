import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = this._validateString(range, 'Range');
  }

  _validateString(value, name) {
    if (typeof value !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
    return value;
  }

  // Getter for the range attribute
  get range() {
    return this._range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    const newCar = new Car(this._brand, this._motor, this._color);
    return newCar;
  }
}
