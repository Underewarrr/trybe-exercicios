let readlineSync = require('readline-sync');

let altura = parseFloat(readlineSync.question("Digite sua altura: "));
let peso = parseFloat(readlineSync.question("Digite seu peso: "));
let imc = peso / (altura * altura);
console.log(`Seu IMC é ${imc}`);
if (imc < 18.5) {
    
    console.log("Você está abaixo do peso");
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Você está no peso ideal");
}
else {
    console.log("Você está acima do peso");
}