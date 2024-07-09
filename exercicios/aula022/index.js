/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

const usuario = 'Luiz'; //form usuario digitou
const senha = '123456'; //form usuario digitou

//                    true              false
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar)

