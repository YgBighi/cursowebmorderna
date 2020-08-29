/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

function trocarVetor(vetor1, vetor2){
    if(vetor1.length==vetor2.length){
        for(let i = 0; i< vetor1.length;i++){
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
    }else{
        return `Vetores com tamanhos diferentes!`
    }

    return `${vetor1} || ${vetor2}`
}

let Numero = [1, 3, 5]
let Numero1 = [0, 2, 4]

console.log(trocarVetor(Numero, Numero1))