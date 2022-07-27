let altura = parseFloat(("1.79").replace(",", "."));
let peso = parseFloat(("68").replace(",", "."));
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