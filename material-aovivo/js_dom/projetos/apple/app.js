import { macbooks } from "./data.js";

const divMacbooks = document.getElementById('div-macbooks')

for (const element of macbooks) {
    divMacbooks.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <button>Comprar</button>
        </div>
    `
}