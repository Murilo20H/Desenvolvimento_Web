var usuario1 =
{
    nomeDeUsuario: "admin",
    senha: 123
}
if (usuario1.nomeDeUsuario == "admin" && usuario1.senha == 123) //nome e senha são iguais: sim
{
    console.log("\nBem vindo ao sistema.")
}
else 
{
    console.log("\nSenha ou nome de usuário inválido.")
}

if (usuario1.nomeDeUsuario == "admin" && usuario1.senha == 321) //nome e senha são iguais: não, então verifica o else if
{
    console.log("\nBem vindo ao sistema.")
}
else if (usuario1.nomeDeUsuario == "admin" || usuario1.senha == 321) //nome ou senha são iguais: sim
{
    console.log("\nSenha ou nome de usuário inválido.")
}



var idade = 18
if (idade >= 18)
{
    console.log("\nÉ maior de idade.")
}
else if (idade < 18 && idade > 0) 
{
    console.log("\nÉ menor de idade.")
}
else
{
    console.log("\nIdade inválida.")
}