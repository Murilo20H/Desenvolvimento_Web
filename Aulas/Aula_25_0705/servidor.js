const express = require('express')
const app = express()
const port = 8000

let produtos = [
    {
        id: 1,
        nome: "Bolo de milho",
        descricao: "Puro suco do milho verde",
        valor: 25
    },
    {
        id: 2,
        nome: "Bolo de morango",
        descricao: "Bolo natural com cauda de chocolate",
        valor: 100
    }
]

app.get("/produtos", function (requisicao, resposta) {
    return resposta.send(produtos)
})

// SERVIDOR RODANDO
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}/produtos`)
})
