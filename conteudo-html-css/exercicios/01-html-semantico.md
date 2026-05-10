# Exercícios — HTML Semântico

## O que é HTML semântico?

Tags semânticas descrevem o **significado** do conteúdo, não apenas sua aparência. Elas ajudam o navegador, os motores de busca e os leitores de tela a entenderem a estrutura da página.

Exemplos de tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`

---

## Exercício 1 — Estrutura básica de página

Monte a estrutura HTML de uma página de blog usando apenas tags semânticas. A página deve ter:

- Cabeçalho com o nome do blog e um menu de navegação (Home, Artigos, Sobre)
- Conteúdo principal com um artigo
- Barra lateral com links relacionados
- Rodapé com copyright

**Dica:** Use `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>` e `<footer>`.

---

## Exercício 2 — Hierarquia de títulos

Crie uma página sobre um tema de sua escolha com:
- Um `<h1>` com o título principal
- Dois `<h2>` com subtítulos de seções
- Dentro de cada `<h2>`, ao menos um `<h3>` com um tópico específico

**Regra:** Nunca pule níveis (não vá de `<h1>` para `<h3>` sem usar `<h2>`).

---

## Exercício 3 — Listas e tabela

Crie uma página que apresente uma comparação entre `var`, `let` e `const` em JavaScript:

1. Use uma lista não ordenada (`<ul>`) para listar as características de cada um
2. Use uma tabela (`<table>`) com as colunas: Palavra-chave, Escopo, Reatribuição, Redeclaração

---

## Exercício 4 — Formulário semântico completo

Crie um formulário de cadastro que contenha:

- Campo de nome completo (`type="text"`)
- Campo de e-mail (`type="email"`)
- Campo de senha (`type="password"`)
- Data de nascimento (`type="date"`)
- Seleção de gênero (`<select>`)
- Aceitar termos (`<input type="checkbox">`)
- Botão de envio

Use `<label>` associado a cada campo com o atributo `for`. Use `<fieldset>` e `<legend>` para agrupar os campos.

---

## Exercício 5 — Desafio: página de portfólio

Crie a estrutura HTML completa (sem CSS) de uma página de portfólio pessoal que inclua:

- `<header>` com nome e menu de navegação
- `<section id="sobre">` com uma descrição pessoal e foto (`<img>`)
- `<section id="projetos">` com 3 cards de projetos (cada um como um `<article>`)
- `<section id="contato">` com um formulário de contato
- `<footer>` com links para redes sociais

**Foco:** Use tags semânticas corretas, não divs para tudo.

---

Confira o [gabarito](01-html-semantico-gabarito.md) quando terminar.
