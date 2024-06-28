/*
const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoal.nome);
*/

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoal = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoal.nome);



function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('James', 'Potter', 21);