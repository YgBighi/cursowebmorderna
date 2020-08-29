require('./global')

console.log(MinhaApp.saudacao())

// DEIXA A VARIAVEL SER ALTERADA
MinhaApp.nome = 'Eita!' //TEM QUE USAR O FREEZE PARA TORNAR ELE CONSTANTE
console.log(MinhaApp.nome)