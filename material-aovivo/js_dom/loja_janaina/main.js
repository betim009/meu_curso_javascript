import { produtos } from "./produtos.js";
import { createElements } from "./scripts/createElements.js";

window.addEventListener("load", () => {
  // Seletores
  const inputPesquisar = document.getElementById("input-pesquisar");
  const btnPesquisar = document.getElementById("btn-pesquisar");
  const divCarrinho = document.getElementById("carrinho");

  // Variaveis Globais
  let valorTotalCarrinho = 0;

  // Execucoes
  createElements(produtos);
  const btnsCarrinho = document.querySelectorAll(".btn-carrinho");

  btnsCarrinho.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const cafe = produtos[index];

      valorTotalCarrinho += cafe.preco;

      divCarrinho.innerHTML = `
        <p>${valorTotalCarrinho}</p>
      `;
    });
  });

  // Eventos
  btnPesquisar.addEventListener("click", () => {
    const valorBusca = inputPesquisar.value;

    const filtro = produtos.filter((element) =>
      element.produto
        .toLocaleLowerCase()
        .includes(valorBusca.toLocaleLowerCase())
    );
    createElements(filtro);
  });
});
