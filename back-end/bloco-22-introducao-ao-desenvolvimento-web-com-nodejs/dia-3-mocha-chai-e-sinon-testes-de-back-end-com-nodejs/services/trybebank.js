
import fs from 'fs/promises';
import readline from 'readline-sync';

const file = './account.json'

export async function deposit() {
  const value = readline.questionFloat('Valor para depositar: ');

  const data = { id: Date.now(), value, coin: 'BRL', createdAt: new Date() }

  fs.writeFile(file, JSON.stringify(data, null, 2));

  return data;
}

export async function withdraw() {
  const value = readline.questionFloat('Valor para sacar: ');

  const data = await fs.readFile(file, 'utf8');

  const parsed = JSON.parse(data);

  parsed.value = parsed.value - value;

  fs.writeFile(file, JSON.stringify(parsed, null, 2));

  return parsed;
}

// module.exports = { deposit, withdraw }