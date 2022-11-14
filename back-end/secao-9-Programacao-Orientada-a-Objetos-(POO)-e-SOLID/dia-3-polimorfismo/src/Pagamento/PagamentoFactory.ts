import Conta from '../Conta';
import Pagamento from './Pagamento';
import PagamentoBoleto from './PagamentoBoleto';
import PagamentoPix from './PagamentoPix';

type PagamentoFactoryParams = {
  type: 'boleto',
  vencimento: Date,
  conta: Conta,
  valor: number,
  descricao: string
} | {
  type: 'pix',
  chavePix: string,
  conta: Conta,
  valor: number,
  descricao: string
};

export default class PagamentoFactory {
  static create(params: PagamentoFactoryParams): Pagamento {
    if (params.type === 'boleto') {
      return new PagamentoBoleto(
        params.vencimento, 
        params.conta,
        params.valor,
        params.descricao,
      );
    }

    if (params.type === 'pix') {
      return new PagamentoPix(
        params.chavePix, 
        params.conta,
        params.descricao,
        params.valor,
      );
    }

    throw new Error('INVALID_PAYMENT_TYPE');
  }
}