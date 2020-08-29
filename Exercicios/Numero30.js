/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function MaiorMenor(vetor){
    let maior = vetor[0]
    let menor = vetor[0]

    for(let i = 0; i<vetor.length;i++){
        if(vetor[i]>maior){
            maior = vetor[i]
        }else{
            menor = vetor[i]
        }
    }

    return `Maior número: ${maior}, Menor número: ${menor}`
}

const Numero = [2, 4, 6, 8, 25, 12, 14, 16, 18, 1]
console.log(MaiorMenor(Numero));