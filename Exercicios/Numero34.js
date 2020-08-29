/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/
function CompararLetras(palavra1, palavra2){
    let contador = 0
    let status = false
    palavra1 = palavra1.toUpperCase()
    palavra2 = palavra2.toUpperCase()

    if(palavra2.length<=palavra1.length){
        for(let i = 0; i < palavra2.length;i++){
            for(let o = 0; o<palavra1.length; o++){
                if(palavra1.charAt(i) == palavra2.charAt(o)){
                    contador++
                    o = palavra1.length
                }
            }
        }
    }else{
    for(let i = 0; i < palavra1.length;i++){
        for(let o = 0; o<palavra2.length; o++){
            if(palavra1.charAt(i) == palavra2.charAt(o)){
                contador++
                o = palavra2.length
            }
        }
    }
}
    if(contador==palavra1.length && contador==palavra2.length){
        status = true
    }
    return status
}

//const teste1 = 'MTMO'
//console.log(CompararLetras(teste, teste1))


function PalavraIgual(palavra1, palavra2){
    let status = false
    if(palavra1.length>palavra2.length){
        status = false
    }
    if(palavra2.length>palavra1.length){
        status = false
    }
    if(palavra1.length === palavra2.length){
       status = CompararLetras(palavra1, palavra2)
    }

    return status
}

const Palavra1 = 'ucutamam'
const Palavra2 = 'MAMATUCU'

console.log(PalavraIgual(Palavra1, Palavra2))
//console.log(Palavra1.length>Palavra2.length)