# Exercícios — Criação e Manipulação de Elementos DOM

## Como usar

Crie um arquivo `index.html` e um `main.js`. Abra o HTML no navegador e veja os elementos sendo criados dinamicamente.

---

## Exercício 1 — Criando um parágrafo

Crie um parágrafo com o texto `"Olá! Este parágrafo foi criado com JavaScript."` e adicione-o ao `<body>`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <script src="main.js"></script>
</body>
</html>
```

**Dica:** Use `document.createElement("p")`, defina o `textContent` e use `document.body.appendChild()`.

---

## Exercício 2 — Lista dinâmica

Dado um array com três frutas, crie um `<ul>` com um `<li>` para cada fruta e adicione ao `<div id="container">`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <div id="container"></div>
  <script src="main.js"></script>
</body>
</html>
```

**Array de frutas:**
```javascript
const frutas = ["Maçã", "Banana", "Laranja"];
```

---

## Exercício 3 — Editando texto de um elemento existente

Selecione o `<h2>` abaixo e troque seu texto para `"JavaScript é incrível!"`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h2 id="titulo">Texto antigo</h2>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 4 — Removendo um elemento

Selecione o parágrafo com `id="remover"` e remova-o da página ao clicar no botão.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <p id="remover">Este parágrafo será removido.</p>
  <button id="btn">Remover parágrafo</button>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 5 — Cards dinâmicos

Dado o array abaixo, crie um `<div>` com `class="card"` para cada produto. Dentro de cada card, coloque um `<h3>` com o nome e um `<p>` com o preço.

```javascript
const produtos = [
  { nome: "Notebook", preco: "R$ 3.500,00" },
  { nome: "Celular", preco: "R$ 1.200,00" },
  { nome: "Fone de Ouvido", preco: "R$ 150,00" }
];
```

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <div id="lista-produtos"></div>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 6 — Desafio: Adicionar itens dinamicamente

Crie uma interface onde o usuário digita um nome em um campo de texto, clica em "Adicionar" e o nome aparece como um novo `<li>` em uma lista.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <input type="text" id="campo" placeholder="Digite um nome...">
  <button id="btn-add">Adicionar</button>
  <ul id="lista"></ul>
  <script src="main.js"></script>
</body>
</html>
```

> Esse exercício combina criação de elementos, captura de valor de input e eventos!

---

Quando terminar, confira o [gabarito](exercicios-gabarito.md).
