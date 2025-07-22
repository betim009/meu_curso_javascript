/*
    FUNCAO ASINC

    REQ

    RES JSON

*/

async function getSources() {
    const url = "https://api.watchmode.com/v1/sources/?apiKey=rDNUE6mfMeZxTKBoVoI7RmKGSrUi1cozVsrTpEv1"

    const req = await fetch(url)
    const res = await req.json()

    const idSources = document.getElementById("id-sources")

    for (let index = 0; index < 10; index++) {
        const element = res[index];

        idSources.innerHTML += `
        <div class="card">
            <img src="${element.logo_100px}" />
            <p>${element.name}</p>
            <a href="${element.ios_appstore_url}" target="_blank">Android</a>
        </div>
    `
    }


    console.log(res)
}

getSources()