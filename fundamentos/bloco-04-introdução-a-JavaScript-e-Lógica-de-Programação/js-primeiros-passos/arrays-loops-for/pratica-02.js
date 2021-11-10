/*
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
*/
/*      Some Documentation
    FINDING SUM IN ARRAY - https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    WHAT IS REDUCE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    HOW MAKE A FUNCTION? https://www.w3schools.com/js/js_function_closures.asp
*/
/* For Example 4.3 */
/**/

/*
 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
expected output: 10
 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
expected output: 15
*/
//This Variable bellow are called in funcion add
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27].reduce(add, 0); // with initial value to avoid when the array is empty
/*Reduce can call a array and manipuled him with a variale receving value from function in initial arra 0 when add are called
*/
//A function can acess Variable "outside" from the fuction like 'numbers'
// And in this function add are declared outsied in const and after that are used here
// Two new 'variables' are declared when the function start and the magic happen right?
function add(accumulator, a) {
    // Function add receive 2 arguments and return the sum
  return accumulator + a; // returning the sum from acmullator and a
}
// in the Final the result are a Array numbers Mofified by a logic up here /\
console.log(numbers); // 278