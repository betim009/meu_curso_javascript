const heros = document.querySelectorAll(".hero-content");
const gameWindow = document.getElementById("game-window");
const divStart = document.getElementById("div-start");
const btnEnviar = document.getElementById("btn-enviar");

// ESTRUTURA DE REPETICAO:
// LOOP 
// PARA CADA HEROI - FACA

// VARIAVEIS GLOBAIS
let criarJanelaNome = false;

for (const hero of heros) {
    hero.addEventListener("click", function() {
        hero.classList.add("active")

        criarJanelaNome = true;
        divStart.hidden = false;


        for (const h of heros) {
            h.classList.remove("hero-content-before")
        }
    })
}

btnEnviar.addEventListener("click", function () {
    btnEnviar.classList.add("btn-pressed")
    btnEnviar.classList.remove("btn-enviar")

    window.location.href = "game.html"
})