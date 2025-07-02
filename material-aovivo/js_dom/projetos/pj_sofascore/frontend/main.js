import { createRodadas } from "./scripts/createRodadas.js";
import { getBrasileirao } from "./services/getBrasileirao.js";
import { getMundial } from "./services/getMundial.js";

const resultadoPartidas = document.getElementById("resultado-partidas");
const resultadoProximos = document.getElementById("resultado-proximos");
const btnMundial = document.getElementById("btn-mundial");
const btnBrasileirao = document.getElementById("btn-brasileirao");
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");

let valorSearch = "";

async function main(campeonato, rodada1, rodada2) {
  let api = null;

  campeonato === "brasileirao"
    ? (api = await getBrasileirao())
    : (api = await getMundial());

  resultadoPartidas.innerHTML = "";
  resultadoProximos.innerHTML = "";

  createRodadas(api, rodada1, resultadoPartidas);
  createRodadas(api, rodada2, resultadoProximos);
}

inputSearch.addEventListener("input", ({ target }) => {
  valorSearch = target.value;
});

btnSearch.addEventListener("click", () => {
  valorSearch = valorSearch.toLowerCase()
  localStorage.setItem("search", valorSearch)
  window.location.href = `/pages/search/index.html`;
});

btnMundial.addEventListener("click", () => main("mundial", 0, 1));
btnBrasileirao.addEventListener("click", () => main("brasileirao", 11, 12));
window.addEventListener("load", () => main("brasileirao", 11, 12));