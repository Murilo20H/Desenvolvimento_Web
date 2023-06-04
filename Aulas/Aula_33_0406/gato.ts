import Animal from "./animal"

export default class Gato implements Animal {
    public nome: string
    public raca: string
    public idade: number

    constructor(nome: string, raca: string, idade: number) {
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    public comer(): void {
        return console.log(`O gato ${this.nome} comeu!`)
    }

    public emitirSom(): void {
        return console.log(`O gato ${this.nome} miou!`)
    }

    public dormir(): void {
        return console.log(`O gato ${this.nome} dormiu!`)
    }  
}