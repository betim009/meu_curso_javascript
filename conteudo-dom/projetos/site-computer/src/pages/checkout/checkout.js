const btnSoma = document.getElementById("btn-soma");
const btnSub = document.getElementById("btn-sub");
const quantidade = document.getElementById("quantidade");
const valor = document.getElementById("valor");

const somaAlt = document.getElementById("btn-soma-alt")
const subAlt = document.getElementById("btn-sub-alt")
const quantidadeAlt = document.getElementById("quantidade-alt")
const valorAlt = document.getElementById("valor-alt")

const converter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

let contador = 1;
let valorTenis = 380.0;

let contadorAlt = 1;
let valorTenis2 = 580.0;


btnSoma.addEventListener("click", function () {
  contador += 1;
  quantidade.textContent = contador;
  valor.textContent = converter.format(valorTenis * contador);
});

btnSub.addEventListener("click", function () {
  if (contador == 1) return null;
  contador -= 1;
  quantidade.textContent = contador;
  valor.textContent = converter.format(valorTenis * contador);
});



somaAlt.addEventListener("click", function () {
    contadorAlt += 1;
    quantidadeAlt.textContent = contadorAlt;
    valorAlt.textContent = converter.format(valorTenis2 * contadorAlt);

});

subAlt.addEventListener("click", function () {  // Corrigido para "click"
  if (contadorAlt == 1) return;
  contadorAlt -= 1;
  quantidadeAlt.textContent = contadorAlt;
  valorAlt.textContent = converter.format(valorTenis2 * contadorAlt);
}
)