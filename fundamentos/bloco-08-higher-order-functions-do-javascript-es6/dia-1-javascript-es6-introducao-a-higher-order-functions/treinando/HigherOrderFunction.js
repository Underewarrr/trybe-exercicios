const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);
// Lembre-se: First-Class Functions é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript) trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição, retorno, parâmetro), e HOF é uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.