# 📄 Documentação da API Watchmode (Uso com Node.js)

A Watchmode fornece uma API RESTful para descobrir onde assistir filmes e séries, com suporte a mais de 200 plataformas globais. Abaixo estão todos os endpoints, parâmetros e exemplos de uso com Node.js.

---

## 🔑 Autenticação

Todas as requisições exigem o parâmetro `apiKey`:

```
https://api.watchmode.com/v1/title/12345/?apiKey=SUA_API_KEY
```

---

## 📂 Endpoints de Configuração

### `/sources/` – Plataformas de Streaming

- Método: `GET`
- Retorna serviços como Netflix, Prime Video etc.

```json
[
  {
    "id": 203,
    "name": "Netflix",
    "type": "sub",
    "regions": ["US"]
  }
]
```

---

### `/regions/` – Países Suportados

```json
[
  {"country":"US","name":"USA","data_tier":1,"plan_enabled":true}
]
```

---

### `/networks/` – Redes de TV

Retorna redes como "AMC", "HBO", etc.

---

## 🔍 Busca e Autocomplete

### `/search/`

Busca por nome, imdb_id ou tmdb_id.

```
/v1/search/?search_field=name&search_value=Matrix&apiKey=SUA_API_KEY
```

### `/autocomplete-search/`

Sugestões de títulos enquanto digita.

---

## 🎬 Títulos

### `/title/{id}/`

Detalhes do título (filme ou série).

```json
{
  "title": "Breaking Bad",
  "year": 2008,
  "genres": ["Drama"],
  "user_rating": 9.2
}
```

### `/title/{id}/sources/`

Plataformas onde assistir:

```json
[
  {
    "name": "Netflix",
    "type": "sub",
    "region": "US",
    "web_url": "https://..."
  }
]
```

### `/title/{id}/seasons/`

Retorna temporadas:

```json
[
  {"season_number": 1, "name": "Season 1"}
]
```

### `/title/{id}/episodes/`

Lista episódios de uma série:

```json
[
  {
    "title": "Pilot",
    "season_number": 1,
    "episode_number": 1
  }
]
```

### `/title/{id}/cast-crew/`

Elenco e equipe técnica do título.

---

## 👤 Pessoas

### `/person/{id}/`

Informações sobre um ator/diretor:

```json
{
  "full_name": "Brad Pitt",
  "main_profession": "actor"
}
```

---

## 📅 Novidades

### `/releases/`

Filmes/séries recém-lançados nas plataformas:

```json
[
  {
    "title": "Slow Horses",
    "source_name": "AppleTV+"
  }
]
```

---

## 📜 Listagem e Filtros

### `/list-titles/`

Permite filtrar por gênero, nota, tipo, ano, etc.

```json
{
  "titles": [
    {"title": "Inception", "year": 2010}
  ]
}
```

---

## 🔄 Atualizações Incrementais

- `/changes/new_titles`
- `/changes/new_people`
- `/changes/title_streaming_sources_changed`
- `/changes/title_details_changed`
- `/changes/title_episodes_changed`

---

## 📥 Mapeamento de IDs

- [`/datasets/title_id_map.csv`](https://api.watchmode.com/datasets/title_id_map.csv)
- [`/datasets/person_id_map.csv`](https://api.watchmode.com/datasets/person_id_map.csv)

---

## ✅ Exemplo com Node.js (sem try/catch)

```js
import fetch from 'node-fetch';

const API_KEY = 'SUA_API_KEY';

async function buscarTitulo(nome) {
  const res = await fetch(\`https://api.watchmode.com/v1/search/?search_field=name&search_value=\${nome}&apiKey=\${API_KEY}\`);
  const data = await res.json();
  return data;
}

async function buscarDetalhes(id) {
  const res = await fetch(\`https://api.watchmode.com/v1/title/\${id}/?apiKey=\${API_KEY}\`);
  const data = await res.json();
  return data;
}
```

---

## 📌 Observações

- Até 1.000 chamadas por mês no plano gratuito.
- Use `append_to_response` para combinar múltiplas respostas.
- Use `regions=BR` para foco no Brasil.