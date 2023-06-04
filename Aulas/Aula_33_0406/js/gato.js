"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gato {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    comer() {
        return console.log(`O gato ${this.nome} comeu!`);
    }
    emitirSom() {
        return console.log(`O gato ${this.nome} miou!`);
    }
    dormir() {
        return console.log(`O gato ${this.nome} dormiu!`);
    }
}
exports.default = Gato;
