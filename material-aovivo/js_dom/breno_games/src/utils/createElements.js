export function createElements(display, games) {
  display.innerHTML = "";

  games.forEach((element, index) => {
    display.innerHTML += `
            <div>
                <h2>${element.game}</h2>
                <p>${element.brand}</p>
                <button class="btn-editar">Alterar</button>
                <button class="btn-delete">Excluir</button>
            </div>
        `;
  });
}
