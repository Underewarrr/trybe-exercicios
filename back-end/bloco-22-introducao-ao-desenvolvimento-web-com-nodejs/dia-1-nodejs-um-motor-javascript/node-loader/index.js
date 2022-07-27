
console.log('Selecione um módulo:');
console.log('1 - IMC (Índice de Massa Corporal)');
console.log('2 - Sorteio (Sorteio de um numero aleatório de de 0 a 10)'); 
console.log('3 - Velocidade (Calcula a velocidade media de uma distancia e tempo)');
console.log('4 - Sair');

let readlineSync = require('readline-sync');

console.log( 'Digite o número do módulo: ');

let userInput = parseInt(readlineSync.question());

if (userInput === 1) {
    console.log('Carregando módulo Imc...');
    let nodeLoader = require('../imc/imc');
}
else if (userInput === 2) {
    console.log('Carregando módulo Sorteio...');
    let nodeLoader2 = require('../sorteio/sorteio');
}
else if (userInput === 3) {
    console.log('Carregando módulo Velocidade...');
    let nodeLoader3 = require('../velocidade/velocidade.js');
}
else if (userInput === 4) {
    console.log('Saindo...');
}
else {
    console.log('Módulo inválido!');
}

