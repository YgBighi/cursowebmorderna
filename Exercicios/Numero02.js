function TipoTriangulo(valor1, valor2, valor3){
    console.log(`Comprimento 1: ${valor1} / Comprimento 2: ${valor2} / Comprimento 3: ${valor3}`)
    if(valor1=== valor2 && valor2=== valor3){
        console.log('Esse triângulo é Equilátero')
    }else if(valor1=== valor2 || valor1 === valor3 || valor2 === valor3){
        console.log('Esse triângulo é Isósceles')
    }else{
        console.log('Esse triàngulo é Escaleno')
    }
}

TipoTriangulo(2, 2, 2)
TipoTriangulo(1, 2, 3)
TipoTriangulo(1, 2, 1)
TipoTriangulo(1, 2, 2)
TipoTriangulo(1, 1, 2)