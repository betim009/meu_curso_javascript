# Gabarito — Exercícios de Seletores DOM

---

## Exercício 1 — Selecionando pelo ID

```javascript
const titulo = document.getElementById("titulo");
titulo.textContent = "Bem-vindo ao curso!";
```

---

## Exercício 2 — Selecionando pela classe

```javascript
const itens = document.getElementsByClassName("item");
console.log(itens.length); // 4
```

---

## Exercício 3 — querySelector vs getElementById

```javascript
// Forma 1: getElementById
const descricao1 = document.getElementById("descricao");
console.log(descricao1.textContent);

// Forma 2: querySelector
const descricao2 = document.querySelector("#descricao");
console.log(descricao2.textContent);
```

> Resultado esperado: `"Este é um parágrafo de descrição."` nas duas formas.

---

## Exercício 4 — querySelectorAll e forEach

```javascript
const links = document.querySelectorAll(".link");
links.forEach(link => {
  link.style.color = "blue";
});
```

---

## Exercício 5 — Selecionando por tag

```javascript
const itens = document.getElementsByTagName("li");

for (let i = 0; i < itens.length; i++) {
  console.log(itens[i].textContent);
}

// Saída:
// JavaScript
// HTML
// CSS
```

---

## Exercício 6 — Desafio

```javascript
const btn = document.getElementById("btn");
const mensagem = document.querySelector(".mensagem");

btn.addEventListener("click", function() {
  mensagem.textContent = "Botão clicado!";
});
```

> Perceba que usamos `addEventListener("click", ...)` para reagir ao clique.
> Seletores são o ponto de partida — tudo começa encontrando o elemento certo!
