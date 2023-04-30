function somar(numero1, numero2)
{
    return numero1 + numero2
}
console.log(somar(10, 5))
function subtrair(numero1, numero2)
{
    return numero1 - numero2
}
console.log(subtrair(10, 5))
function multiplicar(numero1, numero2)
{
    return numero1 * numero2
}
console.log(multiplicar(10, 5))
function dividir(numero1, numero2)
{
    return numero1 / numero2
}
console.log(dividir(10, 5))
function potenciar(numero, expoente)
{
    resultado = numero
    for (i = 1; i < expoente; i++)
    {
        resultado = resultado * resultado
    }
    return resultado
}
console.log(potenciar(20, 2))
function raizQuadrada(radicando)
{
    return Math.sqrt(radicando)
}
console.log(raizQuadrada(2))