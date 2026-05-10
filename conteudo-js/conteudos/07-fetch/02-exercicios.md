# Exercícios — Fetch e APIs

## API usada nos exercícios

Vamos usar a API pública do GitHub, que não precisa de chave ou cadastro:

```
https://api.github.com/users/{nome-do-usuario}
```

Exemplo:
```
https://api.github.com/users/betim009
```

Também usaremos a API de países:
```
https://restcountries.com/v3.1/region/south-america
```

---

## Exercício 1 — Seu primeiro fetch

Escreva uma função `buscarUsuario` que busque os dados do usuário `octocat` na API do GitHub e imprima no console:

- O nome do usuário (`name`)
- O número de repositórios públicos (`public_repos`)
- A URL do perfil (`html_url`)

**URL:** `https://api.github.com/users/octocat`

---

## Exercício 2 — Tratando erros

Modifique a função do exercício anterior para usar `try/catch`. Se a requisição falhar, mostre no console: `"Erro ao buscar dados: [mensagem do erro]"`.

---

## Exercício 3 — Exibindo no HTML

Crie uma página HTML que:

1. Ao carregar, busque os dados do usuário `octocat`
2. Exiba na página:
   - O nome
   - A quantidade de repositórios públicos
   - A foto de perfil (`avatar_url`)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h1 id="nome">Carregando...</h1>
  <p id="repos"></p>
  <img id="foto" src="" alt="Foto" width="120">
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 4 — Lista de países

Crie uma função que busque os países da América do Sul e exiba uma lista `<ul>` com os nomes de todos os países na página.

**URL:** `https://restcountries.com/v3.1/region/south-america`

Cada país tem a propriedade `name.common` com o nome em inglês.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h1>Países da América do Sul</h1>
  <ul id="lista"></ul>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 5 — Botão para buscar

Crie uma interface onde o usuário pode digitar um nome de usuário do GitHub e clicar em "Buscar". A página deve exibir:

- Nome
- Número de repositórios públicos
- Foto

Se o usuário não for encontrado (status 404), mostre: `"Usuário não encontrado."`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h1>Buscador do GitHub</h1>
  <input type="text" id="campo-usuario" placeholder="Digite um username...">
  <button id="btn-buscar">Buscar</button>
  <div id="resultado"></div>
  <script src="main.js"></script>
</body>
</html>
```

---

## Gabarito

### Exercício 1

```javascript
async function buscarUsuario() {
  const resposta = await fetch("https://api.github.com/users/octocat");
  const usuario = await resposta.json();

  console.log(usuario.name);
  console.log(usuario.public_repos);
  console.log(usuario.html_url);
}

buscarUsuario();
```

---

### Exercício 2

```javascript
async function buscarUsuario() {
  try {
    const resposta = await fetch("https://api.github.com/users/octocat");
    const usuario = await resposta.json();

    console.log(usuario.name);
    console.log(usuario.public_repos);
    console.log(usuario.html_url);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro.message);
  }
}

buscarUsuario();
```

---

### Exercício 3

```javascript
async function carregarUsuario() {
  try {
    const resposta = await fetch("https://api.github.com/users/octocat");
    const usuario = await resposta.json();

    document.getElementById("nome").textContent = usuario.name;
    document.getElementById("repos").textContent = "Repositórios: " + usuario.public_repos;
    document.getElementById("foto").src = usuario.avatar_url;
  } catch (erro) {
    document.getElementById("nome").textContent = "Erro ao carregar.";
    console.error(erro);
  }
}

carregarUsuario();
```

---

### Exercício 4

```javascript
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
```

---

### Exercício 5

```javascript
const btnBuscar = document.getElementById("btn-buscar");
const campoUsuario = document.getElementById("campo-usuario");
const resultado = document.getElementById("resultado");

btnBuscar.addEventListener("click", async function() {
  const username = campoUsuario.value.trim();

  if (username === "") {
    resultado.innerHTML = "<p>Digite um nome de usuário.</p>";
    return;
  }

  resultado.innerHTML = "<p>Buscando...</p>";

  try {
    const resposta = await fetch("https://api.github.com/users/" + username);

    if (resposta.status === 404) {
      resultado.innerHTML = "<p>Usuário não encontrado.</p>";
      return;
    }

    const usuario = await resposta.json();

    resultado.innerHTML = `
      <h2>${usuario.name || usuario.login}</h2>
      <p>Repositórios públicos: ${usuario.public_repos}</p>
      <img src="${usuario.avatar_url}" alt="Foto de ${usuario.login}" width="100">
    `;
  } catch (erro) {
    resultado.innerHTML = "<p>Erro ao buscar. Tente novamente.</p>";
    console.error(erro);
  }
});
```
