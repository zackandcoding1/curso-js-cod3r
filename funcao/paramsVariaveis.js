function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
// Mesmo a função não tendo parâmetros, o uso do 'arguments' possibilita
// chamar a função com parâmetros e realizar operações com eles

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1,  2.2, "Teste"))
console.log(soma('a', 'b', 'c'))