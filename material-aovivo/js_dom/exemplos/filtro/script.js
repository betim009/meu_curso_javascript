const lanches = [
  {
    nome: "X-Burguer",
    preco: 15.0,
    descricao: "Pão, hambúrguer de carne e queijo.",
    categoria: "Lanche",
  },
  {
    nome: "X-Salada",
    preco: 18.0,
    descricao: "Pão, hambúrguer, queijo, alface e tomate.",
    categoria: "Lanche",
  },
  {
    nome: "X-Bacon",
    preco: 20.0,
    descricao: "Pão, hambúrguer, bacon crocante e queijo.",
    categoria: "Lanche",
  },
  {
    nome: "Hot Dog",
    preco: 12.0,
    descricao: "Pão com salsicha, ketchup, mostarda e batata palha.",
    categoria: "Lanche",
  },
  {
    nome: "Batata Frita",
    preco: 10.0,
    descricao: "Porção média de batata frita crocante.",
    categoria: "Fritas",
  },
];

const comidasJaponesas = [
  {
    nome: "Sushi",
    preco: 25.0,
    descricao: "Bolinho de arroz com peixe cru ou outros ingredientes.",
    categoria: "Japones",
  },
  {
    nome: "Temaki",
    preco: 20.0,
    descricao: "Cone de alga recheado com arroz e peixe cru.",
    categoria: "Japones",
  },
  {
    nome: "Yakissoba",
    preco: 22.0,
    descricao: "Macarrão frito com legumes e carne.",
    categoria: "Massa",
  },
  {
    nome: "Guioza",
    preco: 18.0,
    descricao: "Pastelzinho recheado com carne ou legumes, cozido ou frito.",
    categoria: "Japones",
  },
  {
    nome: "Sashimi",
    preco: 30.0,
    descricao: "Fatias finas de peixe cru sem arroz.",
    categoria: "Japones",
  },
];

// SELETORES LANCHES
const divResultadoLanches = document.getElementById("resultado-lanches");
const btnLanches = document.getElementById("categoria-lanches");
const btnFritas = document.getElementById("categoria-fritas");
const btnLimpar = document.getElementById("categoria-limpar");

// SELETORES JAPONES

// Lanches INICIAL
lanches.forEach((element) => {
  divResultadoLanches.innerHTML += `
        <div>
            <h4>${element.nome}</h4>
            <p>${element.preco}</p>
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


// EVENTOS JAPONES