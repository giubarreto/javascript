const leia = require('readline-sync');
let saldo,saque,deposito, operacao,novoSaldo
saldo= 1000
console.log("escolha uma opcao abaixo")
console.log("1- consultar saldo")
console.log("2- saque")
console.log("3- deposito")


operacao=leia.questionInt("\nqual operacao gostaria de realizar:", "escolha um numero de 1 a 3:")

switch (operacao){
case 1 :
    operacao= 1
    console.log("\no valor do saldo é: ",
         new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(saldo))
            break

        break
case 2 :
    operacao= 2
    saque= leia.questionFloat("\nqual valor gostaria de sacar?")
    novoSaldo= saldo-saque
    if (novoSaldo>0){
    console.log("\nseu saldo agora é de ",
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSaldo))
        } else {
            console.log("saldo insuficiente")
        }
        break

    case 3 :
       deposito= leia.questionFloat("\nqual valor sera depositado?")
       novoSaldo=saldo+deposito
        operacao=3 
        console.log(" seu novo saldo é ",
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSaldo))
        break

    case 4 :
      console.log("\nopçao invalida")
    }