export function createRodadas(baseDados, rodada, div) {
  baseDados.forEach((element, index) => {
    if (index === rodada) {
      div.innerHTML += `
            <h6>${element.rodada} Rodada</h6>
        `;
      element.jogos.forEach((jogo) => {
        div.innerHTML += `
                <p>${jogo.mandante} ${jogo.placar} ${jogo.visitante}</p>
                <hr/>
            `;
      });
    }
  });
}
