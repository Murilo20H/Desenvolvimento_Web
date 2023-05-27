const express = require('express')
const app = express()
const port = 6050

app.use(express.json())

let bancoDeDadosProdutos = []

app.get('/listar-produtos', (req, res) => {
    try {
        return res.send(bancoDeDadosProdutos)
    }catch (error) {
        return res.status(400).json({ error: error })
    } 
})

app.post('/adicionar-produto', (req, res) => {
    try {
        let body = req.body 
        bancoDeDadosProdutos.push(body)
        return res.status(201).json({ message: "Produto adicionado com sucesso!"})
    }catch (error) {
        return res.status(401).json({ error: error })
    }
})

app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})