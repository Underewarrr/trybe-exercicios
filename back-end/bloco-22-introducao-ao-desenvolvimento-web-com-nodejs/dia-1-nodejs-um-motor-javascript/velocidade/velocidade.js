let readlineSync = require('readline-sync');


let distancia = parseInt(readlineSync.question("Digite a distância: "));
let velocidade = parseInt(readlineSync.question("Digite a velocidade: "));

console.log(
    `A velocidade média é ${(distancia / velocidade).toFixed(2)}`
)