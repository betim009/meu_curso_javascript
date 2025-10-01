import { createDias, createMes } from "./manipularCalendario.js";

window.addEventListener("load", () => {
  // SELETORES
  const divMes = document.getElementById("calendario-mes");
  const divDias = document.getElementById("calendario-dias");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  // Variaveis Globais
  let indexCalendario = new Date().getMonth();
  createMes(divMes, indexCalendario);
  createDias(divDias, indexCalendario);

  // EVENTOS
  btnPrev.addEventListener("click", () => {
    indexCalendario -= 1;
    createMes(divMes, indexCalendario);
    createDias(divDias, indexCalendario);
  });

  btnNext.addEventListener("click", () => {
    indexCalendario += 1;
    createMes(divMes, indexCalendario);
    createDias(divDias, indexCalendario);
  });
});
