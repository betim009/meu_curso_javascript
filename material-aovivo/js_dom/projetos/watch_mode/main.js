const data = ["Breaking Bad", "Avatar", "Lord of the Rings"];
const dataIds = [3173903, 138018, 3157435, 123946];

async function getData() {
  const key = "rDNUE6mfMeZxTKBoVoI7RmKGSrUi1cozVsrTpEv1";

  // SO PARA ENCONTRAR OS IDS dos FILMES OU SERIES QUE EU DESEJO SABER
  //   for (const element of data) {
  //     const url = `https://api.watchmode.com/v1/search/?apiKey=${key}&search_field=name&search_value=${element}`;
  //     const req = await fetch(url);
  //     const res = await req.json();

  //     // console.log(res)
  //   }


  const idData = document.getElementById("id-data");
  for (const element of dataIds) {
    const url = `https://api.watchmode.com/v1/title/${element}/details/?apiKey=${key}`;
    const req = await fetch(url);
    const res = await req.json();
    console.log('FILME OU SERIE: ', res);

    const urlSources = `https://api.watchmode.com/v1/title/${res.id}/sources/?apiKey=${key}`;
    const reqSources = await fetch(urlSources);
    const resSources = await reqSources.json();
    console.log('SOURCES do FILME ou da SERIE', resSources);
    
    idData.innerHTML += `
        <div>
            <img src="${res.poster}"/>
            <h4>${res.title}</h4>
            <ul>
                <li>${resSources[0].name} ${resSources[0].episodes > 0 ? resSources[0].episodes : ""}</li>
                <li>${resSources[1].name} ${resSources[1].episodes > 0 ? resSources[1].episodes : ""}</li>
            </ul>
        </div>
    `;

  }
}
getData();

async function getSources() {
  const url =
    "https://api.watchmode.com/v1/sources/?apiKey=rDNUE6mfMeZxTKBoVoI7RmKGSrUi1cozVsrTpEv1";

  const req = await fetch(url);
  const res = await req.json();

  const idSources = document.getElementById("id-sources");

  for (let index = 0; index < 10; index++) {
    const element = res[index];

    idSources.innerHTML += `
        <div class="card">
            <img src="${element.logo_100px}" />
            <p>${element.name}</p>
            <a href="${element.ios_appstore_url}" target="_blank">Android</a>
        </div>
    `;
  }
}
getSources();
