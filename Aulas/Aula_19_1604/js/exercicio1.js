let pessoa1 =
{
    nome: "Jorge",
    idade: 55
}
let pessoa2 =
{
    nome: "Clara",
    idade: 46
}
let pessoa3 =
{
    nome: "Hamilton",
    idade: 25
}
if (pessoa1.idade >= pessoa2.idade && pessoa1.idade >= pessoa3.idade)
{
    console.log (pessoa1.nome, "é a pessoa mais velha, com ", pessoa1.idade)
}
else if (pessoa2.idade >= pessoa1.idade && pessoa2.idade >= pessoa3.idade)
{
    console.log (pessoa2.nome, "é a pessoa mais velha, com ", pessoa2.idade)
}
else if (pessoa3.idade >= pessoa1.idade && pessoa3.idade >= pessoa2.idade)
{
    console.log (pessoa3.nome, "é a pessoa mais velha, com ", pessoa3.idade)
}