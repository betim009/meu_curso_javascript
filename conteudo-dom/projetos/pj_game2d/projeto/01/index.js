const heros = document.querySelectorAll(".hero-content");





// ESTRUTURA DE REPETICAO:
// LOOP 
// PARA CADA HEROI - FACA

for (const hero of heros) {
    hero.addEventListener("click", function() {
        hero.classList.add("active")

        for (const h of heros) {
            h.classList.remove("hero-content-before")
        }
    })
}