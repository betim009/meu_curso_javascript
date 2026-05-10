# Gabarito — Eventos no DOM

---

## Exercício 1 — Evento click simples

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert("Olá! Você clicou no botão.");
});
```

---

## Exercício 2 — Mostrando texto na página

```javascript
const btn = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");

btn.addEventListener("click", function() {
  mensagem.textContent = "Você clicou!";
});
```

> Usar `textContent` é melhor que `alert` porque não interrompe a navegação e fica visível ao usuário na própria página.

---

## Exercício 3 — Evento input

```javascript
const campo = document.getElementById("campo");
const saida = document.getElementById("saida");

campo.addEventListener("input", function() {
  saida.textContent = campo.value;
});
```

> O evento `"input"` dispara a cada tecla digitada, tornando a atualização instantânea.

---

## Exercício 4 — Evento change com select

```javascript
const linguagem = document.getElementById("linguagem");
const resultado = document.getElementById("resultado");

linguagem.addEventListener("change", function() {
  if (linguagem.value === "") {
    resultado.textContent = "";
    return;
  }
  resultado.textContent = "Linguagem escolhida: " + linguagem.value;
});
```

> O evento `"change"` só dispara quando o valor realmente muda (ao sair do campo ou selecionar uma opção diferente).

---

## Exercício 5 — Evento keydown

```javascript
const campo = document.getElementById("campo");
const saida = document.getElementById("saida");

campo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    saida.textContent = campo.value;
    campo.value = "";
  }
});
```

> `event.key` retorna o nome da tecla pressionada. `"Enter"` é o valor quando o usuário aperta Enter.

---

## Exercício 6 — Desafio: contador de cliques

```javascript
let contagem = 0;

const contador = document.getElementById("contador");
const btnClicar = document.getElementById("btn-clicar");
const btnResetar = document.getElementById("btn-resetar");

btnClicar.addEventListener("click", function() {
  contagem++;
  contador.textContent = "Total de cliques: " + contagem;
});

btnResetar.addEventListener("click", function() {
  contagem = 0;
  contador.textContent = "Total de cliques: " + contagem;
});
```

> A variável `contagem` fica fora das funções para que os dois botões (clicar e resetar) acessem e modifiquem o mesmo valor.
