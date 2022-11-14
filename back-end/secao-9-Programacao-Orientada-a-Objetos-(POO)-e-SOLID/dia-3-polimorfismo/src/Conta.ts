// Vamos criar um novo software para um banco.
// Deve ser possível clientes criarem contas com um valor depositado inicialmente; 
// Deve ser possível realizar um débito na conta, contanto que a pessoa possua saldo suficiente.

import Email from './Email';

export default class Conta {
  // saldo = 0;
  private _saldo: number;
  private _email: Email;

  constructor(depositoInicial: number, email: string) {
    this._saldo = depositoInicial;
    this._email = new Email(email);
  }

  getSaldo() {
    return this._saldo;
  }

  get saldo() {
    return this._saldo;
  }

  public debitar(value: number) {
    if (value > this._saldo) {
      throw new Error('SALDO_INSUFICIENTE');
    }

    this._saldo -= value;
  }

  // set saldo(value: number) {
  //   this._saldo = value;
  // }

  // setSaldo(value: number) {
  //   this._saldo = value;
  // }
}