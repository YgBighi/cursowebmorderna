/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function ProgressaoAritmetica(numeroTermo, primeiroTermo, razao){
    let soma = 0
    let PA = []
    for(let i = 1; i<=numeroTermo;i++){
        PA[numeroTermo-i] = primeiroTermo+((numeroTermo-i)*razao)
        soma += PA[numeroTermo-i]
    }

    return `PA: ${PA}, soma dos termos: ${soma}`
}

console.log(ProgressaoAritmetica(10, 150000, -2500))

function ProgressaoGeometrica(numeroTermo, primeiroTermo, razao){
    let soma = 0
    let PG = []
    for(let i =1; i<=numeroTermo;i++){
        PG[numeroTermo-i] = primeiroTermo*Math.pow(razao, (numeroTermo-i))
        soma += PG[numeroTermo-i]
    }

    return `PA: ${PG}, soma dos termos: ${soma}`
}

console.log(ProgressaoGeometrica(10, 2,3))