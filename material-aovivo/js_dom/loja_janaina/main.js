import { produtos } from "./produtos.js";

// SELETORES
const divResultados = document.getElementById("resultado");
const inputPesquisar = document.getElementById("input-pesquisar");
const btnPesquisar = document.getElementById("btn-pesquisar");

// LOOPS
for (const element of produtos) {
  divResultados.innerHTML += `
        <div class="card">
            <img src="${element.img}" />
            <h2>${element.produto}</h2>
            <p>${element.preco}</p>
        </div>
    `;
}

btnPesquisar.addEventListener("click", () => {
  const valorBusca = inputPesquisar.value;

  const filtro = produtos.filter((element) => element.produto === valorBusca);

  divResultados.innerHTML = "";

  for (const element of filtro) {
    divResultados.innerHTML += `
        <div class="card">
            <img src="${element.img}" />
            <h2>${element.produto}</h2>
            <p>${element.preco}</p>
        </div>
    `
  }
});
