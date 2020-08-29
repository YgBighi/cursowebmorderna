console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 //PODE SER USADO PARA ADICIONAR
exports.b = 2 //PODE SER USADO PARA ADICIONAR
module.exports.c = 3 //FORMA MAIS PADRÃO DE SER USADO

exports = null // NÃO RECEBERÁ NULO POIS DEVE SER COM MODULE.EXPORTS
console.log(module.exports)

exports = { // NÃO RECEBERÁ OBJETO POIS DEVE SER COM MODULE.EXPORTS
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {publico: true}
