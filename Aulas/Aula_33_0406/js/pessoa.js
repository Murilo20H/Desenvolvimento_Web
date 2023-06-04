"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
}
let p1 = new Pessoa("Jorge", 35);
console.log(`${p1.nome} tem ${p1.idade} anos`);
