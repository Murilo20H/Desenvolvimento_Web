import Gato from "./gato"

let gato = new Gato("Frajola", "Siamês", 2)

gato.comer()

console.log(`O gato ${gato.nome} é da raça ${gato.raca} e tem ${gato.idade} anos.`)