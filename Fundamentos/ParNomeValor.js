// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exe(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Obetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade : 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exe())
console.log(Cliente)