import { createRodadas } from "./scripts/createRodadas.js";
import { getBrasileirao } from "./services/getBrasileirao.js";

const resultadoPartidas = document.getElementById("resultado-partidas");
const resultadoProximos = document.getElementById("resultado-proximos");

async function main() {
  const api = await getBrasileirao();

  createRodadas(api, 11, resultadoPartidas);
  createRodadas(api, 12, resultadoProximos);
}

main();
  