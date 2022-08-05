let readlineSync = require('readline-sync');


let randomNumber = Math.floor(Math.random() * 10);

let userInput = parseInt(readlineSync.question("Digite um número: "));

if (userInput === randomNumber) {
    console.log("Parabéns, número correto!");
}
else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
}
