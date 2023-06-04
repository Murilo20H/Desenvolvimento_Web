export default interface Animal {
    nome: string
    raca: string
    idade: number

    comer(): void

    emitirSom(): void 

    dormir(): void    
}