/*
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
*/

/*      Some Documentation
    FINDING SUM IN ARRAY - https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    WHAT IS REDUCE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

*/

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27].reduce(add, 0); // with initial value to avoid when the array is empty


/*
https://www.w3schools.com/js/js_function_closures.asp
*/
function add(accumulator, result) {
  return accumulator + result;
}

console.log(numbers); // 278