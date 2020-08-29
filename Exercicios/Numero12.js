/*12) Faça um algoritmo que calcule o fatorial de um número.
*/

function Fatorial(num){

    for(let i = num-1;i>1;i--){
        num *= i
    }

    return num
}

console.log(Fatorial(5))