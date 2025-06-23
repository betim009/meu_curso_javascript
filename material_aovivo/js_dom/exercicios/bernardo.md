# Resumo e Explicações de HTML e CSS - Conteúdo Aprendido

Este é um resumo explicativo com linguagem simples, feito para ajudar você a entender melhor o que já aprendeu sobre HTML, CSS e um pouquinho de JavaScript. Vamos usar exemplos diretos do código para explicar tudo!

---

## HTML - Montando a estrutura da página

### O que é HTML?
HTML é a linguagem que usamos para criar o "esqueleto" de um site. Com ele, colocamos textos, botões, imagens, e dividimos tudo em partes.

### 1. Tipo de Documento
```html
<!DOCTYPE html>
```
Isso diz ao navegador que estamos usando a versão mais nova do HTML, o HTML5.

### 2. Começando o código
```html
<html lang="en">
```
Isso inicia o código HTML e informa que o idioma da página é inglês (`en` = English).

### 3. Cabeçalho do site
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade</title>
```
O `<head>` guarda informações sobre o site:
- `<meta charset="UTF-8">`: Permite usar acentos e caracteres especiais.
- `<meta name="viewport" ...>`: Ajuda o site a se ajustar bem no celular.
- `<title>`: Mostra o nome na aba do navegador.

### 4. Estilo dentro do HTML
```html
<style>
    /* aqui vai o CSS */
</style>
```
Temos usado o CSS direto dentro do HTML, dentro da tag `<style>`. Depois você vai aprender a separar isso num arquivo próprio.

### 5. O corpo da página
```html
<body>
```
Tudo que aparece na tela fica dentro do `<body>`.

### 6. Divisões com `<div>`
```html
<div id="painel">
```
Usamos `<div>` para separar blocos de conteúdo. Esse `id="painel"` serve para identificar essa parte específica.

### 7. Botões na tela
```html
<button id="btn-entrar" onclick="handleEntrar()">Entrar</button>
```
Aqui temos:
- `<button>`: Cria um botão.
- `id="btn-entrar"`: Nomeia esse botão (podemos usar esse nome no JavaScript).
- `onclick="handleEntrar()"`: Faz algo acontecer quando clicamos no botão.

### 8. Espaço para mostrar resultados
```html
<div id="painel-resultado"></div>
```
Esse div está vazio, mas vamos usar JavaScript para colocar coisas dentro dele.

---

## CSS - Deixando bonito

CSS é a parte que usamos para escolher cores, tamanhos, espaços e posição dos elementos.

### Exemplo:
```css
body {
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

Explicando:
- `background-color`: muda a cor de fundo da página.
- `display: flex`: ajuda a alinhar os itens.
- `align-items` e `justify-content`: centralizam os elementos na tela.

Outro exemplo:
```css
button {
    width: 120px;
    background-color: darkgray;
    border: none;
    height: 30px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
}
```
Aqui personalizamos todos os botões:
- `width` e `height`: largura e altura.
- `border-radius`: deixa as pontas arredondadas.
- `font-weight: 600`: deixa o texto mais grosso.
- `cursor: pointer`: muda o cursor pra mãozinha quando passa por cima.

---

## JavaScript - Fazendo a página reagir

JavaScript é a linguagem usada para dar vida às páginas, ou seja, fazer com que algo aconteça quando clicamos em algo.

### Pegar um elemento da tela
```js
let btnEntrar = document.getElementById('btn-entrar');
let painelResultado = document.getElementById('painel-resultado');
```
Essas linhas estão pegando elementos pelo `id` deles, pra gente poder usar depois.

### Criar uma função que mostra conteúdo
```js
function handleEntrar() {
    let elementos = `
        <h2>Bem vindo na pagina de entrar</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />
        <button>Entrar</button>
    `

    painelResultado.innerHTML = elementos;
}
```
O que está acontecendo aqui?
- Criamos uma função chamada `handleEntrar()`.
- Dentro dela, criamos uma "mini página" com HTML.
- Usamos `innerHTML` para colocar esse código dentro do `painelResultado`.

---

## Conclusão

Você já aprendeu a:
- Montar a estrutura básica de uma página com HTML.
- Usar CSS pra deixar tudo com visual mais bonito.
- Usar um pouco de JavaScript para interação.

Continue praticando! Mexer, errar e testar é a melhor forma de aprender a programar.
:)

