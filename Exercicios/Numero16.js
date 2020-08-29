/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function Calculadora(num1, op, num2){
    switch(op){
        case '+':
            return num1+num2
            break
        case '-':
            return num1 - num2
            break
        case '*':
            return num1*num2
            break
        case '/':
            return num1/num2
            break
        default:
            return 'Operacao Invalida!'
    }
}

console.log(Calculadora(2, '+', 2))
console.log(Calculadora(2, '-', 2))
console.log(Calculadora(2, '*', 2))
console.log(Calculadora(2, '/', 2))