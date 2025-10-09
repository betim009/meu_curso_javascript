import { clearAllInputs } from "../utils/clearAllInputs.js";
import { createElements } from "../utils/createElements.js";

window.addEventListener("load", () => {
  // Seletores
  const formCadastro = document.getElementById("form-cadastro");
  const displayGames = document.getElementById("display-games");

  // Variaveis globais
  const data = {
    game: "",
    brand: "",
    price: "",
    category: "",
  };

  // Eventos
  formCadastro.addEventListener("change", ({ target }) => {
    const { name, value } = target;
    data[name] = value;
  });

  formCadastro.addEventListener("submit", async (event) => {
    const { target } = event;
    event.preventDefault();

    const endpoint = "https://68e7bbac10e3f82fbf407d91.mockapi.io/games";

    const req = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    clearAllInputs(target, 4);
  });
});
