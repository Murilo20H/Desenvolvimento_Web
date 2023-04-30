function imprimirDados(pessoa)
{
    console.log("Bem vindo(a)!", pessoa.nome, pessoa.sobrenome, "você tem", pessoa.idade, "anos")
    console.log("suas informações de contato são", pessoa.telefone)
    console.log("endereço cadastrado", pessoa.endereco)
}
let pessoa1 = 
{
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 25,
    endereco: ["rua1", "numero2", "bairro3"],
    telefone: [964178658, 964896528]
}
imprimirDados(pessoa1)