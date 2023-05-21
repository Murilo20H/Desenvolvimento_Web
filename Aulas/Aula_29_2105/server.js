const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const connection = "mongodb+srv://Murilo20H:Murilo20H@appdbaula29.wejboue.mongodb.net/?retryWrites=true&w=majority"

const Produto = require('./models/produto')

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find()
        return res.status(200).json({ produtos: produtos})
    }catch (error) {
        return res.status(400).json({ error: error })
    }
})

app.post('/adicionar-produto', async (req, res) => {
    try {
        const { nome, descricao, valor } = req.body 
        let produto = {
            nome,
            descricao,
            valor
        }
        await Produto.create(produto)
        return res.status(201).json({ message: "Produto adicionado com sucesso!"})
    } catch (error) {
        return res.status(400).json({ error: "Erro ao adicionar um produto." })
    }
})

mongoose.connect(connection, {
    dbName: 'ProdutosDB'
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
}) 