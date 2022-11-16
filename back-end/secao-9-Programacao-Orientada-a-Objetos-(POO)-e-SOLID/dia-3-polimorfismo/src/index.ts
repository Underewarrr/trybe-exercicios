import Conta from './Conta';
import Pagamento from './Pagamento/Pagamento';
// import Pagamento from './Pagamento/Pagamento';
import PagamentoFactory from './Pagamento/PagamentoFactory';

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

const netflixNato = PagamentoFactory.create({
  type: 'boleto',
  vencimento: ontem,
  conta: contaDoNato,
  descricao: 'Netflix',
  valor: 55,
});

const lancheIsaac = PagamentoFactory.create({
  type: 'pix',
  chavePix: 'jas89df9adfjsa9adfjsaf',
  conta: contaDoIsaac,
  descricao: 'hamburgao',
  valor: 15,
});

function pagarContas(pagamentos: Pagamento[]) {
  pagamentos.forEach((pagamento) => {
    console.log('----------');
    
    pagamento.efetivarPagamento();
  });
}

pagarContas([netflixNato, lancheIsaac]);

// console.log(pagamentoDaLuz);
// console.log(netflixNato);
