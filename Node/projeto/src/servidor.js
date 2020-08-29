const porta = 3003 //LOCAL AONDE A REQUISÃO SERÁ REALIZADA

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true})) //PARA TODAS AS REQUISÕES SERÁ EXECUTADO

//app.get('/produtos', (req, res, next) => next(), (req, res) => res.send('teste'))

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos()) //CONVERITODO EM FORMATO JSON
})

app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id)) //PARAMETRO COLOCADO NA URL
})

app.post('/produtos',(req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, //INSTALAR npm i --save body-parser@1.18.2 -E
        preco: req.body.preco
    })
    res.send(produto) //CONVERITDO EM FORMATO JSON
})

app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //CONVERTIDO EM FORMATO JSON
})

//app.route('/produtos/:id').get().put().delete()

app.delete('/produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)//CONVERTIDO EM FORMATO JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor está executando na porta ${porta}.`)
})