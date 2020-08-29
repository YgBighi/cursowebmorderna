const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// SINCRONO...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// ASSINCRONO...
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo) //CONFIG DEVE SER UM OBJETO
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{ //DIRNAME É O DIRETÓRIO EM QUE ESTÁ
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})