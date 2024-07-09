/*
&& -> false && true -> false "o valor mesmo"
||-> true && false -> vai retornar "o valor verdadeiro"




function falaOi() {
  return 'Oi';
}

const vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());

*/

/*
console.log(0 || false || null || 'Luiz Otávio' || true);
*/

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);