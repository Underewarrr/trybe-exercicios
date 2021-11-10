    /*
    Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
    */
    /*      Some Documentation
        FOR https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
        FINDING SUM IN ARRAY - https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
        WHAT IS REDUCE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        HOW MAKE A FUNCTION? https://www.w3schools.com/js/js_function_closures.asp
    /*
1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
expected output: 10
5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
expected output: 15
    */
    //This Variable bellow are called in funcion add
 const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27].reduce(add, 0); 
    //Reduce can call a array and manipuled him with a variale receving value from function in initial array 0 when add are called

    /*
    A function can acess Variable "outside" from the fuction like 'numbers'
    And in this function add are declared outsied in const with reduce and after that are used here
    Two new 'variables' are declared when the function start and the magic happen right?
    */
    function add(accumulator, a) {
    // acumulator are a parameter from reducer, check more in sintax 
    /*
    O método reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:

        acumulador - valor inicial (ou o valor do callback anterior),
        valorAtual - o valor do elemento atual
        index - o índice atual e
        array - o array onde a iteração está ocorrendo.
    */  
    // Function add receive 2 arguments and return the sum
  return accumulator + a; // returning the sum from acmullator and a
}
// in the Final the result are a Array numbers Mofified by a logic up here /\
console.log(numbers); // 278
/* const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // with initial value to avoid when the array is empty
 
            for Solution  
   
/* const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
console.log(sum); */
