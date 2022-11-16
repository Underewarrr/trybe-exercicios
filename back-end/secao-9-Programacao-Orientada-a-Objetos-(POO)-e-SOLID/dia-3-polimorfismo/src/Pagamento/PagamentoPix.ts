import Conta from '../Conta';
import Pagamento from './Pagamento';

// O código da transação via pix deve ser diferente: CCCCC-DDDDD, em que C é a chave pix para a qual estamos transferindo e D é a descrição do pagamento.

export default class PagamentoPix 
  extends Pagamento {
  private _chavePix: string;

  constructor(
    chave: string,
    conta: Conta,
    descricao: string,
    valor: number,
  ) {
    super({
      conta,
      descricao,
      valor,
    });
    this._chavePix = chave;
  }

  protected gerarCodigo(): string {
    return `${this._chavePix}-${this.descricao}`;
  }

  efetivarPagamento(): void {
    console.log('Pagando via pix');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Dados para pagamento boleto:');
    console.log('Descrição:', this.descricao);
    console.log('Enviando pix para chave: ', this._chavePix);
    console.log('Processando pagamento ...');
  
    this.conta.debitar(this.valor);

    const codigo = this.gerarCodigo();
    console.log('Transação efetivada: ', codigo);
  
    console.log('Novo saldo:', this.conta.saldo);
  }
}