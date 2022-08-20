// Objetos, diferente dos arrays não possui índice e sim "propriedades"
const usuario1 = {
    nome: 'Matheus', // "propriedades" = nome
    sobrenome: 'Orozimbo', // "propriedades" = sobrenome
    idade: '23', // propriedades = idade

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`Minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

usuario1.fala()
usuario1.incrementaIdade()
usuario1.fala()

console.log(usuario1)

// Para acessar um valor específico de uma propriedade, basta referenciar o nome do objeto e a sua propriedade

console.log(usuario1.nome)
console.log(usuario1.sobrenome)
console.log(usuario1.idade)

function criarUsuario(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const usuario2 = criarUsuario('Luiz', 'Silva', 45)

console.log(usuario2)