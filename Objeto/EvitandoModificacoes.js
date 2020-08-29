// Objetct.preventExtensions //Não consegue add novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})
console.log('Extensivel: ', Object.isExtensible(produto)) // Testa se o produto pode ser extensivo

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal //selar só consegue alterar, não conseguindo exlcuir e add
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze // Selado com valores constantes não podendo alterar

const carro = {
    nome: 'Ferrari',
    velMax: 300
}

Object.freeze(carro)
console.log('Selado: ', Object.isFrozen(pessoa))

carro.nome = 'Fiat'
delete carro.velMax
console.log(carro)