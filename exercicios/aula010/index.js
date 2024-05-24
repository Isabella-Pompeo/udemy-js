// Tipos de Dados Primitivos
// String, Number, Undefined, Null, Boolean, Symbol

const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.52 //number
let nomeAluno; //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; //nulo -> não aponta para local nenhum na memória
const aprovado = true //Boolean true, false (lógico)

console.log(typeof nomeAluno, nomeAluno);

let a = 2;
const b = a;
console.log(a, b) // 2, 2

a = 3;
console.log(a, b) // 3, 2