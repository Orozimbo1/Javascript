let span = document.getElementById("numero-titulo")
let texto = document.getElementById("texto")

let numero = Number(prompt("Digite um número:"))

span.innerHTML = numero
texto.innerHTML = ''
texto.innerHTML += `<p>A raiz quadrada de ${numero} é: <strong>${numero ** 0.5}</strong></p>`
texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>`
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`
