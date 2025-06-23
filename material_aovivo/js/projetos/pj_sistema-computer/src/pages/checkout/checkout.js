const btnSoma = document.getElementById("btn-soma");
const btnSub = document.getElementById("btn-sub");
const quantidade = document.getElementById("quantidade");
const valor = document.getElementById("valor");

const somaAlt = document.getElementById("btn-soma-alt");
const subAlt = document.getElementById("btn-sub-alt");
const quantidadeAlt = document.getElementById("quantidade-alt");
const valorAlt = document.getElementById("valor-alt");

const somaAlt2 = document.getElementById("btn-soma-alt2");
const subAlt2 = document.getElementById("btn-sub-alt2");
const quantidadeAlt2 = document.getElementById("quantidade-alt2");
const valorAlt2 = document.getElementById("valor-alt2");

const somaAlt3 = document.getElementById("btn-soma-alt3")
const subAlt3 = document.getElementById("btn-sub-alt3")
const quantidadeAlt3 = document.getElementById("quantidade-alt3")
const valorAlt3 = document.getElementById("valor-alt3")

const converter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

let contador = 1;
let valorServico = 80.0;

let contadorAlt = 1;
let valorServico2 = 150.0;



btnSoma.addEventListener("click", function () {
  contador += 1;
  quantidade.textContent = contador;
  valor.textContent = converter.format(valorServico * contador);
});

btnSub.addEventListener("click", function () {
  if (contador == 1) return null;
  contador -= 1;
  quantidade.textContent = contador;
  valor.textContent = converter.format(valorServico * contador);
});

somaAlt.addEventListener("click", function () {
  contadorAlt += 1;
  quantidadeAlt.textContent = contadorAlt;
  valorAlt.textContent = converter.format(valorServico2 * contadorAlt);
});

subAlt.addEventListener("click", function () {
  if (contadorAlt == 1) return;
  contadorAlt -= 1;
  quantidadeAlt.textContent = contadorAlt;
  valorAlt.textContent = converter.format(valorServico2 * contadorAlt);
});


