const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ //ARRAY É CHAMADO IMPLICITO
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)