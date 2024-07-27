import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateAmount(amount);
    this._currency = this._validateCurrency(currency);
  }

  _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    return currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(newAmount) {
    this._amount = this._validateAmount(newAmount);
  }

  set currency(newCurrency) {
    this._currency = this._validateCurrency(newCurrency);
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateAmount(amount);
    this._currency = this._validateCurrency(currency);
  }

  _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    return currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(newAmount) {
    this._amount = this._validateAmount(newAmount);
  }

  set currency(newCurrency) {
    this._currency = this._validateCurrency(newCurrency);
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

