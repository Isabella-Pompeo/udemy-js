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


console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/[a-z]/g))

console.log(umaString.search(/x/g))

console.log(umaString.replace('Um', 'Outro'))
/Um/ (funçoes regulares)
*/



/*
let umaString = "O rato roeu a roupa do rei de roma";

console.log(umaString.replace(/r/g, 'l'))

//FATIAMENTO DE STRING

console.log(umaString.length);

console.log(umaSring.slice(2, 6));

console.log(umaString.slice(-5))

console.log(umaString.slice(-5, umaString.length - 1))

console.log(umaString.slice(-5, -1))

console.log(umaString.slice(umaString.length - 5, umaString.length - 1)) 

*/
let umaString = "O rato roeu a roupa do rei de roma";

console.log(umaString.replace(/r/g, 'l'))

console.log(umaString.substring(umaString.length - 5, umaString.length - 1)) 
  
/*  
  //DIVISAO DE ESPAÇOS

console.log(umaString.split(' '));

console.log(umaString.split('r'));

console.log(umaString.split(' ', 3));

//string toda MAIUSCULA
console.log(umaString.toUpperCase());

//string toda MINUSCULA
console.log(umaString.toLowerCase())

*/


