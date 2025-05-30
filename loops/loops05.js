const leia = require('readline-sync');
let numero,soma=0, quantidade=0;

do{ 
    numero=leia.questionInt("digite o  numero:");
    if(numero>0 && numero % 3=== 0){
        soma= soma + numero;
        quantidade++
    }
}while(numero != 0); 

console.log("a soma dos numeros positivos multiplos de 3 é:",soma);


