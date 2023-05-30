const express = require('express')
const mongoose = require('mongoose')
const port = 7050
const app = express()
const connectionString = "mongodb+srv://Murilo20H:Murilo20H@appdbaula.cxeaimf.mongodb.net/"
const Bebida = require('./models/bebida')
const Lanche = require('./models/lanche')

app.use(express.json())

app.post("/cadastrar-bebida", async (req, res) => {
    try {
        const { nome, descricao, fabricante, emEstoque, publicadoEm } = req.body
        let bebida = {
            nome,
            descricao,
            fabricante,
            emEstoque,
            publicadoEm
        }
        await Bebida.create(bebida)
        return res.status(200).json({ message: "Bebida adicionado com sucesso!"})
    } catch (error) {
        return res.status(400).json(error)
    }
})

app.get("/listar-bebidas", async (req, res) => {
    try {
        let bebidas = await Bebida.find()
        return res.status(200).json(bebidas)
    } catch (error) {
        return res.status(400).json(error)
    }
})

app.post("/cadastrar-lanche", async (req, res) => {
    try {
        const { nome, descricao, vegano, emEstoque, publicadoEm } = req.body
        let lanche = {
            nome,
            descricao,
            vegano,
            emEstoque,
            publicadoEm
        }
        await Lanche.create(lanche)
        return res.status(200).json({ message: "Lanche adicionado com sucesso!"})
    } catch (error) {
        return res.status(400).json(error)
    }
})

app.get("/listar-lanches", async (req, res) => {
    try {
        let lanches = await Lanche.find()
        return res.status(200).json(lanches)
    } catch (error) {
        return res.status(400).json(error)
    }
})

mongoose.connect(connectionString, {
    dbName: "DevBar"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})