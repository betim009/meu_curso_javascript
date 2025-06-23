import { getBrasileirao } from "./services/getBrasileirao.js";

const resultadoPartidas = document.getElementById("resultado-partidas");

async function main() {
    const api = await getBrasileirao();
    console.log(api);

    api.forEach(element => {
        resultadoPartidas.innerHTML += `
            <h6>${element.rodada} Rodada</h6>
        `
        element.jogos.forEach(jogo => {
            resultadoPartidas.innerHTML += `
                <p>${jogo.mandante} ${jogo.placar} ${jogo.visitante}</p>
            `
        })
        resultadoPartidas.innerHTML += `<hr>`
    });
}

main()