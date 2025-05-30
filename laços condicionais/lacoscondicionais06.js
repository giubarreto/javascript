const leia = require('readline-sync');
let colaborador, cargo,reajustePerc, novoSalario, salario
console.log("digite seu cargo")
console.log("1-gerente")
console.log("2-vendedor")
console.log("3-supervisor")
console.log("4-motorista")
console.log("5-estoquista")
console.log("6-tecnico de TI")

colaborador= leia.question("digite seu nome:")
cargo=leia.questionInt("\nqual o seu cargo?", "escolha um numero de 1 a 6:")
salario= leia.questionFloat("digite seu salario atual:")

switch (cargo){
case 1 :
    reajustePerc=0.10
novoSalario = salario + (reajustePerc*salario)
    console.log("cargo:gerente \nnovo Salario:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSalario))
        break
case 2 :
        reajustePerc=0.07
    novoSalario = salario+(reajustePerc*salario)
    console.log("cargo: vendendor \nnovo salario:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSalario))
        break

    case 3 :
        reajustePerc=0.09
   novoSalario = salario+(reajustePerc*salario)
    console.log("cargo:supervisor \nnovo salario:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSalario))
        break

        case 4 :
        reajustePerc=0.06
    novoSalario = salario+(reajustePerc*salario)
    console.log("cargo:motorista \nnovo salario:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSalario))
        
        break

        case 5 :
        reajustePerc=0.05
    novoSalario = salario+(reajustePerc*salario)
    console.log("cargo:estoquista \nnovo salario:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSalario))
        break

        case 6 :
        reajustePerc=0.08
    novoSalario = salario+(reajustePerc*salario)
    console.log("cargo:tecnico de TI \nnovo salario:",
           new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSalario))
        break
}
        
        console.log("nome do colaborador:",colaborador)
        console.log("cargo:",cargo)
        console.log("novo salario reajustado:",novoSalario)

        










        