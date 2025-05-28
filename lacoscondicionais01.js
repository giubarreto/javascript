const leia = require('readline-sync');
let numA,numB,numC
numA= leia.questionInt("\nDigite o numero A :");
console.log("o numero A é:" + numA)
numB= leia.questionInt("\nDigite o numero B :");
console.log("o numero B é:" + numB)
numC= leia.questionInt("\nDigite o numero A :");
console.log("o numero C é:" + numC)

if ((numA+numB)>numC){
console.log("A Soma de A + B é Maior do que C");
} else if ((numA+numB)< numC){
console.log("A Soma de A + B é Menor do que C");
}
else((numA+numB)===numC);{
console.log("A Soma de A + B é Igual a C");
}


