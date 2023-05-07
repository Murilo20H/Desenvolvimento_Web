const express = require('express')
const app = express()
const port = 7000

let bandas = [
    {
        nomeDaBanda: "Os Jorges",
        principaisMusicas: ["Para Jorgiana", "Jorges e seus amigos", "Jorge azul"],
        integrantes: [
            {
                nome: "Jorge",
                paisDeOrigem: "China",
                idade: 35
            },
            {
                nome: "Jorgesson",
                paisDeOrigem: "Arábia Saudita",
                idade: 75
            }
        ]
    },
    {
        nomeDaBanda: "Jorge and Rock",
        principaisMusicas: ["JorGang é tudo", "Salvem os Jorges do Brasil", "Eu vou beber JorGin sim"],
        integrantes: [
            {
                nome: "Jorgiana",
                paisDeOrigem: "JorgeCountry",
                idade: 22
            },
            {
                nome: "Jorje",
                paisDeOrigem: "Jorgina",
                idade: 25
            },
            {
                nome: "Jorgescleide",
                paisDeOrigem: "Madagascar",
                idade: 95
            }
        ]
    }
]

app.get("/bandas", function (requisicao, resposta) {
    return resposta.send(bandas)
})

// SERVIDOR RODANDO
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}/bandas`)
})
