/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function PlanoSaude(idade){
    let valor = 100

    if(idade<10){
        valor += 80
    }
    if(idade>=10 && idade <= 30){
        valor +=50
    }
    if(idade>30 && idade<=60){
        valor += 95
    }
    if(idade>60){
        valor +=130
    }

    return `R$ ${valor.toFixed(2).replace('.', ',')}`
}

console.log(PlanoSaude(9))
console.log(PlanoSaude(10))
console.log(PlanoSaude(30))
console.log(PlanoSaude(31))
console.log(PlanoSaude(60))
console.log(PlanoSaude(61))