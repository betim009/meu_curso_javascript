# Exercícios — Manipulando Estilos com JavaScript

## Como usar

Crie um `index.html` e um `main.js`. Abra no navegador para ver os estilos sendo aplicados dinamicamente.

---

## Exercício 1 — Mudando cor de texto

Selecione o `<h1>` abaixo e mude sua cor para `"purple"` usando JavaScript.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h1 id="titulo">Título da Página</h1>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 2 — Tamanho de fonte

Selecione o parágrafo e aumente o tamanho da fonte para `"24px"`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <p id="texto">Este texto ficará maior.</p>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 3 — Botão que muda fundo

Crie um botão que, ao ser clicado, mude o `backgroundColor` do `<body>` para `"#f0f0f0"`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <button id="btn">Mudar fundo</button>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 4 — classList.add e classList.remove

Crie dois botões: um que adiciona a classe `"destaque"` ao texto e outro que remove.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <style>
    .destaque {
      color: white;
      background-color: darkorange;
      padding: 8px 16px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <p id="texto">Texto com destaque opcional</p>
  <button id="btn-add">Adicionar destaque</button>
  <button id="btn-rm">Remover destaque</button>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 5 — Modo escuro com classList.toggle

Crie um botão "Modo Escuro" que alterna (toggle) a classe `"dark"` no `<body>`.

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
  <button id="btn-dark">Modo Escuro</button>
  <script src="main.js"></script>
</body>
</html>
```

---

## Exercício 6 — Desafio: Semáforo

Crie três botões (Vermelho, Amarelo, Verde). Ao clicar em cada um, mude o fundo de um `<div id="semaforo">` para a cor correspondente.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <style>
    #semaforo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: gray;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div id="semaforo"></div>
  <button id="btn-red">Vermelho</button>
  <button id="btn-yellow">Amarelo</button>
  <button id="btn-green">Verde</button>
  <script src="main.js"></script>
</body>
</html>
```

---

Quando terminar, confira o [gabarito](exercicios-gabarito.md).
