/*
  ARITMÉTICOS
  + Adição / Concatenaçao
  - Subtração
  / Divisão
  * Multiplicação
  ** Potenciação
  % Resto da Divisão
*/

const num1 = 5; // '5' -> pra concatenar
const num2 = 10;
console.log(num1 + num2)

/* ORDEM DE PRECEDÊNCIA

()
**
* / %
+ -

*/

let contador = 1;
contador++; //2 (++contador)
contador++; //3
console.log(contador++)
// console.log(++contador)

// Incremento = ++
// Decremento = --

let contador = 1; //NAO FAÇA DESSE JEITO
console.log(contador++);

/*QUANDO QUISER ADICIONAR MAIS DE UM VALOR:
const passo = 2;
let contador = 0;

contador = contador + passo // contador += passo
console.log(contador)
contador = contador + passo //contador += passo
console.log(contador)
*/

/*OPERADORES DE ATRIBUIÇÃO
  **=
  
  let contador = 2
contador *= 2;
contador *= 2;
contador *= 2;
console.log(contador)

*/