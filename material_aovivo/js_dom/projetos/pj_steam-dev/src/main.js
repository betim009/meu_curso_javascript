import { games } from "./data/games.js";

// SELETORES
const divListGames = document.getElementById("list-games");
const btnAction = document.getElementById("btn-action");

// FUNCOES

const createPromoGames = () => {
    // A PARTIR DA BASE DE DADOS CRIAR UM NOVO ARRAY APENAS COM OS JOGOS QUE SAO PROMOCAO
    // DICA => FILTER
};

// Eventos
btnAction.addEventListener("click", () => {
  window.location.href = "src/pages/game-category";
});

window.addEventListener("load", () => {
  games.forEach((element, index) => {
    divListGames.innerHTML += `
            <div class="col">
                <h4>${element.name}</h4>
                <img src="${element.thumb}" />

                <p>${
                  element.originalPrice > element.promoPrice
                    ? element.promoPrice
                    : element.originalPrice
                }</p>
            </div>
        `;
  });
});
