//É UM CONTADOR COMO SE FOSSE UM FOR

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

/*const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){ //REDUCE TEM UM FOR INTERNAMENTE
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) //VALOR INICIAL DA SOMA
//COMEÇA A SOMAR APARTIR DO VALOR 10

console.log(resultado)*/

// DESAFIO 1: TODOS OS ALUNOS SAO BOLSISTA?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//DESAFIO 2: ALGUM ALUNO É BOLSISTA?

const AlumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(AlumBolsistas))