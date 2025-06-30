const generoMusica = document.getElementById("genero-musica")
const generoFilme = document.getElementById("genero-filme")
const enviar = document.getElementById("enviar")

// GUARDAR OS RESULTADOS
let resultado = []

// EVENTOS
generoMusica.addEventListener("input", function(event) {
    console.log(event.target.checked)
    console.log(event.target.value)

    if (event.target.checked == true) {
        resultado.push(event.target.value)
    } else {
        resultado = resultado.filter(item => item != event.target.value)
    }
})

generoFilme.addEventListener("input", function(event) {
    console.log(event.target.checked)
    console.log(event.target.value)

    if (event.target.checked == true) {
        resultado.push(event.target.value)
    } else {
        resultado = resultado.filter(item => item != event.target.value)
    }
})

enviar.addEventListener("click", function() {
    console.log(resultado)
})