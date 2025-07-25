const filmes = ["Breaking Bad", "Avatar", "Interestelar"];
const apiKey = "rDNUE6mfMeZxTKBoVoI7RmKGSrUi1cozVsrTpEv1";

async function buscarFilmesComPlataformas() {
  for (const nome of filmes) {
    const urlBusca = `https://api.watchmode.com/v1/search/?apiKey=${apiKey}&search_field=name&search_value=${nome}`;

    const req = await fetch(urlBusca)
    const res = await req.json()
    console.log(res)
  }
}

buscarFilmesComPlataformas()
