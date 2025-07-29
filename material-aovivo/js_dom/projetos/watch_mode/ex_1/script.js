const filmes = ["Breaking Bad", "Avatar", "Interstellar"];
const ids = ["3173903"]
const apiKey = "rDNUE6mfMeZxTKBoVoI7RmKGSrUi1cozVsrTpEv1";
const divFilmes = document.getElementById("div-filmes");

function criarSourcers(sources) {
    let html = "";
    for (const element of sources.slice(0, 2)) {
        html += `<p>${element.name}</p>`
    }
    return html
}

async function getFimes() {
  for (const element of ids) {
    // const urlFilmes = `https://api.watchmode.com/v1/search/?apiKey=${apiKey}&search_field=name&search_value=${element}`;
    const urlFilmes = `https://api.watchmode.com/v1/title/${element}/details/?apiKey=rDNUE6mfMeZxTKBoVoI7RmKGSrUi1cozVsrTpEv1`;

    const req = await fetch(urlFilmes);
    const res = await req.json();
    console.log(res)


    const urlSources = `https://api.watchmode.com/v1/title/${res.id}/sources/?apiKey=${apiKey}`;
    const reqSources = await fetch(urlSources);
    const resSources = await reqSources.json();
    console.log(resSources)

    divFilmes.innerHTML += `
        <div>
            <img src="${res.poster}"/>
            <h2>${res.title}</h2>
            <h4>Sources</h4>
            <div>${criarSourcers(resSources)}</div>
        </div>
    `
    break
  }
}

getFimes();
