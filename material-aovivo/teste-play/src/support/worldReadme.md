# World no Cucumber + Playwright

## O que e o World
O World e um objeto que o Cucumber cria para cada cenario. Pense nele como uma "mochila" onde os steps guardam tudo o que precisam usar durante o teste (ex.: navegador, pagina, dados temporarios). Quando o cenario acaba, o World e descartado. Isso evita que um teste "vaze" coisas para o outro.

No seu projeto, o World e a classe `CustomWorld` em `src/support/world.ts`. Essa classe e registrada com `setWorldConstructor`, entao o Cucumber sabe que deve criar uma nova instancia dela para cada cenario.

## Por que foi criado como classe
- **Isolamento por cenario**: cada cenario recebe uma instancia nova, garantindo estado limpo.
- **Tipagem no this**: nos steps, `this` passa a ter tipos claros (ex.: `this.page`), evitando erros silenciosos.
- **Extensao facil**: se precisar, voce pode adicionar novos dados e helpers (ex.: `this.user`, `this.api`, `this.login()`), sem espalhar variaveis globais.

## O que sao browser, context e page
Esses tres objetos sao o basico do Playwright.

### 1) browser
E o navegador em si (Chrome/Chromium, Firefox, WebKit). Ele e "a maquina" que vai abrir as paginas.
- **Analogia**: o browser e como o aplicativo do Chrome aberto.

### 2) context
E um "perfil" dentro do navegador. Cada context tem cookies, cache e sessoes separados.
- **Analogia**: e como uma janela anonima separada. Voce pode ter varios contexts sem um interferir no outro.
- **Uso comum**: criar um context por cenario para isolar logins e dados.

### 3) page
E uma aba dentro do context. E nela que voce faz `goto`, `click`, `fill`, etc.
- **Analogia**: a page e a aba do navegador onde o site esta aberto.

## Fluxo simples no projeto
1) No `Before`, o Playwright abre um `browser`, cria um `context` e abre uma `page`.
2) Os steps usam `this.page` para navegar e interagir com o site.
3) No `After`, tudo e fechado para nao deixar nada aberto.

Isso deixa o teste organizado e previsivel.
