/*26) Fazer um programa para encontrar todos os pares entre 1 e 100
*/

function Par(num){
    let qtdPar = 0
    for(i=1; i<=num;i++){
        if(i%2==0){
            console.log(i)
            qtdPar++
        }
    }
    console.log(`Foram ${qtdPar} número pares!`)
}

Par(10)