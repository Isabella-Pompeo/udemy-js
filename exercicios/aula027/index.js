// (condiçao) ? 'valor para verdadeiro' : 'valor para falso';
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';
console.log(nivelUsuario);

const corPadrao = null;
const corPadrao = corPadrao || 'Preta';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//  console.log('Usuário Vip');
// } else if {
//  console.log('Usuário Normal');
// }

/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date( 0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
const data = new Date(2019, 3); // a, m, d, h, M, s, ms
*/

const data = new Date('2019-04-20T20:15:47.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Dia', data.getDate());
console.log('ms', data.getMilliSeconds());
console.log('Dia da Semana', data.getDay());// 0 - Domingo 6 - Sabádo
console.log(data.toDateString());
// console.log(Date.now());
