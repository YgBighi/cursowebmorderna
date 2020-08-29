function Potencia(base, expoente){
    let numero = base

    for(i=expoente;i>1;i--){
        base *= numero
    }

    console.log(`Base: ${numero} / Expoente: ${expoente} = ${base}`)
}

Potencia(3, 3)
Potencia(4, 4)