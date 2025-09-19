import { produtos } from "./produtos.js";


const params = new URLSearchParams(window.location.search);
const myName = params.get("name")
const divCard = document.getElementById("card")


const findProduto = produtos.find((produto, index) => produto.produto == myName);
divCard.innerHTML = `
    <img src="${findProduto.img}" />
    <h2>${findProduto.produto}</h2>

`