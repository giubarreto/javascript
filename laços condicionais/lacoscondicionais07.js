const leia = require('readline-sync');
let num1, num2, operacao,codigo

console.log("veja as operacoes abaixo")
console.log("1-soma")
console.log("2-subtracao")
console.log("3-multiplicacao")
console.log("4-divisao")

codigo=leia.questionInt("\nqual operacao gostaria de realizar:", "escolha um numero de 1 a 4:")
num1=leia.questionFloat("escolha o primeiro numero:")
console.log("voce escolheu:", num1)
num2= leia.questionFloat("escolha o segundo numero:")
console.log("o segundo numero escolhido foi :", num2)


switch (codigo){
case 1 :
    codigo= 1
    operacao = num1+num2
    console.log("o valor : ",operacao)

        break
case 2 :
    codigo=2
    operacao= num1-num2
    console.log("o valor é ",operacao)

        break

    case 3 :
        codigo= 3
        operacao=num1*num2 
        console.log("o valor é ",operacao)
        break

        case 5 :
        codigo=4
        operacao=num1/num2
        console.log("o valor é ",operacao)
           
        break

    case 4 :
      console.log("opçao invalida")
}









        