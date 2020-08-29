/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function MediaVetor(vetor){
    let media = 0
    let valores = 0

    for(let i = 0; i<vetor.length;i++){
        valores += vetor[i]
    }
    media = valores/vetor.length

    return `A media foi ${media}`
}

const Numero = [0, 2, 4, 6, 8, 10]
console.log(MediaVetor(Numero))
