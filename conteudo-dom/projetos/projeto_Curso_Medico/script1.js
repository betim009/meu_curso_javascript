const localDor = document.getElementById("local-dor")
const intensidadeDor = document.getElementById("intensidade-dor")
const caracteristicasInicio = document.getElementById("caracteristicas-inicio")
const dorReferida = document.getElementById("dor-referida")
const tipoDor = document.getElementById("tipo-dor")
const duracaoDor = document.getElementById("duracao-dor")
const ritmoIntestinal = document.getElementById("ritmo-intestinal")
const sinaisSintomas = document.getElementById("sinais-sintomas")
const enviar = document.getElementById("enviar")

//Guardar resultados

let resultado = []
let doencas = [] 

//Eventos
localDor.addEventListener("input", function(event){
    console.log(event.target.checked)
    console.log(event.target.value)

    // NAO ESQUECER
    const dor = event.target.value
    const checked = event.target.checked

    if (checked == true) {
        resultado.push(dor)
        if (dor === "hipocondrio_direito") {
            doencas.push("Abscesso hepático")
            doencas.push("Colecistite")
            doencas.push("Hepatite aguda")
            doencas.push("Infarto pulmonar")
            doencas.push("Infecção respiratória")
        } else if (dor === "hipocondrio_esquerdo") {
            doencas.push("Abscesso esplênico")
            doencas.push("Hérnia diafragmática")
            doencas.push("Ruptura de baço")
        }
    } else {
        resultado = resultado.filter(item => item != dor)
    }
}) 

intensidadeDor.addEventListener('input', function(event){
    console.log(event.target.checked)
    console.log(event.target.value)

    const intensidade = event.target.value
    const checked = event.target.checked

    if (checked == true) {
        resultado.push(intensidade)
    } else {
        resultado = resultado.filter(item => item != intensidade)
    }
})

caracteristicasInicio.addEventListener('input', function(event){
    console.log(event.target.checked)
    console.log(event.target.value)
    if (event.target.checked == true) {
        resultado.push(event.target.value)
    } else {
        resultado = resultado.filter(item => item != event.target.value)
    }
})

dorReferida.addEventListener('input', function(event){
    console.log(event.target.checked)
    console.log(event.target.value)
    if (event.target.checked == true) {
        resultado.push(event.target.value)
    } else {
        resultado = resultado.filter(item => item != event.target.value)
    }
})

tipoDor.addEventListener('input', function(event){
    console.log(event.target.checked)
    console.log(event.target.value)
    if (event.target.checked == true) {
        resultado.push(event.target.value)
    } else {
        resultado = resultado.filter(item => item != event.target.value)
    }
})

duracaoDor.addEventListener('input', function(event){
    console.log(event.target.checked)
    console.log(event.target.value)
    if (event.target.checked == true) {
        resultado.push(event.target.value)
    } else {
        resultado = resultado.filter(item => item != event.target.value)
    }
})

ritmoIntestinal.addEventListener('input', function(event){
    console.log(event.target.checked)
    console.log(event.target.value)
    if (event.target.checked == true) {
        resultado.push(event.target.value)
    } else {
        resultado = resultado.filter(item => item != event.target.value)
    }
})

sinaisSintomas.addEventListener('input', function(event){
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
    console.log(doencas)
})

