# Gabarito — Criação e Manipulação de Elementos DOM

---

## Exercício 1 — Criando um parágrafo

```javascript
const paragrafo = document.createElement("p");
paragrafo.textContent = "Olá! Este parágrafo foi criado com JavaScript.";
document.body.appendChild(paragrafo);
```

---

## Exercício 2 — Lista dinâmica

```javascript
const frutas = ["Maçã", "Banana", "Laranja"];

const container = document.getElementById("container");
const lista = document.createElement("ul");

frutas.forEach(fruta => {
  const item = document.createElement("li");
  item.textContent = fruta;
  lista.appendChild(item);
});

container.appendChild(lista);
```

---

## Exercício 3 — Editando texto de um elemento existente

```javascript
const titulo = document.getElementById("titulo");
titulo.textContent = "JavaScript é incrível!";
```

---

## Exercício 4 — Removendo um elemento

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  const paragrafo = document.getElementById("remover");
  paragrafo.remove();
});
```

---

## Exercício 5 — Cards dinâmicos

```javascript
const produtos = [
  { nome: "Notebook", preco: "R$ 3.500,00" },
  { nome: "Celular", preco: "R$ 1.200,00" },
  { nome: "Fone de Ouvido", preco: "R$ 150,00" }
];

const listaProdutos = document.getElementById("lista-produtos");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "card";

  const nome = document.createElement("h3");
  nome.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.textContent = produto.preco;

  card.appendChild(nome);
  card.appendChild(preco);
  listaProdutos.appendChild(card);
});
```

---

## Exercício 6 — Desafio: Adicionar itens dinamicamente

```javascript
const campo = document.getElementById("campo");
const btnAdd = document.getElementById("btn-add");
const lista = document.getElementById("lista");

btnAdd.addEventListener("click", function() {
  const texto = campo.value.trim();

  if (texto === "") {
    alert("Digite um nome antes de adicionar!");
    return;
  }

  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);

  campo.value = "";
  campo.focus();
});
```

> `.trim()` remove espaços extras no início e no final do texto.
> `.focus()` devolve o cursor para o campo de texto após adicionar o item.
