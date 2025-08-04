import { comidasJaponesas, lanches } from "./dados.js";

// SELETORES LANCHES
const divResultadoLanches = document.getElementById("resultado-lanches");

const btnLanches = document.getElementById("categoria-lanches");
const btnFritas = document.getElementById("categoria-fritas");
const btnLimpar = document.getElementById("categoria-limpar");
const btnBuscar = document.getElementById("btn-buscar");

const inputBuscar = document.getElementById("input-buscar");
const inputBuscarAuto = document.getElementById("input-buscar-auto");

// SELETORES JAPONES

// Lanches INICIAL
lanches.forEach((element) => {
  divResultadoLanches.innerHTML += `
        <div>
            <h4>${element.nome}</h4>
            <p>${element.preco}</p>
            <img src="${element.url}" />
        </div>
    `;
});

// JAPONES INICIAL

// EVENTOS LANCHES
btnFritas.addEventListener("click", () => {
  divResultadoLanches.innerHTML = ""; // LIMPANDO o HTML (DIV)

  const fritas = lanches.filter((element) => element.categoria === "Fritas");
  fritas.forEach((element) => {
    divResultadoLanches.innerHTML += `
        <div>
            <h4>${element.nome}</h4>
            <p>${element.preco}</p>
            <img src="${element.url}" />
        </div>
    `;
  });

  btnLimpar.hidden = false;
});

btnLanches.addEventListener("click", function () {
  divResultadoLanches.innerHTML = ""; // LIMPANDO o HTML (DIV)

  for (const element of lanches) {
    if (element.categoria === "Lanche") {
      divResultadoLanches.innerHTML += `
            <div>
                <h4>${element.nome}</h4>
                <p>${element.preco}</p>
                <img src="${element.url}" />
            </div>
        `;
    }
  }

  btnLimpar.hidden = false;
});

btnLimpar.addEventListener("click", () => {
  btnLimpar.hidden = true;
  divResultadoLanches.innerHTML = ""; // LIMPANDO o HTML (DIV)

  lanches.forEach((element) => {
    divResultadoLanches.innerHTML += `
        <div>
            <h4>${element.nome}</h4>
            <p>${element.preco}</p>
        </div>
    `;
  });
});

btnBuscar.addEventListener("click", () => {
  const resultadoInput = inputBuscar.value;

  const filtrarResultado = lanches.filter((element) =>
    element.nome.includes(resultadoInput)
  );

  console.log(filtrarResultado);

  if (filtrarResultado.length > 0) {
    divResultadoLanches.innerHTML = "";

    filtrarResultado.forEach((element) => {
      divResultadoLanches.innerHTML += `
        <div>
            <h4>${element.nome}</h4>
            <p>${element.preco}</p>
        </div>
    `;
    });
  } else {
    return alert("Nao foi encontrado nenhum lanche.");
  }
});

inputBuscarAuto.addEventListener("input", () => {
  const resultadoInput = inputBuscarAuto.value;

  if (resultadoInput.length > 2) {
    const filtrarResultado = lanches.filter((element) =>
      element.nome.includes(resultadoInput)
    );

    if (filtrarResultado.length > 0) {
      divResultadoLanches.innerHTML = "";

      filtrarResultado.forEach((element) => {
        divResultadoLanches.innerHTML += `
        <div>
            <h4>${element.nome}</h4>
            <p>${element.preco}</p>
        </div>
    `;
      });
    } else {
      return alert("Nao foi encontrado nenhum lanche.");
    }
  }
});

// EVENTOS JAPONES
