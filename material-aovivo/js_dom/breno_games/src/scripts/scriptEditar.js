window.addEventListener("load", async () => {
  const formEditar = document.getElementById("form-editar");
  const inputGame = document.getElementById("input-game");
  const inputBrand = document.getElementById("input-brand");
  const inputPrice = document.getElementById("input-price");
  const inputCategory = document.getElementById("input-category");

  // Pega a parte da query da URL atual
  const params = new URLSearchParams(window.location.search);
  // Acessa os valores
  const id = params.get("id");

  // Variaveis globais
  const data = {
    game: "",
    brand: "",
    price: "",
    category: "",
  };

  const url = `https://68e7bbac10e3f82fbf407d91.mockapi.io/games/${id}`;
  const req = await fetch(url);
  const res = await req.json();

  inputGame.value = res.game;
  inputBrand.value = res.brand;
  inputPrice.value = res.price;
  inputCategory.value = res.category;

  // Eventos
  formEditar.addEventListener("change", ({ target }) => {
    const { name, value } = target;
    data[name] = value;
  });

  formEditar.addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log(id);
    const endpoint = `https://68e7bbac10e3f82fbf407d91.mockapi.io/games/${id}`;

    const req = await fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    window.location.href = "../../index.html";
  });
});
