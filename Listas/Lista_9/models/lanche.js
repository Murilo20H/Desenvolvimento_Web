const mongoose = require('mongoose')

const lancheSchema = mongoose.Schema({
    nome: { type: String, requires: true },
    descricao: { type: String, requires: true },
    vegano: { type: Boolean, requires: true },
    emEstoque: { type: Boolean, requires: true },
    publicadoEm: { type: Number, requires: true }
})

const lanche = mongoose.model('Lanches', lancheSchema)

module.exports = lanche