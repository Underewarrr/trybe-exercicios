export default class Email {
  private _value: string;
  private static _regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(value: string) {
    this._value = value;

    this.validate();
  }

  private validate() {
    if (!Email._regex.test(this._value)) {
      throw new Error('INVALID_EMAIL');
    }
  }

  // private static validate(value: string) {
  //   if (!Email._regex.test(value)) {
  //     throw new Error('INVALID_EMAIL');
  //   }
  // }
}