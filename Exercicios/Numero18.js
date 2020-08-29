/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function EscreverNumero(num){
    switch(num){
        case 1:
            return 'um'
            break;
        case 2:
            return 'dois'
            break
        case 3:
            return 'três'
            break
        case 4:
            return 'quatro'
            break
        case 5:
            return 'cinco'
            break
        case 6:
            return 'seis'
            break
        case 7:
            return 'sete'
            break
        case 8:
            return 'oito'
            break
        case 9:
            return 'nove'
            break
        case 10:
            return 'dez'
            break
        default:
            return 'Numero fora do intervalo'
            break
    }
}

console.log(EscreverNumero(1))
console.log(EscreverNumero(2))
console.log(EscreverNumero(3))
console.log(EscreverNumero(4))
console.log(EscreverNumero(5))
console.log(EscreverNumero(6))
console.log(EscreverNumero(7))
console.log(EscreverNumero(8))
console.log(EscreverNumero(9))
console.log(EscreverNumero(10))
console.log(EscreverNumero(11))