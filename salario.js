const leia = require('readline-sync');
let salario
let abono 
let novoSalario 

salario = leia.questionFloat('digite o salario:');
console.log('o salario digitado foi:'+
  new Intl.NumberFormat('pt-BR', {
     style: 'currency',
    currency: 'BRL',
   }).format(salario))

abono = leia.questionFloat('digite o abono:');
console.log('o abono digitado foi :'+
    new Intl.NumberFormat('pt-BR', {
  style: 'currency',
    currency: 'BRL',
   }).format(abono))
 
novoSalario= salario+abono

console.log("o novo salario é:"+
 new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(novoSalario))