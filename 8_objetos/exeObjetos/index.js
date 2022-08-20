//Formulario para fazer os valores salvos nos inputs aparecerem na "div" "resultado"

function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    form.addEventListener('submit', (evento) => {
        evento.preventDefault()

        const nome = document.querySelector('.nome').value
        const sobrenome = document.querySelector('.sobrenome').value
        const peso = document.querySelector('.peso').value
        const altura = document.querySelector('.altura').value

        pessoas.push({nome, sobrenome, peso, altura})
        console.log(pessoas)
        resultado.innerHTML += `<h5>${nome} ${sobrenome} ${peso} ${altura}</h5>`

    })

}
meuEscopo()