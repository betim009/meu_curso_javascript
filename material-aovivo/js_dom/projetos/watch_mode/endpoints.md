⚠️ Importante: a busca agora exige dois parâmetros obrigatórios:
- search_field=name
- search_value=titulo desejado

`https://api.watchmode.com/v1/search/?apiKey=SUA_KEY&search_field=name&search_value=breaking%20bad`

---

### 📺 Obter detalhes de um título
Use o ID retornado na busca para obter detalhes completos:

`GET https://api.watchmode.com/v1/title/{id}/details/?apiKey=SUA_KEY`

Exemplo:
`https://api.watchmode.com/v1/title/3173903/details/?apiKey=SUA_KEY`

Retorna:
- Sinopse (plot_overview)
- Duração
- Gêneros
- Ano de lançamento
- Elenco
- IMDb rating
- E outros dados úteis

### 📡 Ver onde assistir (plataformas de streaming)
Para saber onde um título está disponível (Netflix, Prime Video etc.):

`GET https://api.watchmode.com/v1/title/{id}/sources/?apiKey=SUA_KEY`

Exemplo:
`https://api.watchmode.com/v1/title/3173903/sources/?apiKey=SUA_KEY`

Isso retorna:
- Nome da plataforma
- Links para assistir
- Tipo de exibição (gratuito, assinatura, aluguel etc.)

---