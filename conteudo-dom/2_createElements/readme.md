# JavaScript DOM: Criação e Manipulação de Elementos

## 🔄 O que significa "criar e manipular elementos"?

Criar e manipular elementos com JavaScript significa **usar o JS para gerar, alterar ou remover elementos HTML dinamicamente**. Isso permite que você mude o que o usuário vê sem precisar recarregar a página.

> 🎭 Exemplo real: quando um site exibe uma lista de produtos que vem de um banco de dados, os elementos são criados dinamicamente com JavaScript.

---

## 📄 Criando elementos com `createElement()`

### Exemplo completo:

#### HTML:

```html
<div id="conteudo"></div>
```

#### JavaScript:

```javascript
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este parágrafo foi criado via JavaScript!";

const container = document.getElementById("conteudo");
container.appendChild(novoParagrafo);
```

* `createElement("tag")`: cria um novo elemento HTML
* `textContent`: define o texto interno do elemento

---

## ✏️ Editando elementos existentes

### Exemplo completo com `textContent`:

#### HTML:

```html
<h2 id="titulo">Título Original</h2>
```

#### JavaScript:

```javascript
const titulo = document.getElementById("titulo");
titulo.textContent = "Novo Título!";
```

### Exemplo completo com `innerHTML`:

#### HTML:

```html
<h2 id="titulo">Título</h2>
```

#### JavaScript:

```javascript
titulo.innerHTML = "<strong>Título em negrito</strong>";
```

> ⚠️ Cuidado: `innerHTML` permite inserir HTML como string. Não use com dados vindos do usuário, pois pode gerar vulnerabilidades (como XSS).

---

## ❌ Removendo elementos com `remove()` ou `removeChild()`

### Exemplo completo:

#### HTML:

```html
<div id="conteudo">
  <p id="paragrafo">Texto a ser removido</p>
</div>
```

#### JavaScript:

```javascript
const paragrafo = document.getElementById("paragrafo");
paragrafo.remove();

// ou
const pai = document.getElementById("conteudo");
pai.removeChild(paragrafo);
```

---

## 📋 Criando múltiplos elementos

### Exemplo com `forEach()`

#### HTML:

```html
<!-- nenhum elemento inicial necessário -->
```

#### JavaScript:

```javascript
const nomes = ["Ana", "Bruno", "Carlos"];
const lista = document.createElement("ul");

nomes.forEach(nome => {
  const item = document.createElement("li");
  item.textContent = nome;
  lista.appendChild(item);
});

document.body.appendChild(lista);
```

### Exemplo com `map()`

#### HTML:

```html
<div id="conteudo"></div>
```

#### JavaScript:

```javascript
const frutas = ["Maçã", "Banana", "Laranja"];
const div = document.getElementById("conteudo");

const elementos = frutas.map(fruta => {
  const p = document.createElement("p");
  p.textContent = fruta;
  return p;
});

elementos.forEach(el => div.appendChild(el));
```

### Exemplo com `for...of`

#### HTML:

```html
<div id="conteudo"></div>
```

#### JavaScript:

```javascript
const cores = ["Vermelho", "Azul", "Verde"];
const secao = document.getElementById("conteudo");

for (const cor of cores) {
  const span = document.createElement("span");
  span.innerHTML = `<em>${cor}</em><br>`;
  secao.appendChild(span);
}
```

---

## 📌 Resumo dos principais métodos

| Método            | O que faz                                      |
| ----------------- | ---------------------------------------------- |
| `createElement()` | Cria um novo elemento HTML                     |
| `appendChild()`   | Adiciona um elemento como filho                |
| `append()`        | Adiciona um ou mais itens (elementos ou texto) |
| `remove()`        | Remove o próprio elemento                      |
| `removeChild()`   | Remove um filho específico                     |
| `textContent`     | Define ou lê apenas o texto do elemento        |
| `innerHTML`       | Define ou lê o conteúdo HTML interno           |

---

## 🎯 Conclusão

* Esses métodos permitem **construir conteúdo de forma dinâmica**.
* Usar loops como `forEach`, `for...of` ou até `map` ajuda a criar **vários elementos de uma vez**.
* Entender bem `innerHTML` e `textContent` é essencial para manipular o conteúdo interno.

> ✨ No próximo passo, aprenderemos a reagir às ações do usuário com **eventos**.
