const leia = require('readline-sync');
let salarioBruto
let adicionalNoturno
let horasExtras
let descontos
let salarioLiquido

salarioBruto = leia.questionFloat('digite o salario bruto:');
console.log('o salario bruto digitado foi:'+
  new Intl.NumberFormat('pt-BR', {
     style: 'currency',
    currency: 'BRL',
   }).format(salarioBruto))

adicionalNoturno = leia.questionFloat('digite o adicional noturno :');
console.log('o adicional noturno digitado foi :'+
    new Intl.NumberFormat('pt-BR', {
  style: 'currency',
    currency: 'BRL',
   }).format(adicionalNoturno))

horasExtras = leia.questionFloat('digite as horas extras:');
console.log('as horas extras são:'+
  new Intl.NumberFormat('pt-BR', {
     style: 'currency',
    currency: 'BRL',
   }).format(horasExtras))


   descontos = leia.questionFloat('digite os descontos:');
console.log('os desconto são no valor de:'+
  new Intl.NumberFormat('pt-BR', {
     style: 'currency',
    currency: 'BRL',
   }).format(descontos))


salarioLiquido= salarioBruto+adicionalNoturno+(horasExtras*5)- descontos

console.log("o salario liquido é:"+
 new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(salarioLiquido))