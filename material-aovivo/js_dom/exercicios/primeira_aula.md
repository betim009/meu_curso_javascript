# 🧠 Introdução ao JavaScript DOM

Neste exemplo simples, vamos aprender como o **JavaScript** pode **interagir com elementos do HTML**.  
Você vai entender o que são **seletores**, como **manipular textos**, e como **responder a cliques em botões**.

---

## 📄 O que vamos construir?

Um contador que começa no número **10** e **aumenta em 1** toda vez que clicarmos no botão.

---

## 🌐 Código HTML completo com JavaScript embutido

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="titulo"></p>

    <button id="acrescentar">+</button>
    <p id="resultado"></p>

    <script>
        // Seletores -> busca do HTML para o javascript
        const textoTitulo = document.getElementById("titulo")
        textoTitulo.textContent = "Minha amiga Luisa"

        const botaoAcrescentar = document.getElementById("acrescentar")
        const textoResultado = document.getElementById("resultado")

        let numero = 10

        botaoAcrescentar.addEventListener("click", function() {
            numero += 1
            textoResultado.textContent = numero
        })
    </script>
</body>
</html>
```

---

## 🧱 Explicando linha por linha

### 🔹 HTML: Estrutura da página

```html
<p id="titulo"></p>
```
Um parágrafo **vazio**, com um **id**. Vamos preencher com JavaScript.

```html
<button id="acrescentar">+</button>
```
Um botão com o símbolo **+**. Ao clicar nele, o número vai aumentar.

```html
<p id="resultado"></p>
```
Outro parágrafo vazio. Aqui vamos mostrar o número que vai sendo contado.

---

### 🧠 JavaScript: Parte lógica

```js
const textoTitulo = document.getElementById("titulo")
textoTitulo.textContent = "Minha amiga Luisa"
```
- **Pegamos** o parágrafo com o `id="titulo"`.
- **Alteramos** o conteúdo de texto com a frase "Minha amiga Luisa".

---

```js
const botaoAcrescentar = document.getElementById("acrescentar")
const textoResultado = document.getElementById("resultado")
```
- Pegamos o botão e o parágrafo do resultado usando `getElementById`.

---

```js
let numero = 10
```
- Criamos uma variável chamada `numero` com valor inicial **10**.

---

```js
botaoAcrescentar.addEventListener("click", function() {
    numero += 1
    textoResultado.textContent = numero
})
```
- Usamos o `addEventListener` para ouvir o **clique no botão**.
- Toda vez que clicamos:
  - A variável `numero` é **acrescentada em 1**.
  - O conteúdo de texto do parágrafo de resultado é atualizado com o novo valor.

---

## 📝 O que aprendemos

✅ Como **acessar elementos** do HTML com JavaScript  
✅ Como **alterar textos** de elementos com `textContent`  
✅ Como **responder a eventos de clique** com `addEventListener`  
✅ Como **criar e atualizar variáveis**

---

## ⚠️ Dicas importantes

🔸 Sempre use `getElementById` com o **mesmo id** que está no HTML  
🔸 O JavaScript deve ficar **dentro da tag `<script>`**, de preferência **no final da página**, para garantir que o HTML já tenha sido carregado  
🔸 Comece testando com pequenos exemplos como este para ir ganhando confiança!
