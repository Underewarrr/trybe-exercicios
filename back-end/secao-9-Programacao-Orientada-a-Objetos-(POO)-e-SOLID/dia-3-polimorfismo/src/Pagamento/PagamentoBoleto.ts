/* eslint-disable class-methods-use-this */
import Conta from '../Conta';
import Pagamento from './Pagamento';
import { PagamentoMultavel } from './PagamentoMultavel';

// O código da transação via boleto deve acrescentar ao final do código padrão o timestamp do vencimento
export default class PagamentoBoleto 
  extends Pagamento implements PagamentoMultavel {
  private _vencimento: Date;
  private static _multa = 0.2;

  constructor(
    vencimento: Date, 
    conta: Conta, 
    valor: number, 
    descricao: string,
  ) {
    super({
      conta,
      descricao,
      valor,
    });
    this._vencimento = vencimento;
  }

  simularMulta(diasAtrasados: number): number {
    return diasAtrasados * PagamentoBoleto._multa;
  }

  efetivarPagamento() {
    console.log('Pagando via Boleto');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Dados para pagamento boleto:');
    console.log('Descrição:', this.descricao);
    console.log('Vencimento:', this._vencimento);
    console.log('Multa:', PagamentoBoleto._multa);
    console.log('Processando pagamento ...');
  
    let valorCobrado = this.valor;
  
    if (this.estaVencido()) {
      valorCobrado += valorCobrado * PagamentoBoleto._multa;
    }
  
    this.conta.debitar(valorCobrado);
  
    const codigo = this.gerarCodigo();

    console.log('Transação efetivada: ', codigo);
    console.log('Novo saldo:', this.conta.saldo);
  }
  
  private estaVencido() {
    const vencimentoTime = this._vencimento.getTime();
    const nowTime = new Date().getTime();
  
    return vencimentoTime < nowTime;
  }

  protected gerarCodigo(): string {
    const codigoPadrao = super.gerarCodigo();

    return `${codigoPadrao}-${this._vencimento.getTime()}`;
  }
}