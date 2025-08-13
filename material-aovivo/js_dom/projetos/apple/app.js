import { macbooks, ipads, iphones } from "./data.js";

const divMacbooks = document.getElementById("div-macbooks");
const divIphones = document.getElementById("div-iphones");
const divIpads = document.getElementById("div-ipads");

const navIphones = document.getElementById("nav-iphones");
const navMacbooks = document.getElementById("nav-macbooks");
const navIpads = document.getElementById("nav-ipads");
const navMaior = document.getElementById("nav-maior");
const navMenor = document.getElementById("nav-menor");
const navRecomendado = document.getElementById("nav-recomendado");

const inputEncontrar = document.getElementById("input-encontrar");
const btnPesquisar = document.getElementById("btn-pesquisar");

const spanAlert = document.getElementById("span-alert");

for (const element of macbooks) {
  divMacbooks.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <p>R$ ${element.preco}</p>
            <button>Comprar</button>
        </div>
    `;
}

for (const element of iphones) {
  divIphones.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <p>R$ ${element.preco}</p>
            <button>Comprar</button>
        </div>
    `;
}

for (const element of ipads) {
  divIpads.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <p>R$ ${element.preco}</p>
            <button>Comprar</button>
        </div>
    `;
}

navIphones.addEventListener("click", function () {
  divIphones.style.display = "flex";

  divIpads.style.display = "none";
  divMacbooks.style.display = "none";

  navIphones.classList.add("active");
  navMacbooks.classList.remove("active");
  navIpads.classList.remove("active");
});

navMacbooks.addEventListener("click", function () {
  divMacbooks.style.display = "flex";

  divIpads.style.display = "none";
  divIphones.style.display = "none";

  navMacbooks.classList.add("active");
  navIphones.classList.remove("active");
  navIpads.classList.remove("active");
});

navIpads.addEventListener("click", function () {
  divIpads.style.display = "flex";

  divMacbooks.style.display = "none";
  divIphones.style.display = "none";

  navIpads.classList.add("active");
  navMacbooks.classList.remove("active");
  navIphones.classList.remove("active");
});

btnPesquisar.addEventListener("click", function () {
  const valorDentroInput = inputEncontrar.value;

  // NAO ESQUECE
  if (valorDentroInput.length === 0) {
    spanAlert.style.display = "flex";
    spanAlert.innerHTML += `
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
    `;
  } else {
    spanAlert.style.display = "none";
  }

  divIpads.style.display = "none";
  divIphones.style.display = "none";

  const todosProdutos = [...macbooks, ...iphones, ...ipads];

  const filtrarDados = todosProdutos.filter((element) =>
    element.title.includes(valorDentroInput)
  );

  divMacbooks.innerHTML = "";
  for (const element of filtrarDados) {
    divMacbooks.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <p>R$ ${element.preco}</p>
            <button>Comprar</button>
        </div>
    `;
  }
});

navMenor.addEventListener("click", function () {
  divIpads.style.display = "none";
  divIphones.style.display = "none";
  divIphones.style.display = "none";

  const todosProdutos = [...macbooks, ...iphones, ...ipads];

  const filtrarDados = todosProdutos.filter((element) => element.preco <= 4000);
  divMacbooks.innerHTML = "";
  for (const element of filtrarDados) {
    divMacbooks.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <p>R$ ${element.preco}</p>
            <button>Comprar</button>
        </div>
    `;
  }
});

navMaior.addEventListener("click", function () {
  divIpads.style.display = "none";
  divIphones.style.display = "none";
  divIphones.style.display = "none";

  const todosProdutos = [...macbooks, ...iphones, ...ipads];

  const filtrarDados = todosProdutos.filter((element) => element.preco >= 8000);
  divMacbooks.innerHTML = "";
  for (const element of filtrarDados) {
    divMacbooks.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <p>R$ ${element.preco}</p>
            <button>Comprar</button>
        </div>
    `;
  }
});

navRecomendado.addEventListener("click", function () {
  divIpads.style.display = "none";
  divIphones.style.display = "none";
  divIphones.style.display = "none";

  const todosProdutos = [...macbooks, ...iphones, ...ipads];

  const filtrarDados = todosProdutos.filter(
    (element) => element.recomendado === true
  );
  divMacbooks.innerHTML = "";
  for (const element of filtrarDados) {
    divMacbooks.innerHTML += `
        <div class="card">
            <img src="${element.url}" class="img-macbook"/>
            <h4>${element.title}</h4>
            <p>R$ ${element.preco}</p>
            <button>Comprar</button>
        </div>
    `;
  }
});
