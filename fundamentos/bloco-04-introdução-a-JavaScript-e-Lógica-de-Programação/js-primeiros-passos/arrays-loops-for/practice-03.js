// EXEMPLO FOR DENTRO DE FOR
let ingredientes = ["queijo","presunto","maionese"]; 
let ingredientesAdicionais = true;
let sacola = [];
//if (ingredientesAdicionais === true){
    for(let index = 0; index <= 10; index+=1){
    console.log('Pão sendo criado fora: ', index)
            //Criou o pao
    let pao = [];
            // Adicionar ingredientes
    for( let index = 0; index < ingredientes.length; index+=1){
     console.log('Pão sendo criado exectuou dentro: ', index);
    pao.push(ingredientes[index])
   // pao.push("Tomate", "Alface", "Milho")
    }
    sacola.push(pao);
    console.log(sacola)
    } 
//}