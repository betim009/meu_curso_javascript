const filmes = ["Breaking Bad", "Avatar", "Interestelar"];
const apiKey = "rDNUE6mfMeZxTKBoVoI7RmKGSrUi1cozVsrTpEv1";

async function buscarFilmesComPlataformas() {
    for (const nome of filmes) {
        const urlBusca = `https://api.watchmode.com/v1/search/?apiKey=${apiKey}&search_field=name&search_value=${encodeURIComponent(nome)}`;
        const resBusca = await fetch(urlBusca);
        const dadosBusca = await resBusca.json();

        const resultado = dadosBusca.title_results?.[0];
        if (!resultado) {
            console.log(`🔎 Nenhum resultado encontrado para "${nome}"`);
            continue;
        }

        console.log(`🎬 ${resultado.name} (${resultado.year}) [${resultado.type}]`);

        const urlSources = `https://api.watchmode.com/v1/title/${resultado.id}/sources/?apiKey=${apiKey}`;
        const resSources = await fetch(urlSources);
        const fontes = await resSources.json();

        if (Array.isArray(fontes)) {
            fontes.forEach((fonte) => {
                console.log(`🟢 ${fonte.name}: ${fonte.web_url}`);
            });
        } else {
            console.log("❌ Nenhuma fonte disponível.");
        }

        console.log("---------------\n");
    }
}

buscarFilmesComPlataformas();