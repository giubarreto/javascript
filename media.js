const leia = require('readline-sync');
let nota1, nota2,nota3,nota4, media
nota1= leia.questionFloat("\nDigite a primeira nota:");
console.log("a primeira nota é: " + nota1);
nota2= leia.questionFloat("\nDigite a segunda nota:");
console.log("a segunta nota é: " + nota2);
nota3= leia.questionFloat("\nDigite a terceira nota:");
console.log("a terceira nota é: " + nota3);
nota4= leia.questionFloat("\nDigite a quarta nota:");
console.log("a quarta nota é: " + nota4);

media=(nota1+nota2+nota3+nota4)/4

console.log("a media final é : " + media);