const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = this._validateString(brand, 'Brand');
    this._motor = this._validateString(motor, 'Motor');
    this._color = this._validateString(color, 'Color');
  }

  _validateString(value, name) {
    if (typeof value !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
    return value;
  }

  // Getters
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    const newCar = Object.create(Object.getPrototypeOf(this));
    Object.getOwnPropertyNames(this).forEach((key) => {
      newCar[key] = this[key];
    });
    return newCar;
  }
}
