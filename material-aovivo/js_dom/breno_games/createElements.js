export function createElements(display, games) {
  display.innerHTML = "";
  games.forEach((element, index) => {
    display.innerHTML += `
            <div>
                <h2>${element.game}</h2>
            </div>
        `;
  });
}
