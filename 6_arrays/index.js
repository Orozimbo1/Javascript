//índices:       0        1       2
const alunos = ['Maria', 'Jose', 'Joao']

console.log(alunos[0]) // Maria

// Atribundo novos valores
alunos[1] = 'Eduardo' // Agora o aluno que estava no indice[1] = "Jose" foi substituido por "Eduardo"

console.log(alunos.length) // O atributo "length" nos diz quantos elementos existe em um array

alunos.push('Arthur') // O atributo "push" adiciona um elemento ao final do array
console.log(alunos)

alunos.unshift('Gabriela') // O atributo "unshift" adiciona um elemento no começo do array, mas altera seus índices
console.log(alunos)

alunos.pop() // O atributo "pop" retira o último elemento do array
console.log(alunos)

alunos.shift() // O atributo "shift" retira o primeiro elemento do array, mas altera seus índices
console.log(alunos)

delete alunos[2] // O atributo "delete" deleta elementos por índice, retornando um elemento vazio sem alterar os índices
console.log(alunos)