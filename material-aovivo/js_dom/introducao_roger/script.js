const resultado = document.getElementById("resultado")
const listaNomes = document.getElementById("lista-nomes")
const nomesLista = document.getElementById("nomes-lista")

// resultado.innerHTML = "<h4>Meu nome é Roger!</h4>"
// resultado.innerHTML += "<p>Eu tenho 17 anos</p>"

resultado.innerHTML += `
    <h4>Me chamo Alberto</h4>
    <p>tenho 30 anos</p>
`

const nomes = [
    "Alberto",
    "Roger",
    "Rogerio",
    "Andre"
]

listaNomes.innerHTML += `
    <li>${nomes[0]}</li>
    <li>${nomes[1]}</li>
    <li>${nomes[2]}</li>
    <li>${nomes[3]}</li>
`

for (const element of nomes) {
    nomesLista.innerHTML += `
        <li>${element}</li>
    `
}

nomesLista.innerHTML += "<li>Churrasco</li>"