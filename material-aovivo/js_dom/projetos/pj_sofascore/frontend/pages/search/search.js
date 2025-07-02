import { createRodadas } from "../../scripts/createRodadas.js";
import { getBrasileirao } from "../../services/getBrasileirao.js";

const resultado = document.getElementById("resultado");

async function main() {
  const api = await getBrasileirao();
  return api;
}

window.addEventListener("load", async () => {
  const dadosBrasileirao = await main();
  let jogos = [];

  console.log(dadosBrasileirao);

  dadosBrasileirao.forEach((element) => {
    jogos = [...jogos, ...element.jogos];
  });

  const getSearch = localStorage.getItem("search");

  const encontrado = jogos.filter(
    (e) =>
      e.mandante.toLowerCase() == getSearch ||
      e.visitante.toLowerCase() == getSearch
  );

  console.log(encontrado);

  if (encontrado.length > 0) {
    encontrado.forEach((jogo) => {
      resultado.innerHTML += `
                <p>${jogo.mandante} ${jogo.placar} ${jogo.visitante}</p>
                <hr/>
            `;
    });
  } else {
    resultado.innerHTML += `
    <p>404 not found</p>
    <a href="../../index.html">Voltar Pagina inicial </a> 
    `
  }
});
