// pessoa -> 123 (endereço de memória) -> {...}
const pessoa = {nome : 'Joao'}
pessoa.nome = 'Pedro' //Continua apontando ainda pro endereço de memória 
console.log(pessoa)

// pessoa -> 456 -> {...} //Mandando o atributo apontar para um novo endereço de memória
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //freeze (congelar) não consegue mexer nele, não pode alterar nada (atributos/metódos/etc)

pessoa.nome = 'Maria'
pessoa.end = 'RUA ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)