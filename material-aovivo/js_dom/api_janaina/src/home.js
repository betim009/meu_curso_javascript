window.addEventListener("load",  () => {
  const displayUsername = document.getElementById("display-username");
  const divProducts = document.getElementById("products");

  const localStorageUsername = localStorage.getItem("username");
  displayUsername.textContent = `Usuario logado: ${localStorageUsername}`;

  async function getProducts() {
    const url = "https://fakestoreapi.com/products";
    const req = await fetch(url);
    const res = await req.json();


    res.forEach(product => {
      divProducts.innerHTML += `
        <div class="card">
          <div class="card-top"> 
             <img class="thumb" src="${product.image}"/>
          </div>
          <div>
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>${product.description.toLowerCase().slice(0, 99)}...</p>
            <p>${product.price}</p>
          </div>
        </div>
      `
    });
  }

  getProducts()

});
