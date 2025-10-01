import { calendario } from "./calendarioData.js";

export function createMes(divMes, indexCalendario) {
  divMes.innerHTML = `
        <h2>${calendario[indexCalendario].mes}</h2>
    `;
}

export function createDias(divDias, indexCalendario) {
  divDias.innerHTML = "";
  calendario[indexCalendario].dias.forEach((element) => {
    divDias.innerHTML += `
            <p>${element}</p>
        `;
  });
}
