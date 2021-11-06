/* 
    Faça um programa que retorne o maior de três números. 
    Defina no começo do programa três constantes com os valores que serão comparados.
*/
const num1 = 05;
const num2 = 15;
const num3 = 25;
if (num1 < num2 <= num3){ // Num1 Wins
   console.log("num1 wins"); 
}else if(num3 > num2 > num1){ // Num3 lost
    console.log("num3 lost");
}else{console.log("num2 lost");} // num2 lost
