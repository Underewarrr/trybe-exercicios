import { deposit, withdraw } from './services/trybebank.js'
import readline from 'readline-sync';

async function main() {
  const options = ['Deposito', 'Saque'];
  const index = readline.keyInSelect(options, 'Qual opção?');

  const procedure = [deposit, withdraw];

  procedure[index]();
};

main();