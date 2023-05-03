function maiorIdade(listaPessoas)
{
    for(let i = 0; i < listaPessoas.length; i++)
    {
        if(listaPessoas[i].idade >= 18)
        {
            console.log("Seja  bem vindo(a)! Você se chama", listaPessoas[i].nome, listaPessoas[i].sobrenome, ", tem", listaPessoas[i].idade, "anos e é maior de idade.")
        }
        else
        {
            console.log("Seja  bem vindo(a)! Você se chama", listaPessoas[i].nome, listaPessoas[i].sobrenome, ", tem", listaPessoas[i].idade, "anos e não é maior de idade.")
        }
    }
    return
}
function verificaNome(listaPessoas)
{
    for(let i = 0; i < listaPessoas.length; i++)
    {
        if((listaPessoas[i].nome.length + listaPessoas[i].sobrenome.length) < 3)
        {
            console.log("Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres.")
        }
        else if((listaPessoas[i].nome.length + listaPessoas[i].sobrenome.length) > 50)
        {
            console.log("Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres.")
        }
        else
        {
            console.log("Número de caracteres válido.")
        }
    }
    return
}
function quantidadePessoas(listaPessoas)
{
    console.log(listaPessoas.length)
    return
}
let listaPessoas = [
    {
        nome: "Anne",
        sobrenome: "Laurent",
        idade: 22
    },
    {
        nome: "Lily",
        sobrenome: "Bloom",
        idade: 30
    },
    {
        nome: "Sayuri",
        sobrenome: "Yoshihara",
        idade: 23
    },
    {
        nome: "Roger",
        sobrenome: "Guedes",
        idade: 26
    },
    {
        nome: "Jorge",
        sobrenome: "Silva",
        idade: 17
    }
]
console.log("Lista 6: exercício 1/n/n/n")
console.log("\n\n")
maiorIdade(listaPessoas)
console.log("\n\n")
verificaNome(listaPessoas)
console.log("\n\n")
quantidadePessoas(listaPessoas)