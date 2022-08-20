// Primitivos (imultáveis)
//string, number, undefined, null, boolean (bigint symbol) - Valores copiados

let a = 5
let b = a // Faz uma cópia do valor de "a" de forma que se alterar o valor de "b" nao alterará o valor de "a"

b = 10
console.log(a) // Continua sendo "5"

let nome = "Joao" // string
let ano = 2022 // number
let resposta // undefined --> não aponta para nenhum loca na memória
let cor = null // null --> não aponta para nenhum loca na memória
let correto = true // boolean --> (true, false)
