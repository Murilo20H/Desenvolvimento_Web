var idade = prompt("Digite a sua idade: ")
if (idade >= 18 && idade < 100)
{
    document.writeln("É maior de idade.")
}
else if (idade < 18 && idade > 0)
{
    document.writeln("É menor de idade.")
}
else
{
    document.writeln("Idade inválida")
}