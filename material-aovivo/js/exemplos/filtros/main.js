const japones = [
  {
    id: 1,
    nome: "Sushi",
    tipo: "peixe",
    preco: 25,
    quantidade: 10,
  },
  {
    id: 2,
    nome: "Tempurá",
    tipo: "frito",
    preco: 20,
    quantidade: 10,
  },
  {
    id: 3,
    nome: "Yakissoba",
    tipo: "macarrão",
    preco: 22,
    quantidade: 12,
  },
  {
    id: 4,
    nome: "Sashimi",
    tipo: "peixe",
    preco: 30,
    quantidade: 6,
  },
  {
    id: 5,
    nome: "Guioza",
    tipo: "carne",
    preco: 18,
    quantidade: 15,
  },
  {
    id: 6,
    nome: "Missoshiru",
    tipo: "sopa",
    preco: 12,
    quantidade: 20,
  },
  {
    id: 7,
    nome: "Arroz",
    tipo: "cereal",
    preco: 4,
    quantidade: 0,
  },
];


const divResultado = document.getElementById("div-resultados");

// for (const element of japones) {
//   divResultado.innerHTML += `
//     <p>${element.nome} ${element.preco}</p>
//   `
// }

// for (let index = 0; index < japones.length; index++) {
//   const element = japones[index];

//   divResultado.innerHTML += `
//     <h2>${index} index ${element.nome} ${element.preco}</h2>
//   `
// }

// japones.forEach((element, index) => {
//   divResultado.innerHTML += `
//       <span>${element.nome}</span>
//     `;
// });

// japones.map((element, index) => {
//   divResultado.innerHTML += `
//     <h5>${element.nome}</h5>
//   `;
// });

// for (const element of japones) {
//   if (element.quantidade > 0) {
//     divResultado.innerHTML += `
//       <p>${element.nome}</p>
//     `;
//   }
// }

// japones.forEach((element) => {
//   if (element.quantidade > 0) {
//     divResultado.innerHTML += `
//       <p>${element.nome}</p>
//     `;
//   }
// });

const japonesDisponivel = japones.filter(e => e.quantidade > 0)
japonesDisponivel.forEach(e => divResultado.innerHTML += ` <p>${e.nome}</p>`)
