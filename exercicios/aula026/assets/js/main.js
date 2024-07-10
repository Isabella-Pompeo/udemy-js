function meuImc() {
  const peso = document.querySelector('input-teste-1');
  const alturaemM = document.querySelector('input-teste-2');
  const imc = peso / (altura * altura);
  

  if ( imc < 18,5 ) {
    console.log('Abaixo do peso');
  } else if ( 18,5 <= imc <= 24,9 ) {
    console.log('Peso Normal');
  } else if ( 25 <= imc <= 29,9 ) {
    console.log('Sobrepeso');
  } else if ( 30 <= imc <= 34,9 ) {
    console.log('Obesidade grau 1');
  } else if ( 35 <= imc <= 39,9 ) {
    console.log('Obesidade grau 2');
  } else if ( imc > 40) {
    console.log('Obesidade grau 3');
  }
  
  resultado.innerHTML += 
}
