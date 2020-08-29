const contadorA = require('./instanciaUnica') //FAZ CACHE
const contadorB = require('./instanciaUnica') // FAZ CACHE

const contadorC = require('./instanciaNova')() // CRIA UMA NOVA INSTANCIA
const contadorD = require('./instanciaNova')() // CRIA UMA NOVA INSTACIA
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)