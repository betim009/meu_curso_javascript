import './style.css'

const divProducts = document.getElementById("div-products");

let products = [];

async function getProdcuts() {
    try {
        const req = await fetch("https://fakestoreapi.com/products");
        const res = await req.json();
        console.log(res)
        products = res;
    } catch (error) {
        console.log(error)
    }
}

window.addEventListener("load", async () => {
    await getProdcuts();

    for (const element of products) {
        divProducts.innerHTML += `
            <div class="card">
                <img src="${element.image}" />
                <h2>${element.title}</h2>
            </div>
        `
    }
})