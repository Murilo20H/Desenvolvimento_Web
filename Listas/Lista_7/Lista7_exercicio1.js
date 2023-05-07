const express = require('express')
const app = express()
const port = 6000

let usuarios = [
    {
        nomeUsuario: "Jorge2020",
        criadoEm: "30/03/2020",
        idade: 27,
        email: "jorgedasilva@gmail.com",
        ehAdmin: true,
        telefone: ["97463-7233"],
        endereco: ["Rua A", "Bairro B", "Cidade C"]
    },
    {
        nomeUsuario: "JorgesonSantos",
        criadoEm: "06/11/2021",
        idade: 24,
        email: "jorgesantos@gmail.com",
        ehAdmin: true,
        telefone: ["97305-8365"],
        endereco: ["Rua D", "Bairro E", "Cidade F"]
    },
    {
        nomeUsuario: "Cleber123",
        criadoEm: "29/09/2019",
        idade: 29,
        email: "clebersouza@hotmail.com",
        ehAdmin: false,
        telefone: ["99351-9326"],
        endereco: ["Rua G", "Bairro H", "Cidade I"]
    },
    {
        nomeUsuario: "ThiagoLegal",
        criadoEm: "15/01/2023",
        idade: 21,
        email: "thiagoferreira@gmail.com",
        ehAdmin: false,
        telefone: ["90346-1542"],
        endereco: ["Rua J", "Bairro K", "Cidade L"]
    },
    {
        nomeUsuario: "NicPereira",
        criadoEm: "28/08/2020",
        idade: 33,
        email: "nicolaspereira@gmail.com",
        ehAdmin: false,
        telefone: ["98254-9267"],
        endereco: ["Rua M", "Bairro N", "Cidade O"]
    }
]

let produtos = [
    {
        nomeProduto: "Bolo de morango",
        descricao: "Bolo de chocolate com morangos",
        valor: 45,
        criadoEm: "07/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Bolo de chocolate",
        descricao: "Bolo de chocolate ao leite",
        valor: 40,
        criadoEm: "07/05/2023",
        emEstoque: true
    },
    {
        nomeProduto: "Bolo de baunilha",
        descricao: "Bolo de chocolate branco com baunilha",
        valor: 42,
        criadoEm: "07/05/2023",
        emEstoque: false
    },
    {
        nomeProduto: "Bolo de nutella",
        descricao: "Bolo de nutella com leite ninho",
        valor: 50,
        criadoEm: "07/05/2023",
        emEstoque: false
    },
    {
        nomeProduto: "Bolo de pote",
        descricao: "Bolo pequeno de chocolate",
        valor: 15,
        criadoEm: "07/05/2023",
        emEstoque: true
    }
]

app.get("/usuarios", function (requisicao, resposta) {
    return resposta.send(usuarios)
})
app.get("/produtos", function (requisicao, resposta) {
    return resposta.send(produtos)
})

// SERVIDOR RODANDO
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})