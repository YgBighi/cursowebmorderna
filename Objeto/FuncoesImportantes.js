const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Key = atributos
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // ARRAY

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'DataNascimento',{
    enumerable: true, //TORNAR CHAVE
    writable: false,
    value:'01/01/2019'
})

pessoa.DataNascimento = '01/01/2017'
console.log(pessoa.DataNascimento)
console.log(Object.keys(pessoa))

//Object.assign(ECAMScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // CRIA UM  OBJETO (CONCATENA) SOBRESCREVE OBJETO IGUAIS

Object.freeze(obj)
obj.c = 1234
console.log(obj)