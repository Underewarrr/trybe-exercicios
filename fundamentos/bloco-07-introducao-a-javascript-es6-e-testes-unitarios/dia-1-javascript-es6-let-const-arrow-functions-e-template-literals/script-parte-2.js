/* Abaixo, você verá algumas especificações de algoritmos para desenvolver. 
É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , 
template literals e ternary operator .
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , 
é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: 
É possível resolver com uma linha usando ternary operator . */
const factorial = (n) => n > 1 ? n * factorial(n - 1) : 1;
  console.log(factorial(5));
/* Crie uma função que receba uma frase e retorne qual a maior palavra. */

const longestWord = (tm) => {
    let longestWord = '';
    longestWord.split(' ').forEach((word) => { if (word.length > longestWord.length) longestWord = word; });
    return longestWord;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
/* Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */
const button = document.querySelector('#clickb');
const span = document.querySelector('#countc');
button.addEventListener('click', () => { span.innerText = +span.innerText + 1; });

/* Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!" */

const serverSave = (string) => {
    let str = 'Tryber x aqui!';
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    return str.replace(/x/g, string);
}
const result = serverSave('Rafhael');
console.log(result);

const arr = ['JavaScript' , 'HTML' , 'CSS' , 'Git', 'ES6'];
const saveSkills = (string) => {
    return `${result} Minhas cinco principais habilidades são:
    ${arr[0]};
    ${arr[1]};
    ${arr[2]};
    ${arr[3]};
    ${arr[4]};
    #goTrybe 
    `
}
//https://stackoverflow.com/questions/53421388/create-string-template-and-replace-with-contents-of-array
console.log(saveSkills(result));