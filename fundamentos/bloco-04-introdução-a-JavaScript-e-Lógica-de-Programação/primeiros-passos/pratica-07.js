/* 
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/
var i = 49;

function startTimer() {

    var percentTimer = setInterval(function() {
       
       /* const ar = [];
        i = i + 1;
        i = ar.length[0];*/
        if (i >= 100) {
            clearInterval(percentTimer);
        }
      /*  if (ar.length ===   )//Array.isArray([]);
        {
                console.log("teste");
                console.log(i);
        }*/

    }, 250);

}

startTimer(); 
