const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] 
pilotos.pop() //Massa quebrou o carro! //REMOVE O ULTIMO ELEMENTO
console.log(pilotos)

pilotos.push('Verstappen') //ADD ELEMENTO NO ULTIMO INDICE
console.log(pilotos)

pilotos.shift() //REMOVE O PRIMEIRO ELEMENTO
console.log(pilotos)

pilotos.unshift('Hamilton') //ADD NO PRIMEIRO INDICE
console.log(pilotos)

//splice pode adicionar e remover

// ADD
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//REMOVER
pilotos.splice(3, 1) //Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // SLICE CRIA NOVO ARRAY
//ADD APARTIR DO INDICE DESEJADO
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //SLICE PEÇADOS DE UM ARRAY
//ADICIONAR ATÉ < QUE O 2 INDICE MENCIOADO 
// NESTE EXEMPLO N PEGA O INDICE 4, PEGA O 1,2 E 3

console.log(algunsPilotos2)
