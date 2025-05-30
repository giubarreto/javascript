 /*escreva um algoritmo, que leia números inteiros via teclado, 
até que o número zero seja digitado. Ao final, mostre na tela a
 média de todos os números digitados, que sejam múltiplos de 3.
  Veja o exemplo abaixo:
*/
const leia = require('readline-sync');
let numero, soma=0, quantidade=0;
do{ 
    /* peça ao usuário para digitar um número inteiro,
    se o número for maior que zero e for múltiplo de 3,
    some o número à variável soma e incremente a variável quantidade.
    */
    numero=leia.questionInt("digite o  numero:");
    if(numero>0 && numero % 3=== 0){
        soma= soma + numero;
        quantidade++;
    }
} while(numero != 0); // enquanto o número digitado for diferente de zero

if (quantidade > 0) {
    // se a quantidade for maior que zero, calcule a média
    let media = soma / quantidade;
    console.log("A média dos números positivos múltiplos de 3 é:", media);
}  else {   
    // se não houver números válidos, informe ao usuário
    console.log("Nenhum número positivo múltiplo de 3 foi digitado.");
}     

