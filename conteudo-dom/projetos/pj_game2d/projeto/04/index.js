const heros = document.querySelectorAll(".hero-content");
const gameWindow = document.getElementById("game-window");
const divStart = document.getElementById("div-start");
const btnEnviar = document.getElementById("btn-enviar");
const nameHero = document.getElementById("name-hero");
const inputNome = document.getElementById("input-nome");

let criarJanelaNome = false;
let permitirInteragir = false;
divStart.style.display = "none";

for (const hero of heros) {
  hero.addEventListener("click", function () {
    if (permitirInteragir === true) {
      hero.style = "cursor: not-allowed;";
      return null;
    }
    permitirInteragir = true;

    hero.classList.add("active");
    divStart.style.display = "flex";

    for (const h of heros) {
      h.classList.remove("hero-content-before");
    }
  });
}

btnEnviar.addEventListener("click", () => {
  const nome = inputNome.value;
  nameHero.textContent = nome;

  nameHero.classList.add("exibir-nome");

  setTimeout(() => {
    window.location.href = "game.html"
  }, 1500);
});
