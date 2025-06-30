const data = [
  {
    nome: "Camisa High",
    url: "https://highcompanybr.com/wp-content/uploads/2025/03/Tag_HIGHxOUS_Blue.webp",
  },
  {
    nome: "Camisa High",
    url: "https://highcompanybr.com/wp-content/uploads/2025/03/Tag_HIGHxOUS_Blue.webp",
  },
  {
    nome: "Camisa High",
    url: "https://highcompanybr.com/wp-content/uploads/2025/03/Tag_HIGHxOUS_Blue.webp",
  },
  {
    nome: "Camisa High",
    url: "https://highcompanybr.com/wp-content/uploads/2025/03/Tag_HIGHxOUS_Blue.webp",
  },
  {
    nome: "Camisa High",
    url: "https://highcompanybr.com/wp-content/uploads/2025/03/Tag_HIGHxOUS_Blue.webp",
  },
  {
    nome: "Camisa High",
    url: "https://highcompanybr.com/wp-content/uploads/2025/03/Tag_HIGHxOUS_Blue.webp",
  },
  {
    nome: "Camisa High",
    url: "https://highcompanybr.com/wp-content/uploads/2025/03/Tag_HIGHxOUS_Blue.webp",
  },
  {
    nome: "Camisa High",
    url: "https://highcompanybr.com/wp-content/uploads/2025/03/Tag_HIGHxOUS_Blue.webp",
  },
];

const camisas = document.getElementById("camisas");

data.forEach((element) => {
  camisas.innerHTML += `
        <div class="col-3">
            <div class="card">
                <h2>${element.nome}</h2>
                <img class="img-fluid" src="${element.url}">
            </div>
        </div>
    `;
});
