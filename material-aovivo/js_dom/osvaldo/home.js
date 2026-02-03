const selector = (id) => document.getElementById(id);

window.addEventListener("load", async () => {
    const divProducts = selector("div-products");

    // Requisicao 
    const req = await fetch("https://fakestoreapi.com/products");
    // Resposta
    const res = await req.json();

    res.forEach(product => {
        divProducts.innerHTML += `
            <div class="card">
                <img src="${product.image}" />
                <p>${product.title}</p>
                <p>$${product.price}</p>
            </div>
        `
    });


})