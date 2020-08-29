const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco":7.50}'
]

//RETORNAR UM ARRAY APENAS COM OS PREÇOS

const paraObjeto = json => JSON.parse(json) //TRANSFORMANDO EM OBJETO
const apenasPreco = produto => produto.preco //FAZENDO UM FILTRO PARA BUSCAR APENAS OS PRECOS

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)