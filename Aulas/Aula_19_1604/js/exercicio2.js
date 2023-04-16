let pessoa1 =
{
    nome: "Jorge",
    altura: 1.58
}
let pessoa2 =
{
    nome: "Clara",
    altura: 1.75
}
let pessoa3 =
{
    nome: "Hamilton",
    altura: 1.90
}
if (pessoa1.altura >= pessoa2.altura && pessoa1.altura >= pessoa3.altura)
{
    console.log (pessoa1.nome, "é a pessoa mais alta.\n")
}
else if (pessoa2.altura >= pessoa1.altura && pessoa2.altura >= pessoa3.altura)
{
    console.log (pessoa2.nome, "é a pessoa mais alta.\n")
}
else if (pessoa3.altura >= pessoa1.altura && pessoa3.altura >= pessoa2.altura)
{
    console.log (pessoa3.nome, "é a pessoa mais alta.\n")
}

if (pessoa1.altura <= pessoa2.altura && pessoa1.altura <= pessoa3.altura)
{
    console.log (pessoa1.nome, "é a pessoa mais baixa.")
}
else if (pessoa2.altura <= pessoa1.altura && pessoa2.altura <= pessoa3.altura)
{
    console.log (pessoa2.nome, "é a pessoa mais baixa.")
}
else if (pessoa3.altura <= pessoa1.altura && pessoa3.altura <= pessoa2.altura)
{
    console.log (pessoa3.nome, "é a pessoa mais baixa.")
}