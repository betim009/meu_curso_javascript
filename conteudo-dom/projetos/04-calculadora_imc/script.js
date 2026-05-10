const formImc = document.getElementById("form-imc");
const resultado = document.getElementById("resultado");
const valorImc = document.getElementById("valor-imc");
const classificacao = document.getElementById("classificacao");
const btnNovo = document.getElementById("btn-novo");

function classificarImc(imc) {
  if (imc < 18.5) return { texto: "Abaixo do peso", classe: "abaixo" };
  if (imc < 25)   return { texto: "Peso normal",    classe: "normal" };
  if (imc < 30)   return { texto: "Sobrepeso",      classe: "sobrepeso" };
  if (imc < 35)   return { texto: "Obesidade grau I",   classe: "obesidade-i" };
  if (imc < 40)   return { texto: "Obesidade grau II",  classe: "obesidade-ii" };
  return             { texto: "Obesidade grau III", classe: "obesidade-iii" };
}

formImc.addEventListener("submit", function(e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  const imc = peso / (altura * altura);
  const { texto, classe } = classificarImc(imc);

  valorImc.textContent = imc.toFixed(1);

  classificacao.textContent = texto;
  classificacao.className = "classificacao " + classe;

  formImc.classList.add("oculto");
  resultado.classList.remove("oculto");
});

btnNovo.addEventListener("click", function() {
  formImc.reset();
  formImc.classList.remove("oculto");
  resultado.classList.add("oculto");

  classificacao.className = "classificacao";
});
