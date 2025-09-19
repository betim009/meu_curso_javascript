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
  const btnsCarrinho = document.querySelectorAll(".btn-carrinho"); // retorna uma lista de btns
  const divsCards = document.querySelectorAll(".card"); // retorna uma lista de btns

  btnsCarrinho.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const produto = produtos[index];

      valorTotalCarrinho += produto.preco;

      divCarrinho.innerHTML = `
        <p>${valorTotalCarrinho}</p>
      `;
    });
  });

  divsCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const produto = produtos[index];
      window.location.href = `produto.html?name=${produto.produto}`
    })
  })

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
