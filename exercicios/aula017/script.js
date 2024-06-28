function soma(x,y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

/*
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4, 2)
console.log(resultado)
*/


const raiz = function (n) {
    return n ** 0.5;
}; //FUNÇAO DENTRO DE VARIAVEL PRECISA DE ASPAS NO FINAL

console.log(raiz(9));
console.log(raiz(25))

/* 2 OPÇAO
const raiz = (n) => {
    return n ** 0.5;
}; //FUNÇAO DENTRO DE VARIAVEL PRECISA DE ASPAS NO FINAL

console.log(raiz(9));
console.log(raiz(25))
*/

/* 3 OPÇAO
const raiz = n => n ** 0.5;


console.log(raiz(9));
console.log(raiz(25))
*/