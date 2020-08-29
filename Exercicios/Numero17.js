/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano   Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function AumentoSalario(plano, salario){
    switch(plano){
        case 'a':
            salario = salario*1.1
            return ` R$ ${salario.toFixed(2).replace('.', ',')}`
            break
        case 'b':
            salario = salario*1.15
            return ` R$ ${salario.toFixed(2).replace('.', ',')}`
        case 'c':
            salario = salario*1.2
            return ` R$ ${salario.toFixed(2).replace('.', ',')}`
        default:
            return 'Plano Invalido!'
    }
}

console.log(AumentoSalario('a', 1000))
console.log(AumentoSalario('b', 1000))
console.log(AumentoSalario('c', 1000))
console.log(AumentoSalario('d', 1000))