const mongoose = require('mongoose')

const bebidaSchema = mongoose.Schema({
    nome: { type: String, requires: true },
    descricao: { type: String, requires: true },
    fabricante: { type: String, requires: true },
    emEstoque: { type: Boolean, requires: true },
    publicadoEm: { type: Number, requires: true }
})

const bebida = mongoose.model('Bebidas', bebidaSchema)

module.exports = bebida