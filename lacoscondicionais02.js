const leia = require('readline-sync');
let num
num= leia.questionInt("\nDigite um numero  :");
console.log("o numero escolhido é:" + num)


if ((num %2 ===0 && num> 0)){
console.log("o numero é par e positivo ");
return
} else if ((num %2===0 && num < 0)){
console.log("o numero é par e negativo");
return
}
else if ( num %2===1 && num > 0){
console.log("o numero é impar e positivo");
return
}
else ( num %2 ===1 && num < 0);{
    console.log ("o numero é impar e negativo");
}
