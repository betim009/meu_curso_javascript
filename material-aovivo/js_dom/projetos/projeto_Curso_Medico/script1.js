import { dataIntensidadeDor } from "./data-intensidadeDor.js";
import { dataCaracDor } from "./data-caracDor.js";
import { dataLocalDor } from "./data-localDor.js";
import { dataReferidaDor } from "./data-referidaDor.js";
import { dataTipoDor } from "./data-tipoDor.js";
import { dataDuracaoDor } from "./data-duracaoDor.js";
import { dataRitmoIntestinal } from "./data-ritmoIntestinal.js";

const seletorLocalDor = document.getElementById("local-dor");
const seletorCaracDor = document.getElementById("caracteristicas-inicio");
const seletorIntensidadeDor = document.getElementById("intensidade-dor");
const seletorReferidaDor = document.getElementById("dor-referida");
const seletorTipoDor = document.getElementById("tipo-dor");
const seletorDuracaoDor = document.getElementById("duracao-dor");
const seletorRitmoIntestinal = document.getElementById("ritmo-intestinal");

const outrosSintomas = document.getElementById("outros-sintomas");
const resultadoSintomas = document.getElementById("resultado-sintomas");
const divSalvos = document.getElementById("sintomas-salvos");

const seletorResultadoFinal = document.getElementById("resultado-final");

//Guardar resultados
let resultado = [];
let sintomasSalvos = [];

//Eventos
seletorLocalDor.addEventListener("input", function (event) {
  const valorLocalDor = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    const filtro = dataLocalDor.filter((element) => element.localDaDor === valorLocalDor).map(e => e.doenca);
    console.log(filtro)

    resultado = [...resultado, ...filtro].sort()
  } 

  seletorResultadoFinal.innerHTML = ""
  resultado.forEach(e => {
    seletorResultadoFinal.innerHTML += `<p>${e}</p>`
  })
});

seletorCaracDor.addEventListener("input", function (event) {
  const valorCaracDor = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    const filtro = dataCaracDor.filter((element) => element.caracteristicasInicio == valorCaracDor).map(e => e.doenca);
    console.log(filtro);
    
    resultado = [...resultado, ...filtro]

    const repetidas = resultado.filter((item, index) => resultado.indexOf(item) !== index);
    resultado = [...new Set(repetidas)].sort()

  } 

  seletorResultadoFinal.innerHTML = ""
  resultado.forEach(e => {
    seletorResultadoFinal.innerHTML += `<p>${e}</p>`
  })
});

seletorIntensidadeDor.addEventListener("input", function (event) {
  const valorIntensidadeDor = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    const filtro = dataIntensidadeDor.filter((element) => element.Intensidade == valorIntensidadeDor).map(e => e.doenca);

    resultado = [...resultado, ...filtro]

    const repetidas = resultado.filter((item, index) => resultado.indexOf(item) !== index);
    resultado = [...new Set(repetidas)].sort()
  } 

  seletorResultadoFinal.innerHTML = ""
  resultado.forEach(e => {
    seletorResultadoFinal.innerHTML += `<p>${e}</p>`
  })
});

seletorReferidaDor.addEventListener("input", function (event) {
  const valorReferidaDor = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    const filtro = dataReferidaDor.filter((element) => element.dor_referida == valorReferidaDor);
    console.log(filtro);
  } else {
    return null;
  }
});

seletorTipoDor.addEventListener("input", function (event) {
  const valorTipoDor = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    const filtro = dataTipoDor.filter((element) => element.tipo_dor == valorTipoDor);
    console.log(filtro);
  } else {
    return null;
  }
});

seletorDuracaoDor.addEventListener("input", function (event) {
  const valorDuracaoDor = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    const filtro = dataDuracaoDor.filter((element) => element.duracao_dor == valorDuracaoDor);
    console.log(filtro);
  } else {
    return null;
  }
});

seletorRitmoIntestinal.addEventListener("input", function (event) {
  const valorRitmoIntestinal = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    const filtro = dataRitmoIntestinal.filter((element) => element.ritmo_intestinal == valorRitmoIntestinal);
    console.log(filtro);
  } else {
    return null;
  }
});

outrosSintomas.addEventListener("input", function ({ target }) {
  sintomas.forEach((element, index) => {
    const { value } = target;

    if (value === "") return (resultadoSintomas.innerHTML = "");

    const filtrar = sintomas.filter((element) =>
      element.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    resultadoSintomas.innerHTML = "";
    filtrar.forEach((e) => {
      resultadoSintomas.innerHTML += `
        <input 
          type="checkbox" 
          class="btn-check sintomas-check" 
          id="${e}" 
          name="${e}" 
          value="${e}" 
          autocomplete="off"
        >
        <label class="btn btn-outline-danger" for="${e}">${e}</label><br>
      `;
    });
    document.querySelectorAll(".sintomas-check").forEach((e) => {
      e.addEventListener("click", function () {
        console.log(e);
        if (sintomasSalvos.includes(e.value)) {
          sintomasSalvos = sintomasSalvos.filter(
            (element) => element !== e.value
          );
        } else {
          sintomasSalvos.push(e.value);
        }
        divSalvos.innerHTML = "";

        sintomasSalvos.forEach((el) => {
          divSalvos.innerHTML += `
          <input 
            type="checkbox" 
            class="btn-check sintomas-check checked" 
            id="${el}" 
            name="${el}" 
            value="${el}" 
            autocomplete="off"
          >
          <label class="btn btn-outline-danger" for="${el}">${el}</label>
          
          `;
        });
      });
    });
  });
});

