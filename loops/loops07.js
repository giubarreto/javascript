
const leia = require('readline-sync');
let idade, genero, pessoaDesenvolvedora, continuar;
// Variáveis para contagem
let contBackend = 0;   // Contador para Backend
let contMulheresFrontend = 0; // Contador para Mulheres
let contHomensMobile = 0; // Contador para Homens
let contNaoBinariosFS = 0; // Contador para Não Binários
let totalPessoas = 0; // Contador total de pessoas
let somaIdades = 0; // Soma das idades para calcular a média
continuar = 'S'; // Variável para controle de loop) {
    
while (continuar === 'S') {
idade = leia.questionInt("Digite a idade do colaborador: ");
genero = leia.questionInt("Digite a identidade de genero:\n1 - Mulher Cis\n2 - Homem Cis\n3 - Nao binario \n4 - Mulher Trans\n5 - Homem Trans\n6 - Outros\n");
pessoaDesenvolvedora = leia.questionInt("Digite o tipo de pessoa desenvolvedora \n1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack \n");  
continuar = leia.question("Deseja continuar a leitura dos dados de um novo colaborador? (S/N): ").toUpperCase();
totalPessoas++; // Incrementa -------*+o total de pessoas  ---
somaIdades= somaIdades + idade; // Soma a idade para calcular a média
   if(continuar === 'N') { // Se o usuário não quiser continuar, sai do loop
        break; // Sai do loop
    }
   
    // Verifica o tipo de pessoa desenvolvedora e incrementa os contadores correspondentes
    if (pessoaDesenvolvedora === 1) {
        contBackend++;
    } else if (pessoaDesenvolvedora === 2) {
        if (genero === 1 || genero === 4) { // Mulheres Cis 
            contMulheresFrontend++;
        } else if (pessoaDesenvolvedora === 3) {
           if( genero === 2 || genero === 5 && idade >40) { // Homens Cis
            contHomensMobile++;
        }else if (pessoaDesenvolvedora === 4 && idade < 30) { // Não Binários
            contNaoBinariosFS++;
        }
    
    }
    }
}
let mediaIdade = somaIdades / totalPessoas; // Calcula a média de idade
    console.log("A média de idade das pessoas que responderam à pesquisa é:", mediaIdade);
    console.log("Total de pessoas desenvolvedoras Backend:", contBackend);
    console.log("Total de mulheres desenvolvedoras Frontend:", contMulheresFrontend);
    console.log("Total de homens desenvolvedores Mobile:", contHomensMobile);                   
    console.log("Total de pessoas desenvolvedoras FullStack não binárias:", contNaoBinariosFS); 
    console.log("Total de pessoas desenvolvedoras:", totalPessoas);
    console.log("Média de idades:", mediaIdade.toFixed(2)); // Exibe a média de idades com duas casas decimais
   