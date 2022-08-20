// (nome) (sobrenome) tem (idade) anos, pesa (peso)kg, tem (alturaEmMetro) de alturaEmMetro e seu IMC é de (IMC)
// (nome) nasceu em (anoNascimento)

const nome = "José"
const sobrenome = "Almeida"
const idade = 45
const peso = 75
const alturaEmMetro = 1.80
let anoAtual = 2022
let anoNascimento
let IMC

// Calculando o IMC
IMC = peso / (alturaEmMetro ** 2) 

// Calculando o anoNascimento

anoNascimento = anoAtual - idade

//Resposta usando templates strings
console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso}kg, tem alturaEmMetro de ${alturaEmMetro}m e seu IMC é de ${IMC}
${nome} nasceu em ${anoNascimento}`)
