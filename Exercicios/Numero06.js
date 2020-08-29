function juroSimples(capitalInicial, TaxaJuros, Tempo){
    return console.log((juro = capitalInicial * TaxaJuros * Tempo)+capitalInicial)
}

juroSimples(1000, 0.2, 3)

function juroComposto(capital, juro, Temp){

    juro += 1

    return console.log((capital*Math.pow(juro, Temp)).toFixed(2).replace('.', ','))
}

juroComposto(1400, 0.07, 2)