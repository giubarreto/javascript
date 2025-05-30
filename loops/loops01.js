const leia = require('readline-sync');
let numero 

numero=leia.questionInt("digite o primeiro numero do intervalo(menor):")
console.log("o numero digitado foi",num1)

num2=leia.questionFloat("digite o primeiro numero do intervalo(maior):")
console.log("o numero digitado foi",num2)

if(num1<num2){
console.log ("numeros multiplos de 3 e 5 no intervalo de:", num1 ,"a", num2 )

    for (let intervalo=num1; intervalo <= num2; intervalo++){
        if(intervalo %3===0 && intervalo % 5 ===0 ){
            console.log(intervalo)
        }
    }
}
else {
 console.log("intervalo invalido, o primeiro numero deve ser menor que o segundo")
}









