import { getApi } from "./src/services/fetchApi.js";
import { createElements } from "./src/utils/createElements.js";

window.addEventListener("load", async () => {
  const displayGames = document.getElementById("display-games");

  const games = await getApi(); // fetch do get dos dados

  createElements(displayGames, games); // Criando os elementos
  const btnsDelete = document.querySelectorAll(".btn-delete");
  const btnsEditar = document.querySelectorAll(".btn-editar");

  btnsDelete.forEach((btn, index) => {
    btn.addEventListener("click", async () => {
      const enpoint = `https://68e7bbac10e3f82fbf407d91.mockapi.io/games/${games[index].id}`;
      await fetch(enpoint, {
        method: "DELETE",
      });
      window.location.reload();
    });
  });

  btnsEditar.forEach((btn, index) => {
    btn.addEventListener("click", async () => {
      const gameId = games[index].id
      window.location.href = `/src/pages/editar.html?id=${gameId}`
    });
  });
});
