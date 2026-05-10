# Gabarito — Manipulando Estilos com JavaScript

---

## Exercício 1 — Mudando cor de texto

```javascript
const titulo = document.getElementById("titulo");
titulo.style.color = "purple";
```

---

## Exercício 2 — Tamanho de fonte

```javascript
const texto = document.getElementById("texto");
texto.style.fontSize = "24px";
```

> Lembre: propriedades CSS com hífen viram camelCase em JS. `font-size` → `fontSize`.

---

## Exercício 3 — Botão que muda fundo

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  document.body.style.backgroundColor = "#f0f0f0";
});
```

---

## Exercício 4 — classList.add e classList.remove

```javascript
const texto = document.getElementById("texto");
const btnAdd = document.getElementById("btn-add");
const btnRm = document.getElementById("btn-rm");

btnAdd.addEventListener("click", function() {
  texto.classList.add("destaque");
});

btnRm.addEventListener("click", function() {
  texto.classList.remove("destaque");
});
```

---

## Exercício 5 — Modo escuro com classList.toggle

```javascript
const btnDark = document.getElementById("btn-dark");

btnDark.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});
```

> `toggle` adiciona a classe se ela não existir, e remove se já existir. Perfeito para on/off!

---

## Exercício 6 — Desafio: Semáforo

```javascript
const semaforo = document.getElementById("semaforo");

document.getElementById("btn-red").addEventListener("click", function() {
  semaforo.style.backgroundColor = "red";
});

document.getElementById("btn-yellow").addEventListener("click", function() {
  semaforo.style.backgroundColor = "yellow";
});

document.getElementById("btn-green").addEventListener("click", function() {
  semaforo.style.backgroundColor = "green";
});
```
