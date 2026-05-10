# Exercícios — LocalStorage

## Exercício 1 — Salvar e ler um valor simples

Escreva um código que:
1. Salve o valor `"JavaScript"` com a chave `"linguagem"` no localStorage
2. Leia esse valor e exiba no console

---

## Exercício 2 — Contador persistente

Crie uma variável `contador` que começa em `0`. Toda vez que o script rodar, incremente o contador em 1 e salve no localStorage. Exiba no console o valor atual.

**Dica:** Use `parseInt(localStorage.getItem("contador")) || 0` para ler o valor.

---

## Exercício 3 — Salvando um objeto

Crie um objeto representando um produto e salve no localStorage. Depois leia e exiba o nome do produto no console.

```javascript
const produto = {
  nome: "Notebook",
  preco: 3500,
  disponivel: true
};
```

---

## Exercício 4 — Lista de compras persistente

Crie uma lista de compras que:
1. Começa vazia (ou com os dados do localStorage)
2. Adiciona 3 itens à lista
3. Salva a lista no localStorage
4. Lê a lista do localStorage e exibe cada item no console

---

## Exercício 5 — Remover um item

Usando a lista do exercício anterior, remova o segundo item com `splice()` e atualize o localStorage.

---

## Exercício 6 — Desafio: preferência de tema

Crie uma página HTML com dois botões: "Modo Claro" e "Modo Escuro".

- Ao clicar em qualquer botão, aplique o tema na página e **salve a preferência no localStorage**
- Ao carregar a página, leia o localStorage e aplique o tema salvo automaticamente

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <style>
    body { background-color: white; color: black; }
    body.dark { background-color: #1a1a1a; color: white; }
  </style>
</head>
<body>
  <h1>Minha Página</h1>
  <button id="btn-claro">Modo Claro</button>
  <button id="btn-escuro">Modo Escuro</button>
  <script src="main.js"></script>
</body>
</html>
```

---

## Gabarito

### Exercício 1

```javascript
localStorage.setItem("linguagem", "JavaScript");

const linguagem = localStorage.getItem("linguagem");
console.log(linguagem); // "JavaScript"
```

---

### Exercício 2

```javascript
let contador = parseInt(localStorage.getItem("contador")) || 0;
contador++;
localStorage.setItem("contador", contador);
console.log("Contador atual:", contador);
```

> A cada vez que você rodar o script, o número aumenta — e persiste entre execuções!

---

### Exercício 3

```javascript
const produto = {
  nome: "Notebook",
  preco: 3500,
  disponivel: true
};

// Salvar
localStorage.setItem("produto", JSON.stringify(produto));

// Ler
const produtoSalvo = JSON.parse(localStorage.getItem("produto"));
console.log(produtoSalvo.nome); // "Notebook"
```

---

### Exercício 4

```javascript
let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || [];

listaCompras.push("Arroz");
listaCompras.push("Feijão");
listaCompras.push("Macarrão");

localStorage.setItem("listaCompras", JSON.stringify(listaCompras));

const listaLida = JSON.parse(localStorage.getItem("listaCompras"));
listaLida.forEach(item => console.log(item));
// Arroz
// Feijão
// Macarrão
```

---

### Exercício 5

```javascript
let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || [];

listaCompras.splice(1, 1); // Remove o segundo item (índice 1)

localStorage.setItem("listaCompras", JSON.stringify(listaCompras));

console.log(listaCompras); // ["Arroz", "Macarrão"]
```

---

### Exercício 6 — Desafio: preferência de tema

```javascript
const btnClaro = document.getElementById("btn-claro");
const btnEscuro = document.getElementById("btn-escuro");

// Aplicar tema ao carregar a página
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark") {
  document.body.classList.add("dark");
}

btnClaro.addEventListener("click", function() {
  document.body.classList.remove("dark");
  localStorage.setItem("tema", "claro");
});

btnEscuro.addEventListener("click", function() {
  document.body.classList.add("dark");
  localStorage.setItem("tema", "dark");
});
```

> Feche e abra o navegador — o tema salvo será aplicado automaticamente!
