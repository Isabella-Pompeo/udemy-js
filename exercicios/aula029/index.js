const data = new Date('1987-04-20 00:00:00');
let diaSemana = data.getDay();
diaSemana = 7;
let diaSemanaTexto;

function getDiaSemanaTexto (diaSemanaTexto){
  let diaSemanaTexto;
  
  switch (diaSemana) {
  case 1 :
    diaSemanaTexto = 'Domingo'
    return diaSemanaTexto;
  case 2:
    diaSemanaTexto = 'Segunda'
  return diaSemanaTexto;
  case 3:
    diaSemanaTexto = 'Terça'
  return diaSemanaTexto;
  case 4:
    diaSemanaTexto = 'Quarta'
  return diaSemanaTexto;
  case 5:
    diaSemanaTexto = 'Quinta'
  return diaSemanaTexto;
  case 6:
    diaSemanaTexto = 'Sexta'
  return diaSemanaTexto;
  case 7:
    diaSemanaTexto = 'Sábado'
  return diaSemanaTexto;
  }
}


/*
if (diaSemana === 0) {
  diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
  diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
  diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
  diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
  diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
  diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
  diaSemanaTexto = 'Sábado';
} else {
  diaSemanaTexto = '';
}
*/

const data = new Date('1987-04-20 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto();

console.log(diaSemana, diaSemanaTexto);