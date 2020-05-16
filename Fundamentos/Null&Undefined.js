
let valor
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro Não popoder ler propriedade nula

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined (colocar null)
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)