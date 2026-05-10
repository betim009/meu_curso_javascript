# Exercícios — Seletores DOM

## Como usar

Crie um arquivo `index.html` com o HTML indicado em cada exercício e um arquivo `main.js` para o JavaScript.
Abra o arquivo no navegador e use o console (F12) para ver os resultados.

---

## Exercício 1 — Selecionando pelo ID

Dado o HTML abaixo, selecione o elemento com `id="titulo"` e altere seu texto para `"Bem-vindo ao curso!"`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h1 id="titulo">Título original</h1>
  <script src="main.js"></script>
</body>
</html>
```

**Dica:** Use `document.getElementById()`.

---

## Exercício 2 — Selecionando pela classe

Dado o HTML abaixo, selecione todos os elementos com `class="item"` e imprima quantos itens existem no console.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <ul>
    <li class="item">Maçã</li>
    <li class="item">Banana</li>
    <li class="item">Laranja</li>
    <li class="item">Uva</li>
  </ul>
  <script src="main.js"></script>
</body>
</html>
```

**Dica:** Use `document.getElementsByClassName()` e verifique a propriedade `.length`.

---

## Exercício 3 — querySelector vs getElementById

Dado o HTML abaixo, selecione o parágrafo de duas formas diferentes e exiba o texto dele no console:

1. Usando `getElementById()`
2. Usando `querySelector()`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <p id="descricao">Este é um parágrafo de descrição.</p>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 4 — querySelectorAll e forEach

Dado o HTML abaixo, selecione todos os links e mude a cor de cada um para `"blue"` usando `querySelectorAll` + `forEach`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <a href="#" class="link">Link 1</a>
  <a href="#" class="link">Link 2</a>
  <a href="#" class="link">Link 3</a>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 5 — Selecionando por tag

Dado o HTML abaixo, selecione todos os itens `<li>` usando `getElementsByTagName` e imprima o texto de cada um no console.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <ul>
    <li>JavaScript</li>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 6 — Desafio

Dado o HTML abaixo, faça:

1. Selecione o botão pelo ID
2. Selecione o parágrafo com `querySelector`
3. Ao clicar no botão, troque o texto do parágrafo para `"Botão clicado!"`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <button id="btn">Clique aqui</button>
  <p class="mensagem">Texto inicial</p>
  <script src="main.js"></script>
</body>
</html>
```

> Esse exercício combina seletores com eventos. Tente resolver antes de ver o gabarito!

---

Quando terminar, confira o [gabarito](exercicios-gabarito.md).
