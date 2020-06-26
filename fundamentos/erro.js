function tratarErroELancar(erro) {
    // throw new Error('Houve um erro no código :/')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // código que possa causar erros
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) { // tratamento do erro
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)