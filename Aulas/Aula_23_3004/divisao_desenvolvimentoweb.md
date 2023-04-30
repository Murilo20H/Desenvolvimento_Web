# Divisões da programação

### Frontend
    HTML & CSS
    Javascript
    Typescript
    Angular
    React
    Vue.js

### Backend / API
    Node.js
    Java (spring boot)
    c# (.NET)
    PHP
    Python (Django, Flask, Fastapi)

### Bando de dados
    MongoDB
    PostgresSQL
    Kassandra
    Maria DB
    SQLServer
    MySql

### Etapas
    Frontend -> método: GET (/produtos) -> Backend
    Backend -> produtos -> Banco de dados
    Banco de dados -> produtos: [
                                    {
                                        id: 1
                                        nome: "bolo de milho"
                                        descricao: "puro suco do milho verde"
                                    },
                                    {
                                        id: 2
                                        nome: "bolo de morango"
                                        descricao: "melhor bolo do mundo"
                                    }
                                ] (em lista) -> Backend
    Backend -> produtos: [
                             {
                                 nome: "bolo de milho"
                                 descricao: "puro suco do milho verde"
                             },
                             {
                                 nome: "bolo de morango"
                                 descricao: "melhor bolo do mundo"
                             }
                         ] (vai devolver um JSON) -> Frontend