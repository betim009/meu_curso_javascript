# Módulo 7 — Fetch e Consumo de APIs

## O que é uma API?

**API** significa _Application Programming Interface_ (Interface de Programação de Aplicação).

Na prática, uma API é um **serviço que fornece dados pela internet**. Você faz uma requisição e ele te responde com informações — normalmente no formato JSON.

Exemplos reais de APIs públicas:
- Previsão do tempo
- Lista de países e moedas
- Informações de filmes, séries, jogos
- Cotação de criptomoedas

---

## O que é o fetch?

O `fetch` é uma função do JavaScript que permite **buscar dados de uma URL** (como uma API).

Ele é **assíncrono**: faz a requisição, mas não trava o código enquanto espera a resposta.

---

## Sintaxe básica

```javascript
fetch("https://url-da-api.com/dados")
  .then(resposta => resposta.json())
  .then(dados => {
    console.log(dados);
  })
  .catch(erro => {
    console.error("Erro:", erro);
  });
```

Passo a passo:
1. `fetch("url")` — faz a requisição para a URL
2. `.then(resposta => resposta.json())` — converte a resposta para objeto JavaScript
3. `.then(dados => ...)` — usa os dados recebidos
4. `.catch(erro => ...)` — captura erros (URL errada, sem internet, etc.)

---

## Exemplo real: buscando um usuário

Vamos usar a API pública do GitHub, que não precisa de cadastro:

```javascript
fetch("https://api.github.com/users/betim009")
  .then(resposta => resposta.json())
  .then(usuario => {
    console.log(usuario.name);       // Nome do usuário
    console.log(usuario.public_repos); // Repositórios públicos
    console.log(usuario.avatar_url);   // URL da foto
  })
  .catch(erro => {
    console.error("Erro ao buscar usuário:", erro);
  });
```

---

## Usando async/await (forma mais moderna)

A mesma requisição com `async/await` fica assim:

```javascript
async function buscarUsuario() {
  try {
    const resposta = await fetch("https://api.github.com/users/betim009");
    const usuario = await resposta.json();
    console.log(usuario.name);
    console.log(usuario.public_repos);
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro);
  }
}

buscarUsuario();
```

> `async/await` é apenas uma forma diferente de escrever o mesmo código. O resultado é idêntico, mas o código fica mais parecido com leitura sequencial.

---

## Exibindo dados no HTML

Em vez de apenas usar o `console.log`, podemos mostrar os dados na página:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Dados do GitHub</title>
</head>
<body>
  <h1 id="nome"></h1>
  <p id="repos"></p>
  <img id="foto" src="" alt="Foto do usuário" width="100">

  <script>
    async function carregarUsuario() {
      const resposta = await fetch("https://api.github.com/users/betim009");
      const usuario = await resposta.json();

      document.getElementById("nome").textContent = usuario.name;
      document.getElementById("repos").textContent = "Repositórios: " + usuario.public_repos;
      document.getElementById("foto").src = usuario.avatar_url;
    }

    carregarUsuario();
  </script>
</body>
</html>
```

---

## Verificando o status da resposta

Nem toda requisição dá certo. Devemos checar se o servidor respondeu com sucesso:

```javascript
async function buscarDados(url) {
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Requisição falhou com status: " + resposta.status);
  }

  const dados = await resposta.json();
  return dados;
}
```

- `resposta.ok` é `true` quando o status HTTP está entre 200 e 299
- `resposta.status` é o código HTTP (200 = OK, 404 = não encontrado, 500 = erro do servidor)

---

## Buscando uma lista de dados

APIs geralmente retornam listas (arrays). Exemplo com a API de países (restcountries):

```javascript
async function listarPaises() {
  const resposta = await fetch("https://restcountries.com/v3.1/region/south-america");
  const paises = await resposta.json();

  paises.forEach(pais => {
    console.log(pais.name.common);
  });
}

listarPaises();
```

---

## Renderizando uma lista no HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h1>Países da América do Sul</h1>
  <ul id="lista"></ul>

  <script>
    async function carregarPaises() {
      const resposta = await fetch("https://restcountries.com/v3.1/region/south-america");
      const paises = await resposta.json();

      const lista = document.getElementById("lista");

      paises.forEach(pais => {
        const item = document.createElement("li");
        item.textContent = pais.name.common;
        lista.appendChild(item);
      });
    }

    carregarPaises();
  </script>
</body>
</html>
```

---

## Erros comuns

| Erro | Causa | Solução |
|------|-------|---------|
| `Failed to fetch` | URL errada ou sem internet | Verifique a URL e a conexão |
| `SyntaxError: Unexpected token` | Resposta não é JSON | Verifique se a API retorna JSON |
| `TypeError: Cannot read properties of undefined` | Tentou acessar dado que não existe | Verifique a estrutura da resposta no console |
| Dados não aparecem | Código síncrono executado antes do fetch terminar | Use `async/await` ou `.then()` corretamente |

---

## Resumo

| Conceito | O que faz |
|----------|-----------|
| `fetch(url)` | Faz uma requisição HTTP para a URL |
| `.then(r => r.json())` | Converte a resposta para objeto JS |
| `await fetch(url)` | Aguarda a resposta (dentro de async) |
| `try/catch` | Captura erros de rede ou de processamento |
| `resposta.ok` | Verifica se a requisição foi bem-sucedida |
| `resposta.status` | Código HTTP da resposta |

---

Continue para os [exercícios práticos](02-exercicios.md).
