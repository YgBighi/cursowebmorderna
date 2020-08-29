const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //AXIOS É UM CLIENT QUE FAZ REQUISÕES NA WEB

Array.prototype.map2 = function(callback) {
    const newArray = []
    let i = 0
    let MenorSalario = this[0]
    for(let i = 0; i< this.length;i++){ //THIS É O ARRAY ORIGINAL
        if(this[i].salario < MenorSalario.salario){
            newArray[0] = this[i]
        }
    }

    return newArray
}


axios.get(url).then(response =>{
    const funcionarios = response.data
   // console.log(funcionarios)

    const apenasChines = funcionarios => funcionarios.pais === 'China'
    const apenasMulheres = funcionarios => funcionarios.genero === 'F'
    const menorSalario =  (func, funcAtual) => {
        return func.salario <funcAtual.salario ? func : funcAtual
    }

    resultado = funcionarios.filter(apenasChines).filter(apenasMulheres).reduce(menorSalario)
    console.log(resultado)
})
//VAI FAZER UMA REQUISAO DA URL E VAI RETORNAR O VALOR DA WEB