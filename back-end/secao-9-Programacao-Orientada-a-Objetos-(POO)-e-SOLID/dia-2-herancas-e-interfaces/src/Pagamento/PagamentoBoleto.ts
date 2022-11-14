import Conta from '../Conta';
import Pagamento from './Pagamento';
import { PagamentoEfetivavel } from './PagamentoEfetivavel';

export default class PagamentoBoleto 
  extends Pagamento implements PagamentoEfetivavel {
  private _vencimento: Date;
  private _multa: number;

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
    this._multa = 0.2;
  }

  efetivarPagamento() {
    console.log('Pagando via Boleto');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Dados para pagamento boleto:');
    console.log('Descrição:', this.descricao);
    console.log('Vencimento:', this._vencimento);
    console.log('Multa:', this._multa);
    console.log('Processando pagamento ...');
  
    let valorCobrado = this.valor;
  
    if (this.estaVencido()) {
      valorCobrado += valorCobrado * this._multa;
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
}