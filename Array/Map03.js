Array.prototype.map2 = function(callback) {
    const newArray = []

    for(let i = 0; i< this.length;i++){ //THIS É O ARRAY ORIGINAL
        newArray.push(callback(this[i], i, this)) //ADICIONANDO AO NOVO ARRAY
    }

    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco":7.50}'
]

//RETORNAR UM ARRAY APENAS COM OS PREÇOS

const paraObjeto = json => JSON.parse(json) //TRANSFORMANDO EM OBJETO
const apenasPreco = produto => produto.preco //FAZENDO UM FILTRO PARA BUSCAR APENAS OS PRECOS

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)