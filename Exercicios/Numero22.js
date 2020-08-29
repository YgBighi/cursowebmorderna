/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function Anuidade(mes, valor){
    if(mes ==1){
        valor = valor
    }

    if(mes>1){
        let tempo = mes - 1
        let taxa = 1+0.05
        valor = valor * Math.pow(taxa, tempo)
    }

    return `R$ ${valor.toFixed(2).replace('.', ',')}`
}

console.log(Anuidade(1, 1000))
console.log(Anuidade(2, 1000))
console.log(Anuidade(3, 1000))
console.log(Anuidade(4, 1000))
console.log(Anuidade(5, 1000))
console.log(Anuidade(6, 1000))