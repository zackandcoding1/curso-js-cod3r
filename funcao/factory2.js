function criarProduto(nomeProduto, precoProduto) {
    return {
        nomeProduto,
        precoProduto,
        desconto: 0.1
    }
}

console.log(criarProduto('batata', 1))
console.log(criarProduto('Notebook', 3499.9))