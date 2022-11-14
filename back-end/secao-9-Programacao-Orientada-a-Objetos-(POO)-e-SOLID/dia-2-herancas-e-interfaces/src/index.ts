import Conta from './Conta';
// import Pagamento from './Pagamento/Pagamento';
import PagamentoBoleto from './Pagamento/PagamentoBoleto';
import { PagamentoEfetivavel } from './Pagamento/PagamentoEfetivavel';
import PagamentoPix from './Pagamento/PagamentoPix';

const contaDoIsaac = new Conta(1000, 'isaac@trybe.com');
const contaDoNato = new Conta(2000, 'nato@trybe.com');

const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);

const ontem = new Date();
ontem.setDate(ontem.getDate() - 1);

// const pagamentoDaLuz = new Pagamento({
//   conta: contaDoIsaac,
//   descricao: 'Pagamento de Luz',
//   valor: 100,
// });

const netflixNato = new PagamentoBoleto(
  ontem,
  contaDoNato,
  55,
  'Netflix',
);

const lancheIsaac = new PagamentoPix(
  'jas89df9adfjsa9adfjsaf',
  contaDoIsaac,
  'Hamburgao',
  15,
);

function pagarContas(pagamentos: PagamentoEfetivavel[]) {
  pagamentos.forEach((pagamento) => {
    pagamento.efetivarPagamento();
  });
}

pagarContas([netflixNato, lancheIsaac]);

// console.log(pagamentoDaLuz);
// console.log(netflixNato);
