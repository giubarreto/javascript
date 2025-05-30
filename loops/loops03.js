const leia = require('readline-sync');
let idade,totalMaiores=0, totalMenores=0;
 idade=leia.questionInt("digite uma idade ou um numero negativo para sair:");

while (idade>=0){
    if (idade < 21){
        totalMenores++;
    } else if (idade >= 50){
       totalMaiores ++;

    }
    idade=leia.questionInt("digite uma idade ou um numero negativo para sair:");}

console.log("total maiores de 50 é:"+ totalMaiores);
console.log("Total menores de 21 é:"+ totalMenores)

