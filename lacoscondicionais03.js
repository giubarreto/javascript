const leia = require('readline-sync');
let nome= String
let idade= Number
let primeiraDoacao= Boolean
 
 nome=leia.question("\nDigite seu nome completo:")
 idade=leia.questionInt("\nDigite sua idade:")
 primeiraDoacao=leia.keyInYNStrict("\n E sua primeira doacao?:")

 if (idade > 18 && idade < 60){
 console.log("apto")
 }
 else if ( idade >69 && primeiraDoacao===false){
    console.log (" não apto")
}
else if (idade >=60 && idade <=69 && primeiraDoacao=== true){
    console.log("apto")
}
else {console.log("nao apto ")}





