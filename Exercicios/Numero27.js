/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function Altura2Criancas(altura1, Tcrescimento1, altura2, Tcrescimento2, tempo){

    if(altura1>altura2){
        console.log('A criança 1 é maior!')
    }else{
        console.log('A criança 2 é maior!')
    }
    for(let i = 1; i<=tempo;i++){
        altura1 += Tcrescimento1
        altura2 += Tcrescimento2
    }

    if(altura1>altura2){
        console.log(`A criança 1 é maior com ${altura1.toFixed(2).replace('.', ',')} cm, A criança 2 é menor com ${altura2.toFixed(2).replace('.', ',')} cm!`)
    }else{
        console.log(`A criança 2 é maior com ${altura2.toFixed(2).replace('.', ',')} cm, A criança 1 é menor com ${altura1.toFixed(2).replace('.', ',')} cm!`)
    }   
}

Altura2Criancas(150, 0.5, 130, 1, 10)