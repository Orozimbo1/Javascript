function saudacao(nome = 'Zé') {
    console.log(`Bom dia ${nome}!`)
    return nome
}

saudacao('Anderson')

function soma(x = 0, y = 0) {
    const resultado = x + y
    console.log(resultado)
    return resultado
}

soma(98, 43)

const raiz = function(n = 0) { // Função anônima
    return n ** 0.5
}

console.log(raiz(9))

const multiplicacao10 = (n = 0) => { // Arrow function
    return n * 10
}

console.log(multiplicacao10(5))