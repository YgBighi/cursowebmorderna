/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.
*/

function AdicionarValores(vetorPilha, vetorAdiciona){
    if(vetorPilha.length == vetorAdiciona.length){
        for(let i = 0; i<vetorPilha.length;i++){
            vetorPilha[i] = vetorAdiciona[i]
        }
    }

    return vetorPilha
}

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 7, 8, 9, 10]

console.log(AdicionarValores(vetor1, vetor2))