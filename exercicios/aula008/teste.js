/*Isabella Ramos Pompeo tem 17 anos, pesa 64kg tem 1.7 de altura e seu IMC é 25.252525
Isabella nasceu em 2006*/

const nome = 'Isabella';
const sobrenome = 'Ramos Pompeo';
const idade = 17;
const peso = 64;
const alturaEmM = 1.70;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2024 - idade;

//+
// Template String

//console.log(nome +''+ sobrenome + 'tem' + idade + 'anos, pesa' + peso + 'kg tem ', altura,' de altura e seu IMC é ', imc)
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg tem ', altura,' de altura e seu IMC é ', imc)
console.log(`${nome} nasceu em ${anoNascimento}`);