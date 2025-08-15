export function createAllProducts(products) {
  const divProducts = document.getElementById("div-products");
  for (const element of products) {
    divProducts.innerHTML += `
            <div class="card">
                <img src="${element.image}" />
                <h2>${element.title}</h2>
            </div>
        `;
  }
}