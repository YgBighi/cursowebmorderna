/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function Printar(nota100, nota50, nota20, nota10, nota5, nota1){
    if(nota100>0){
        console.log(`Nota(s) de 100: ${nota100}`)
    }
    if(nota50>0){
        console.log(`Nota(s) de 50: ${nota50}`)
    }
    if(nota20>0){
        console.log(`Nota(s) de 20: ${nota20}`)
    }
    if(nota10>0){
        console.log(`Nota(s) de 10: ${nota10}`)
    }
    if(nota5>0){
        console.log(`Nota(s) de 5: ${nota5}`)
    }
    if(nota1>0){
        console.log(`Nota(s) de 1: ${nota1}`)
    }

}
function troco(dinheiro){
    let nota100 = 0
    let nota50 = 0
    let nota20 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valor = dinheiro

    while(100<=valor){
        valor -= 100
        nota100++
    }
    while(50<= valor){
        valor -=50
        nota50++
    }

    while(20<= valor){
        valor -= 20
        nota20++
    }

    while(10<=valor){
        valor -=10
        nota10++
    }

    while(5<=valor){
        valor -= 5
        nota5++
    }

    while(1<= valor){
        valor -=1
        nota1++
    }

    return Printar(nota100, nota50, nota20, nota10, nota5, nota1)
}

troco(10)
troco(14)
troco(23)
troco(55)
troco(1230)
troco(119)