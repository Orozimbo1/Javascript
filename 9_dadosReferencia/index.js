// Referência (multável)
// array, object function - Passados por Reerência

let a = [1, 2, 3]
let b = a // Referencia o valor de "a", ocupando o mesmo espaço que ele na memória,de orma que se alterar o valor de "b" também alterará o valor de "a"

console.log(a) // => a = [1, 2, 3]

b.push(4)
console.log(a) // => a = [1, 2, 3, 4] Isso se aplica a objeto e funções também

// // Para fazer uma cópia dos dados de um array e necessário que faça da seguinte forma

b = [...a] // dessa forma "b" recebeu uma cópia dos valores de "a", tornando-se independente, sendo assim mesmo que ocorra uma alteração em "b" o valor de "a" continuará se mantendo

b.push(8)
console.log(a)