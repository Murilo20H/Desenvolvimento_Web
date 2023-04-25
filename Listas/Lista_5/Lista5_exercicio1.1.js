let pessoa1 = 
{
    nome: "Jorge",
    idade: 24,
    ehAdmin: true,
    email: "jorge12345@hotmail.com"
  
}
let pessoa2 = 
{
    nome: "Jorgeson",
    idade: 25,
    ehAdmin: true,
    email: "jmsilva6589@hotmail.com"
  
}
let pessoa3 = 
{
    nome: "Ana",
    idade: 21,
    ehAdmin: false,
    email: "ana.maria.2002@hotmail.com"
  
}
let pessoa4 = 
{
    nome: "John",
    idade: 19,
    ehAdmin: false,
    email: "johnjohn2004@hotmail.com"
  
}
let pessoa5 = 
{
    nome: "Henrique",
    idade: 32,
    ehAdmin: false,
    email: "hrs87492645@hotmail.com"
  
}
let listaPessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5]
let i = 0
for (let value of listaPessoas) 
{
    if (listaPessoas[i].ehAdmin)
    {
        console.log("Olá ", listaPessoas[i].nome, ", bem vindo(a) admin do sistema, enviamos um email para ", listaPessoas[i].email, " para você criar uma senha")
        i++
    }
    else
    {
        console.log("Olá ", listaPessoas[i].nome, ", bem vindo(a) usuário do sistema, enviamos um email para ", listaPessoas[i].email, " para você criar uma senha")
        i++
    }
}