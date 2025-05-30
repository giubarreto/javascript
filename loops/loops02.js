const leia = require('readline-sync');
let contador,numero, totalPares=0, totalImpares=0;

for (contador=1; contador<=10; contador ++){
    numero=leia.questionInt("digite o "+ contador +" numero:");
    if (numero % 2 === 0){
        totalPares++;
    } else {
       totalImpares ++;

    }
}

console.log("total de impares é:"+ totalImpares)
console.log("Total de pares é:"+totalPares)

