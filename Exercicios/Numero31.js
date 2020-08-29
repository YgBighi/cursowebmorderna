/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function ContarNegativo(vetor){
    let contadorNegativo = 0

    for(let i = 0; i<vetor.length;i++){
        if(vetor[i]<0){
            contadorNegativo++
        }
    }

    return `Foi contado ${contadorNegativo} número(s) negativo(s)`
}

const Numero = [-5, 10, 20, -10, 15, -1, 2, -6]
console.log(ContarNegativo(Numero))