let tarefas = [
    "lavar louça",
    "lavar banheiro",
    "lavar roupa",
    "fazer comida"
]
for (let i = 0; i < tarefas.length; i++)
{
    if(tarefas[i] == "lavar banheiro")
    {
        break
    }
    console.log(tarefas[i])
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let j = 0; j < numeros.length; j++)
{
    if(numeros[j] % 2 == 0)
    {
        console.log(numeros[j], " é par")
    }
    else
    {
        console.log(numeros[j], " é impar")
    }
}