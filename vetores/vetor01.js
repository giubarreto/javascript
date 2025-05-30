
const leia = require('readline-sync');
let vetor=[2,5,1,3,4,6,8,7,9,10];
let numero = leia.questionInt("Digite um numero para pesquisar no vetor: ");
let encontrado = false;
for (let i = 0; i < vetor.length; i++) {// Percorre o vetor
    // Verifica se o número atual do vetor é igual ao número pesquisado     
    if (vetor[i] === numero) {
        console.log(`O número ${numero} foi encontrado na posição ${i}.`);
        encontrado = true;
    }
}  // Se o número não foi encontrado, exibe a mensagem
    if (!encontrado) {// Se a variável encontrado for falsa, significa que o número não foi encontrado
        console.log("Não foi encontrado!");
    }

