class Pessoa {
    public nome: string
    public idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    public getNome(): string {
        return this.nome
    }

    public setNome(nome: string): void {
        this.nome = nome
    }

    public getIdade(): number {
        return this.idade
    }

    public setIdade(idade: number): void {
        this.idade = idade
    }
}

let p1 = new Pessoa("Jorge", 35)

console.log(`${p1.nome} tem ${p1.idade} anos`)