import { createElements } from "./createElements.js";

window.addEventListener("load", () => {
  // Seletores
  const inputGame = document.getElementById("input-game");
  const inputBrand = document.getElementById("input-brand");
  const inputPrice = document.getElementById("input-price");
  const inputCategory = document.getElementById("input-category");
  const formCadastro = document.getElementById("form-cadastro");
  const displayGames = document.getElementById("display-games");
  //outro seletor

  // Variaveis globais
  const gamesMock = [
    {
      game: "Batman",
      brand: "DC",
      price: "$30,00",
      category: "Action",
    },
    {
      game: "Superman",
      brand: "DC",
      price: "$20,00",
      category: "Action",
    },
  ];

  // Functions
  createElements(displayGames, gamesMock)

  // Eventos
  formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = {
      game: inputGame.value,
      brand: inputBrand.value,
      price: inputPrice.value,
      category: inputCategory.value,
    };

    gamesMock.push(data);

    createElements(displayGames, gamesMock)
  });
});
