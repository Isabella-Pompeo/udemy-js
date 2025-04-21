/*
//01234567 -> indices de uma string
let umaString = "Um \"texto\"";

console.log(umaString[4]);
//console.log(umaString.charAt(6));


/*
console.log(umaString.concat(' em um lindo dia.'))
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia.`)

console.log(umaString.indexOf('texto'))
console.log(umaString.indexOf('o', 3))



//OBS: DE TRAS PRA FRENTE
console.log(umaString.lastIndexOf('o')


console.log(umaString.match(/[a-z]/g)); global, ou seja, encontra todas as ocorrências e devolve um array

console.log(umaString.search(/[a-z]/g)) procura a posição da primeira ocorrência que bate com a expressão.

console.log(umaString.search(/x/g))

console.log(umaString.replace('Um', 'Outro'))
/Um/ (funçoes regulares)
*/



/*
let umaString = "O rato roeu a roupa do rei de roma";

console.log(umaString.replace(/r/g, 'l'))

//FATIAMENTO DE STRING

console.log(umaString.length); total de caracteres

console.log(umaString.slice(2, 6)); Corta a string a partir do índice 2 até o índice 6 (excluindo o 6).

console.log(umaString.slice(-5)) começa a contar de trás para frente, a pártir do -1.

console.log(umaString.slice(-5, umaString.length - 1)) "exto"

console.log(umaString.slice(-5, -1)) "exto"

console.log(umaString.slice(umaString.length - 5, umaString.length - 1)) "exto"

*/
let umaString = "O rato roeu a roupa do rei de roma";


console.log(umaString.replace(/r/g, 'l'))

console.log(umaString.substring(umaString.length - 5, umaString.length - 1)) // não aceita negativos e se inverter as posições, ele troca elas pra você
  
/*  
  //DIVISAO DE ESPAÇOS

console.log(umaString.split(' ')); Divide a string em um array de pedaços, usando o separador que você passar.

console.log(umaString.split('r'));  dividir a string sempre que encontrar a letra 'r'.

console.log(umaString.split(' ', 3)); Divide pelos espaços, no máximo 3 vezes

//string toda MAIUSCULA
console.log(umaString.toUpperCase());

//string toda MINUSCULA
console.log(umaString.toLowerCase())

*/