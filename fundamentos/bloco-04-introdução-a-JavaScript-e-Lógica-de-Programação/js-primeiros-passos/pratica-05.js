/*
Faça um programa que defina três constantes com os valores dos três 
ângulos internos de um triângulo. Retorne true se os ângulos representarem 
os ângulos de um triângulo e false , caso contrário. 
Se algum ângulo for inválido o programa deve retornar uma mensagem de 
erro.*/
const ang1 = 20;
const ang2 = 60;
const ang3 = 60;
/*
Propriedades dos Triângulos
1) A soma dos ângulos internos de qualquer triângulo é sempre igual a 180º.
2) A soma dos ângulos externos de qualquer triângulo é sempre igual a 360º.
3) Cada ângulo externo é igual à soma dos outros dois internos não adjacentes a ele.
4) O maior lado do triângulo está sempre oposto ao maior ângulo desse triângulo.
*/
const trianguloSomaInterna = ang1 + ang2 + ang3; // (180º / 3) = 60º
const trianguloSomaExterna; // (360º / 3) = 120º
const internosNaoAdjacentes = ang3 + ang1;
const maiorLadoDoTriaungulo = ang2 < ang3 < ang1;

if (trianguloSomaInterna == 180){ // soma interna
    return console.log(trianguloSomaInterna) // triangulo true
}else if (trianguloSomaInterna =! 180){    
    trianguloSomaExterna = trianguloSomaInterna * 2; // Somas dos angulo externos
    return console.log(trianguloSomaExterna);//
}else if ()

