/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function Multiplicar(vetor, multiplica){
    for(let i = 0; i<vetor.length;i++){
        vetor[i] *= multiplica
    }

    return vetor
}

function MultiplicarMaior5(vetor, multiplica){
    for(let i = 0; i< vetor.length; i++){
        if(vetor[i]>5){
            vetor[i] *= multiplica
        }
    }

    return vetor
}

let Numeros = [2, 4, 6, 8, 10]
console.log(Multiplicar(Numeros, 5))

let Numeros5 = [2, 4, 6, 8, 10]
console.log(MultiplicarMaior5(Numeros5, 5))