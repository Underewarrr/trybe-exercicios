export default class Email {
  private _value: string;

  constructor(value: string) {
    this._value = value;

    this.validate();
  }

  private validate() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(this._value)) {
      throw new Error('INVALID_EMAIL');
    }
  }
}