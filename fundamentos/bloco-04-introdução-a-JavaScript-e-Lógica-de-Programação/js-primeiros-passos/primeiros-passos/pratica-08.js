/* 
Escreva um programa que defina três números em constantes e retorne true 
se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/
const num1 = 3;
const num2 = 1;
const num3 = 5;
result = (num1 != num2 != num3? num1 | num2 | num3 % 2 === 0?true:false:false)
console.log(result);