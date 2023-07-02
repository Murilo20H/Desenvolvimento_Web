const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 8070
const connectionString = "mongodb+srv://Murilo20H:Murilo20H@appdbaula.cxeaimf.mongodb.net/"
const Animal = require('./models/animal')

app.use(express.json())
app.use(cors())

app.get("/listar-animais", async (req, res) => {
    try {
        let animais = await Animal.find()
        return res.status(200).json(animais)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post("/adicionar-animal", async (req, res) => {
    try {
        const { nome, raca, peso } = req.body 
        let animal = {
            nome,
            raca,
            peso
        }
        await Animal.create(animal)
        return res.status(200).json({ message: "Animal adicionado com sucesso!"})
    } catch (error) {
        return res.status(500).json(error)
    }
})

mongoose.connect(connectionString, {
    dbName: "PETSHOP"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})