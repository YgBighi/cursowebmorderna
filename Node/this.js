//THIS APONTA PRA MODULE.EXPORTS
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    //THIS DENTRO DE UMA FUNÇÃO APONTA PARA GLOBAL
    console.log('Dentro de uma funçao...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()