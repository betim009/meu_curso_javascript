# Exercícios — Eventos no DOM

## Como usar

Crie um arquivo `index.html` com o HTML indicado em cada exercício. Abra no navegador e teste a interação.

---

## Exercício 1 — Evento click simples

Crie um botão que, ao ser clicado, exiba um `alert` com a mensagem `"Olá! Você clicou no botão."`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <button id="btn">Clique aqui</button>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 2 — Mostrando texto na página

Crie um botão que, ao ser clicado, **troque o texto** do `<p>` de `"Texto original"` para `"Você clicou!"`. Não use `alert`, mostre diretamente na página.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <p id="mensagem">Texto original</p>
  <button id="btn">Trocar texto</button>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 3 — Evento input

Crie um campo de texto. Abaixo dele, mostre em tempo real (a cada letra digitada) o que está sendo digitado, no formato: `"Você digitou: [texto]"`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <input type="text" id="campo" placeholder="Digite algo...">
  <p>Você digitou: <span id="saida"></span></p>
  <script src="main.js"></script>
</body>
</html>
```

**Dica:** Use o evento `"input"`.

---

## Exercício 4 — Evento change com select

Crie um `<select>` com 4 opções de linguagens de programação. Ao trocar a seleção, exiba no parágrafo: `"Linguagem escolhida: [nome]"`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <select id="linguagem">
    <option value="">Escolha uma linguagem...</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="Java">Java</option>
    <option value="TypeScript">TypeScript</option>
  </select>
  <p id="resultado"></p>
  <script src="main.js"></script>
</body>
</html>
```

**Dica:** Use o evento `"change"`.

---

## Exercício 5 — Evento keydown

Crie um campo de texto. Quando o usuário pressionar **Enter**, exiba o valor digitado em um `<p>` e limpe o campo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <input type="text" id="campo" placeholder="Digite e pressione Enter">
  <p id="saida"></p>
  <script src="main.js"></script>
</body>
</html>
```

**Dica:** Use `addEventListener("keydown", ...)` e verifique se `event.key === "Enter"`.

---

## Exercício 6 — Desafio: contador de cliques

Crie um botão "Clique aqui". A cada clique, incremente um contador e mostre na página: `"Total de cliques: [número]"`. Adicione também um botão "Resetar" que zera o contador.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <p id="contador">Total de cliques: 0</p>
  <button id="btn-clicar">Clique aqui</button>
  <button id="btn-resetar">Resetar</button>
  <script src="main.js"></script>
</body>
</html>
```

---

Quando terminar, confira o [gabarito](exercicios-gabarito.md).
