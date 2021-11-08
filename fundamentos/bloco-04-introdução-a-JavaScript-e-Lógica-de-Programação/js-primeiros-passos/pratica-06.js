/* 
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions */
/* Declare a função 'minhaFunção' */
function changePlayer(pieces) {
    pieces.peiceWhite = "White";
    pieces.pieceBlack = "Black";
  }

  /*  
      Boolean verify
  
  */

  /*
    
  */
//   * Declare a variável 'peiceWhite /  pieceBlack';
//   * crie e inicialize um novo Objeto;
//   * atribua referência para 'pieceBlack'
  var tabuleiroWhite = {
    peiceWhite: "white",
    pieceQuantity: 16,
    pieces:{
      king : "1",
      queen : "1",
      rook : "2",
      bishop : "2",
      knight : "2",
      pawn : "8"
    },
    abilitys:{
        king : "north,south,east,west,northEast,northWest,southEast,southWest",
        queen : "north,south,east,west,northEast,northWest,southEast,southWest",
        rook : "north,east,west,south",
        bishop : "northEast,northWest,southEast,southWest",
        knight : "north,south,east,west,northEast,northWest,southEast,southWest",
        pawn : "north"
      },
    movement:{
      north:"You moved to North",   
      south:"You moved to South", 
      east:"You moved to East",   
      west:"You moved to West", 
      northEast : "You moved to North East",
      northWest : "You moved to North West",
      southEast : "You moved to South East",
      southWest : "You moved to South West" 
    }
  };

  var tabuleiroBlack = {
    peiceBlack: "Black",
    pieceQuantity: 16,
    pieces:{
        king : "1",
        queen : "1",
        rook : "2",
        bishop : "2",
        knight : "2",
        pawn : "8"
      },
      abilitys:{
        king : "north,south,east,west,northEast,northWest,southEast,southWest",
        queen : "north,south,east,west,northEast,northWest,southEast,southWest",
        rook : "north,east,west,south",
        bishop : "northEast,northWest,southEast,southWest",
        knight : "north,south,east,west,northEast,northWest,southEast,southWest",
        pawn : "north"
      },
      movement:{
        north:"You moved to North",   
        south:"You moved to South", 
        east:"You moved to East",   
        west:"You moved to West", 
        northEast : "You moved to North East",
        northWest : "You moved to North West",
        southEast : "You moved to South East",
        southWest : "You moved to South West" 
      }
  };

  /* Exibe 'pieceBlack' */
  console.log(tabuleiroBlack.peiceBlack);
  /* Passe a referência do objeto para a função */
  changePlayer(tabuleiroBlack);
  /*
   * Exibe 'Black' como valor para a propriedade 'pieceBlack'
   * do objeto, mudado pela função.
   */
  console.log(tabuleiroBlack.peiceBlack);

  /* 
  
        Have FUN
  
  */