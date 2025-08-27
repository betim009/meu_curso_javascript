import { livros } from "./livros.js";

const divLivros = document.getElementById("livros"); // RESGATANDO DO HTML

livros.forEach(element => {
  divLivros.innerHTML += `
    <div class="card">
      <h2>${element.titulo}</h2>
      <p>${element.categoria}</p>
      <button>Comprar</button>
    </div>
  `
});