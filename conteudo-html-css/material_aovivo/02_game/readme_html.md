
# Super Trunfo - Introdução ao HTML

Este documento tem o objetivo de explicar o que está sendo feito no projeto HTML do jogo **Super Trunfo**, com foco em quem está começando agora no desenvolvimento web.

---

## 📌 Estrutura básica de um documento HTML

Todo documento HTML começa com a **declaração do tipo de documento**:

```html
<!DOCTYPE html>
```
Essa linha informa ao navegador que estamos usando HTML5.

Depois disso, temos a estrutura principal do HTML:

```html
<html lang="en">
<head> ... </head>
<body> ... </body>
</html>
```

- `<html>`: é a **raiz** do documento.
- `lang="en"`: indica que o idioma do site é inglês.
- `<head>`: parte invisível com configurações, título e links.
- `<body>`: parte visível com os elementos da página.

---

## 🧠 O que tem dentro do `<head>`?

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SuperTrunfo</title>
<link rel="stylesheet" href="cartas.css">
```
Essas linhas fazem o seguinte:

- `<meta charset="UTF-8">`: permite acentos e caracteres especiais.
- `<meta name="viewport"...>`: ajuda a página funcionar bem no celular.
- `<title>`: define o nome que aparece na aba do navegador.
- `<link rel="stylesheet"...>`: conecta um arquivo de CSS externo.

E também tem os links para importar fontes do Google Fonts:

```html
<link rel="preconnect"...>
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

---

## 🖼️ Conteúdo da página: `<body>`

### 🔹 Cabeçalho (`<header>`)

```html
<header>
  <h1 class="titulo">Super Trunfo!</h1>
  <div>
    <button>Cartas</button>
    <button>Jogar</button>
    <button>Contato</button>
  </div>
</header>
```
- A tag `<header>` indica o topo da página.
- `<h1>` é um título principal.
- Os `<button>` são botões de navegação.

### 🔹 Cartas (`<main>`)

O `<main>` é o conteúdo principal da página.

```html
<div class="cartas">
  <div class="cartaint">
    <img class="carta1" src="praiaex.png" alt="">
    <h3 class="textocarta">Visitantes diários:</h3>
    <p class="dados">1000</p>
    ...
  </div>
</div>
```

Aqui temos várias **cartas**, cada uma com:

- Uma imagem (`<img>`)
- Títulos (`<h3>`) e textos (`<p>`) com informações

Todos os dados são fictícios, para simular um jogo de cartas comparativas.

### 🔹 Rodapé (`<footer>`)

```html
<footer>
  <div class="informacoes">
    <h2 class="nome">Divino</h2>
    <h4 class="ano">2025</h4>
    <div class="botaofooter">
      <a class="botao2" href="#">Linkedin</a>
      ...
    </div>
  </div>
</footer>
```

- A `<footer>` é o rodapé com informações como nome e ano.
- Os links (`<a>`) direcionam para redes sociais (neste caso, ainda são apenas `#` de exemplo).

### 🔹 Script no final

```html
<script type="module" src="index.js"></script>
```

Este comando carrega o JavaScript externo. A palavra `module` permite usar **importações** dentro do arquivo JS.

---

## 💡 Dicas para iniciantes

- Sempre comece seu HTML com `<!DOCTYPE html>`.
- Use o `<head>` para carregar fontes e estilos.
- Coloque o conteúdo visível no `<body>`.
- Use classes para aplicar estilos com CSS.
- Para adicionar funcionalidade (ex: jogo), use JavaScript no final da página.

---

## 🧾 Conclusão

Esse código é uma ótima base para praticar HTML com foco visual e interativo. Cada parte da estrutura foi pensada para simular cartas de um jogo. Conforme você for aprendendo CSS e JavaScript, poderá deixar isso ainda mais bonito e funcional!
