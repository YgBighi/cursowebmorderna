/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function NotasAluno(nota1, nota2, nota3){
    nota1 *= 4
    nota2 *= 3
    nota3 *= 3

    let media = (nota1+nota2+nota3)/10

    if(media<5){
        return `Nota Média do Aluno: ${media.toFixed(2)}, REPROVADO!`
    }else{
        return `Nota Média do Aluno: ${media.toFixed(2)}, APROVADO!`
    }
}

console.log(NotasAluno(5, 5, 5))
console.log(NotasAluno(1, 5, 5))
console.log(NotasAluno(10, 5, 5))
console.log(NotasAluno(9, 9, 9))