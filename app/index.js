const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const banco = require('./models/db')
const Cliente = require('./models/Cliente')
const App = express()

const PORT = 3001
App.use(bodyParser.urlencoded({ extended: false }))
App.use(bodyParser.json())

//requisições
App.use(cors())

//Rotas
//Rota inicial
App.get('/', (req,res) => {
    res.send('Api online')
})
App.get('/teste', async (req,res)=>{
    let registro = await Cliente.update({nome: 'nome', sobrenome: 'sobrenome'}, {where: {id: 14}})
    res.send(registro)
})
//Rota de Create
App.post('/post', async (req,res)=>{
    let registro = await Cliente.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf
    })
})
//Rota de Read
App.get('/get', async (req,res) => {
    let users = await Cliente.findAll();
    console.log(users.every(user => user instanceof Cliente)); // true
    const retorno = JSON.stringify(users, null, 2)
    res.send(retorno)
})
//Rota de Update
App.put('/update', async (req,res) => {
    const nome = req.body.nomeUpdate == null ? req.body.orignome : req.body.nomeUpdate
    const sobrenome = req.body.sobrenomeUpdate == null ? req.body.origsobrenome : req.body.sobrenomeUpdate
    const cpf = req.body.cpfUpdate == null ? req.body.origcpf : req.body.cpfUpdate
    const id = req.body.id
    let response = await Cliente.update({nome: nome, sobrenome: sobrenome, cpf: cpf}, {where: {id: id}})
    console.log(response)
})
//Rota de Delete
App.delete('/delete', async (req,res) => {
    const id = req.body.id
    const response = await Cliente.destroy({
        where: {
            id: id
        }
    })
})

App.listen(PORT, ()=>{console.log('API Conectada na porta: ' + PORT)})