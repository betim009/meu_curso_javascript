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

// Função utilitária para aplicar a lógica de filtragem e atualização do resultado
function aplicarFiltro(seletor, data, campo) {
  seletor.addEventListener("input", function (event) {
    const valor = event.target.value;
    const checked = event.target.checked;

    if (checked == true) {
      const filtro = data.filter((element) => element[campo] == valor).map(e => e.doenca);
      resultado = [...resultado, ...filtro];
      const repetidas = resultado.filter((item, index) => resultado.indexOf(item) !== index);
      resultado = [...new Set(repetidas)].sort();
    }

    seletorResultadoFinal.innerHTML = "";
    resultado.forEach(e => {
      seletorResultadoFinal.innerHTML += `<p>${e}</p>`;
    });
  });
}

// Aplica a lógica para todos os seletores relevantes
aplicarFiltro(seletorCaracDor, dataCaracDor, 'caracteristicasInicio');
aplicarFiltro(seletorIntensidadeDor, dataIntensidadeDor, 'Intensidade');
aplicarFiltro(seletorReferidaDor, dataReferidaDor, 'dor_referida');
aplicarFiltro(seletorTipoDor, dataTipoDor, 'tipo_dor');
aplicarFiltro(seletorDuracaoDor, dataDuracaoDor, 'duracao_dor');
aplicarFiltro(seletorRitmoIntestinal, dataRitmoIntestinal, 'ritmo_intestinal');

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

// Função para habilitar/desabilitar os outros formulários
function toggleOtherForms(enabled) {
  const formsToToggle = [
    seletorCaracDor,
    seletorIntensidadeDor,
    seletorReferidaDor,
    seletorTipoDor,
    seletorDuracaoDor,
    seletorRitmoIntestinal
  ];
  formsToToggle.forEach(form => {
    if (form) {
      form.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.disabled = !enabled;
      });
    }
  });
  // Outros sintomas (campo de texto)
  if (outrosSintomas) {
    outrosSintomas.disabled = !enabled;
  }
}

// Função para verificar se algum checkbox do Local da Dor está marcado
function checkLocalDorSelected() {
  const checkboxes = seletorLocalDor.querySelectorAll('input[type="checkbox"]');
  return Array.from(checkboxes).some(cb => cb.checked);
}

// Inicialmente desabilita os outros formulários
window.addEventListener('DOMContentLoaded', () => {
  toggleOtherForms(false);
});

// Adiciona listener para todos os checkboxes do Local da Dor
seletorLocalDor.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    const enabled = checkLocalDorSelected();
    toggleOtherForms(enabled);
  });
});

