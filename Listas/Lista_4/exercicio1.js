let contaCorrente = 
{
    saldo: 1500,
    faturaAtual: 700,
    creditoDisponivel: 5000,
    extrato: {
        entradas:
        [
            {
                data: "",
                valor: 100
            }
        ],
        saidas:
        [
            {
                data: "",
                valor: 1000,
                descricao: "Restaurante, Cinema, Mercado"
            }
        ]
    },
    exibirExtrato: true
}
console.log("\n\nLista 4: exercício 1")
if(contaCorrente.saldo >= contaCorrente.faturaAtual)
{
    console.log("\n\nVocê possui saldo para pagar a fatura atual")
}
else
{
    console.log("\n\nVocê não possui saldo suficiente para pagar a fatura, experimente pegar credito para conseguir pagar, crédito disponível: ", contaCorrente.creditoDisponivel)
}   
if(contaCorrente.exibirExtrato)
{
    console.log("\n\nExtrato: ", contaCorrente.extrato, "\n\n")
}
else
{
    console.log("\n\nNão tem extrato\n\n")
}