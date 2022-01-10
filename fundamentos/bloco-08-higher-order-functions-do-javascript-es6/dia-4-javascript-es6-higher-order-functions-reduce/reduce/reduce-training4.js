const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// para diferenciar os pares
const isEven = (numbers) => number % 2 === 0;
// para somar passamos o valor 
const sumRest = (value, numbers) => value + numbers;
// entrando no array com filter e aplicando a function isEven e Sumrest
const sum = (array) => array.filter(isEven).reduce(sumRest)
// console log number com a função soma
console.log(sum(number));