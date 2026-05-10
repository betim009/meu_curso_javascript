# Exercícios — CSS Flexbox

## Como usar estes exercícios

Para cada exercício, crie um arquivo `index.html` e um `style.css`. Abra no navegador e tente reproduzir o layout descrito antes de ver o gabarito.

---

## Referência rápida Flexbox

| Propriedade | Valores comuns | O que faz |
|-------------|---------------|-----------|
| `display: flex` | — | Ativa o Flexbox no container |
| `flex-direction` | `row`, `column` | Direção dos itens |
| `justify-content` | `center`, `space-between`, `space-around`, `flex-start`, `flex-end` | Alinha no eixo principal |
| `align-items` | `center`, `flex-start`, `flex-end`, `stretch` | Alinha no eixo cruzado |
| `gap` | `10px`, `1rem` | Espaço entre os itens |
| `flex-wrap` | `wrap`, `nowrap` | Permite quebra de linha |
| `flex: 1` | — | O item ocupa o espaço disponível |

---

## Exercício 1 — Centralizar um elemento

Crie um `<div>` amarelo de `200px × 200px` perfeitamente centralizado na tela (vertical e horizontalmente).

```html
<div class="container">
  <div class="caixa"></div>
</div>
```

---

## Exercício 2 — Navbar horizontal

Crie uma barra de navegação com:
- Logo à esquerda
- Links (Home, Sobre, Contato) à direita
- Fundo escuro e texto branco
- Altura de `60px`

```html
<nav class="navbar">
  <span class="logo">MeuSite</span>
  <ul class="links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</nav>
```

---

## Exercício 3 — Cards lado a lado

Crie 3 cards com `200px × 250px` cada, alinhados lado a lado com `20px` de espaço entre eles. Os cards devem ser centralizados na página.

```html
<div class="container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

---

## Exercício 4 — Layout em coluna

Crie um layout com dois elementos dentro de um container:
- O primeiro (`<header>`) com altura fixa de `80px`
- O segundo (`<main>`) ocupando todo o espaço restante da tela

```html
<div class="layout">
  <header class="cabecalho">Cabeçalho</header>
  <main class="conteudo">Conteúdo principal</main>
</div>
```

**Dica:** Use `flex-direction: column` e `flex: 1` no `<main>`.

---

## Exercício 5 — Grid de cards responsivo

Crie uma grade de cards que:
- Mostra 3 cards por linha em telas largas
- Quebra para linhas menores em telas pequenas (com `flex-wrap: wrap`)
- Cada card tem largura mínima de `200px` e ocupa igual espaço disponível

```html
<div class="grade">
  <div class="card">Produto 1</div>
  <div class="card">Produto 2</div>
  <div class="card">Produto 3</div>
  <div class="card">Produto 4</div>
  <div class="card">Produto 5</div>
</div>
```

---

## Exercício 6 — Desafio: layout de página completa

Crie o layout de uma página completa com:

```
┌─────────────────────────────┐
│         HEADER (80px)       │
├──────────────┬──────────────┤
│              │              │
│    MAIN      │    ASIDE     │
│   (flex: 2)  │   (flex: 1)  │
│              │              │
├─────────────────────────────┤
│         FOOTER (60px)       │
└─────────────────────────────┘
```

- Header: fundo azul, texto branco
- Main: fundo branco, padding interno
- Aside: fundo cinza claro, padding interno
- Footer: fundo escuro, texto branco, centralizado

---

Quando terminar, confira o [gabarito](02-flexbox-gabarito.md).
