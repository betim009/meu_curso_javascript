export function createAllCarts(carts) {
  const divCarts = document.getElementById("div-carts");
  for (const element of carts) {
    divCarts.innerHTML += `
            <div class="card">
                <h2>${element.date}</h2>
            </div>
        `;
  }
}