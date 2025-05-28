const leia = require('readline-sync');
let produt, quantidade,preco, valorTotal
console.log("escolha o cardapio")
console.log("1-cachorro quente")
console.log("2-x salada")
console.log("3-x bacon")
console.log("4-bauru")
console.log("5-refrigerante")
console.log("6-suco de laranja")

produto=leia.questionInt("\nqual produto voce gostaria?", "escolha um numero de 1 a 6:")
quantidade= leia.questionInt("digite a quantidade que deseja:")

switch (produto){
case 1 :
    preco=10
    valorTotal= preco*quantidade
    console.log("produto:cachorro quente \nvalor total:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valorTotal))
        break
case 2 :
        preco=15
    valorTotal= preco*quantidade
    console.log("produto:x salada \nvalor total:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valorTotal))
        break

    case 3 :
        preco=18
    valorTotal= preco*quantidade
    console.log("produto:x bacon \nvalor total:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valorTotal))
        break

        case 4 :
        preco=12
    valorTotal= preco*quantidade
    console.log("produto:bauru \nvalor total:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valorTotal))
        
        break

        case 5 :
        preco=8
    valorTotal= preco*quantidade
    console.log("produto: refrigerante \nvalor total:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valorTotal))
        break

        case 6 :
        preco=13
    valorTotal= preco*quantidade
    console.log("produto:suco de laranja \nvalor total:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valorTotal))
        break
}
        
        
        










        