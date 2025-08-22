const x = document.getElementById("titulo")
const y = document.getElementById("btn")
const resultado = document.getElementById("resultado")

const nomes  = ["Jean", "Maria", "Jose", "Lucas"]


for (const element of nomes) {
    resultado.innerHTML += `
        <p>Nome da pessao é: ${element}</p>
    `
}