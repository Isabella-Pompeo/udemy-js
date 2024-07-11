// capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }
  
  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }
  
  const imc = getImc(peso, altura);
  
  console.log(imc);
  //continua
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
  
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  
  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p);
}

function meuImc() {

  if (imc < 18, 5) {
    console.log('Abaixo do peso');
  } else if (18, 5 <= imc <= 24, 9) {
    console.log('Peso Normal');
  } else if (25 <= imc <= 29, 9) {
    console.log('Sobrepeso');
  } else if (30 <= imc <= 34, 9) {
    console.log('Obesidade grau 1');
  } else if (35 <= imc <= 39, 9) {
    console.log('Obesidade grau 2');
  } else if (imc > 40) {
    console.log('Obesidade grau 3');
  }
  resultado.innerHTML += `<p>Meu ${imc}</p>`;

}


