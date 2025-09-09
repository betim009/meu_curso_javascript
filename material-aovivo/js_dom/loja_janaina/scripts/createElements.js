export const createElements = (array) => {
  const divResultados = document.getElementById("resultado");
  divResultados.innerHTML = "";

  array.forEach((element) => {
    divResultados.innerHTML += `
        <div class="card">
            <img src="${element.img}" />
            <h2>${element.produto}</h2>
            <p>${element.preco}</p>

            <button class="btn-carrinho">Adicionar Carrinho</button>
            <button>Finalizar Compra</button>
        </div>
    `;
  });
};
