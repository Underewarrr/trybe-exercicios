/* O reduce é diferente das outras HOFs : ele possui um parâmetro a mais para a função que recebe como parâmetro. 
Esse parâmetro é chamado de acumulador , comumente referido como acc . E o que ele faz? 
Ele serve para acumular dentro de si os resultados das funções. 
Pense assim: caso não exista segundo parâmetro no reduce , para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial de acc será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr , que é chamado de current . Na segunda vez, acc conterá o retorno da primeira iteração, 
na terceira, o retorno da primeira e da seg
unda, e assim por diante.  */

        // Com o For

//const numbers = [32, 15, 3, 2, -5, 56, 10];
//let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

//for (let index = 0; index < numbers.length; index += 1) {
 // sumNumbers += numbers[index];
//}
//console.log(sumNumbers); // 113


    // Com o Reduce
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
//const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

/* Dissecando as funções:
Usando for :

    Necessidade de criar uma variável para acumular o resultado de cada iteração do for , a soma de cada resultado - let sumNumbers ;
    Necessidade de setar um valor inicial para variável - sumNumbers = 0 ;

Usando .reduce :

    A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number ;
    Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number ;
    O retorno é salvo no primeiro parâmetro , result . É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index] , mas nesse caso seria result = result + number ;
 */