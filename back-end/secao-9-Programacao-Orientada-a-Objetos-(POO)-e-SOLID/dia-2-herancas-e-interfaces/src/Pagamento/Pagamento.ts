// - Pagamento, que define as características básicas que todo pagamento deve ter
//     - conta
//     - valor
//     - descrição

// Novo requisito: todo pagamento deve gerar, durante a efetivação um código transacional que deve ser TTTTTUUUUDDDD, em que T é o getTime() e o UUU é um UUID e o DDDD é a descrição da conta
import crypto from 'node:crypto';
import Conta from '../Conta';

type PagamentoParams = {
  conta: Conta,
  valor: number,
  descricao: string,
};
    
export default class Pagamento {
  private _conta: Conta;
  private _valor: number;
  private _descricao: string;

  // protected _conta: Conta;
  // protected _valor: number;
  // protected _descricao: string;

  constructor(params: PagamentoParams) {
    if (params.valor < 0) {
      throw new Error('INVALID_NEGATIVE_VALUE');
    }

    this._conta = params.conta;
    this._valor = params.valor;
    this._descricao = params.descricao;
  }

  get conta() {
    return this._conta;
  }

  get descricao() {
    return this._descricao;
  }

  get valor() {
    return this._valor;
  }

  protected gerarCodigo() {
    const timestamp = new Date().getTime();
    const uuid = crypto.randomUUID();
    const descricao = this._descricao;

    return `${timestamp}-${uuid}-${descricao}`;
  }
}