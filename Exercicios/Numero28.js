/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function ParImparVetor(vetor){
    let impar = 0
    let par = 0

    for(let i = 0; i<vetor.length;i++){
        if(vetor[i]%2==0){
            par++
        }else{
            impar++
        }
    }

    return `Numero(s) pare(s): ${par}, Numero(s) ímpare(s) ${impar}`
}

const Numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(ParImparVetor(Numero))