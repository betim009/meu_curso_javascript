import { macbooks, ipads, iphones } from "./data.js";

const divMacbooks = document.getElementById("div-macbooks");
const divIphones = document.getElementById("div-iphones");
const divIpads = document.getElementById("div-ipads");

const navIphones = document.getElementById("nav-iphones")
const navMacbooks = document.getElementById("nav-macbooks")

for (const element of macbooks) {
  divMacbooks.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <button>Comprar</button>
        </div>
    `;
}

for (const element of iphones) {
  divIphones.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <button>Comprar</button>
        </div>
    `;
}

for (const element of ipads) {
  divIpads.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <button>Comprar</button>
        </div>
    `;
}


navIphones.addEventListener("click", function () {
    divIphones.style.display = "flex"

    divIpads.style.display = "none"
    divMacbooks.style.display = "none"

    navIphones.classList.add("active")
    navMacbooks.classList.remove("active")
})

navMacbooks.addEventListener("click", function () {
    divMacbooks.style.display = "flex"

    divIpads.style.display = "none"
    divIphones.style.display = "none"

    navMacbooks.classList.add("active")
    navIphones.classList.remove("active")
})