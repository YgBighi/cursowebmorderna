/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function Impar(inicio, fim){
    if(inicio>fim){
        let num = inicio
        inicio = fim
        fim = num
    }
    if(inicio<0 || inicio>100){
        let aviso = 'Início abaixo de 0 ou acima de 100'
        inicio = 0
    }
    if(fim<0 || fim>100){
        let aviso1 = 'Fim menor que o início ou acima de 100'
        fim = 100
    }
    let contador = []
    let i = 0

    for(inicio; inicio<=fim;inicio++){
        if(inicio%2 == 1){
            contador[i] = inicio
            i++
        }
    }

    return contador
}


console.log(Impar(10, 3))
console.log(Impar(3, 10))