// Array é um Objeto
//Trabalhar com dados homogênios dentro de Array (mesmo tipo)
console.log(typeof Array, typeof new Array, typeof []) 

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') //Metodo Push adicionar no final do Array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Método Sort para organizar dentro, fazendo classificação 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) 
//Remover e adicionar ao memso tempo
//splice(x, y) tudo por indíce
// x começo do Array que deseja mudar
// y até onde vai excluir
// Se y = 0, vai adicionar apartir do inicio
console.log(aprovados)