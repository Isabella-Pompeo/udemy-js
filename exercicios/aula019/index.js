/*
Primitivos (imutáveis) - strig, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

let a = 'A'
let b = a; //Cópia
console.log(a, b);

a = 'Outra Coisa';
console.log(a, b);


const a = { // referencia 
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);