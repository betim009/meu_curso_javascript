# Seletores DOM com JavaScript: Material Didático para Iniciantes

## 🔍 O que são seletores?

Seletores são formas de **encontrar elementos no HTML** usando JavaScript. Isso é essencial para poder **modificar, remover ou interagir com esses elementos** no seu site ou aplicação.

> 🎒 Imagine que o HTML é como uma estante cheia de livros (elementos). O JavaScript usa os seletores para pegar o livro certo e fazer algo com ele.

---

## 🌐 Estrutura HTML usada

Vamos criar um exemplo que mostra como selecionar elementos de várias formas:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seletores DOM</title>
</head>
<body>
  <h1 class="titulo">Bem-vindo!</h1>
  <h2 id="nome">Carlos Silva</h2>
  <p id="idade">26</p>

  <button id="btn">Clique aqui</button>
  <a href="#" class="link">Link 1</a>
  <a href="#" class="link">Link 2</a>

  <ul>
    <li>Item A</li>
    <li>Item B</li>
    <li class="marcado">Item C</li>
  </ul>

  <script type="module" src="main.js"></script>
</body>
</html>
```

---

## 📜 JavaScript correspondente (main.js)

```javascript
// Usando diferentes formas de selecionar elementos:

// Por ID (mais comum para um único elemento)
const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const btn = document.getElementById('btn');

// Por classe (pega todos os elementos com essa classe)
const links = document.getElementsByClassName('link');

// Por tag (pega todos os elementos com essa tag)
const listas = document.getElementsByTagName('li');

// Com querySelector (CSS) - pega o primeiro que encontrar
const titulo = document.querySelector('.titulo');

// Com querySelectorAll (pega todos os que combinarem)
const todosOsLinks = document.querySelectorAll('.link');

// Exibindo tudo no console
console.log(nome);
console.log(idade);
console.log(btn);
console.log(links); // HTMLCollection
console.log(listas); // HTMLCollection
console.log(titulo);
console.log(todosOsLinks); // NodeList
```

> 💡 Dica: Use o console do navegador para ver a diferença entre os seletores!

---

## 📘 Tabela de seletores e boas práticas

| Seletor                    | Quando Usar                                        | Retorno                     | Performance   | Exemplo                                           |
| -------------------------- | -------------------------------------------------- | --------------------------- | ------------- | ------------------------------------------------- |
| `getElementById()`         | Quando o elemento tem **id único**                 | Elemento ou `null`          | ⭐ Mais rápido | `document.getElementById('header')`               |
| `getElementsByClassName()` | Para vários elementos com a mesma **classe**       | `HTMLCollection` (dinâmico) | 🚀 Rápido     | `document.getElementsByClassName('active')`       |
| `getElementsByTagName()`   | Quando quer selecionar **todas as tags** iguais    | `HTMLCollection` (dinâmico) | ⚡ Rápido      | `document.getElementsByTagName('li')`             |
| `querySelector()`          | Quando quer o **primeiro** que casar com o seletor | Elemento ou `null`          | ⚡ Rápido      | `document.querySelector('.btn.primary')`          |
| `querySelectorAll()`       | Quando quer **todos** que casam com um seletor CSS | `NodeList` (estático)       | 💨 Moderada   | `document.querySelectorAll('input[type="text"]')` |

> ⚠️ `HTMLCollection` e `NodeList` parecem arrays, mas **não são**! Use `Array.from()` se quiser usar `.map()` ou `.forEach()` direto.

---

## 📦 Exemplos práticos

### HTML:

```html
<div id="mensagem"></div>
```

### JavaScript:

```javascript
const mensagem = document.getElementById('mensagem');
mensagem.textContent = 'Olá, usuário!';
```

### Com querySelector:

```javascript
const titulo = document.querySelector('.titulo');
titulo.style.color = 'blue';
```

### Com querySelectorAll:

```javascript
const links = document.querySelectorAll('.link');
links.forEach(link => link.style.color = 'green');
```

---

## 🎯 Conclusão

* Aprender a usar seletores é essencial para manipular HTML com JavaScript.
* Use `getElementById()` quando tiver certeza que o elemento tem um ID único.
* Use `querySelector()` ou `querySelectorAll()` para seletores mais complexos com sintaxe parecida com CSS.
* Sempre que precisar pegar **vários elementos**, pense se quer um resultado **dinâmico** (`HTMLCollection`) ou **estático** (`NodeList`).

Se quiser, posso criar exercícios com gabarito agora para fixar esse conteúdo. Deseja adicionar?
