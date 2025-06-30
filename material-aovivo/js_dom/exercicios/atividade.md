# 🧩 Desafio: Contador Regressivo com JavaScript

## 🎯 Objetivo
Criar uma página que começa com o número **20** e **diminui 1** a cada clique em um botão.

---

## ✅ Regras
- Mostrar um título na tela usando JavaScript.
- Mostrar um número começando em 20.
- Criar um botão com o texto `-`.
- Quando o botão for clicado, o número deve diminuir 1.
- O novo valor deve aparecer automaticamente.

---

## 🧠 Código completo com gabarito

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador Regressivo</title>
</head>
<body>
    <p id="titulo"></p>
    <button id="diminuir">-</button>
    <p id="resultado"></p>

    <script>
        // Seletores
        const textoTitulo = document.getElementById("titulo")
        textoTitulo.textContent = "Contador Regressivo"

        const botaoDiminuir = document.getElementById("diminuir")
        const textoResultado = document.getElementById("resultado")

        let numero = 20
        textoResultado.textContent = numero

        botaoDiminuir.addEventListener("click", function() {
            if (numero > 0) {
                numero -= 1
                textoResultado.textContent = numero
            }
        })
    </script>
</body>
</html>
```

---

## 📌 Explicações importantes

- Usamos `getElementById` para pegar os elementos HTML.
- Usamos `textContent` para **alterar o texto** que aparece na tela.
- A variável `numero` começa com **20**.
- O botão com id `"diminuir"` tem um evento `click` que **subtrai 1**.
- Usamos um `if (numero > 0)` para **evitar que o número fique negativo**.

---

## 📝 O que aprendemos

✅ Como alterar textos com `textContent`  
✅ Como diminuir valores com `numero -= 1`  
✅ Como impedir valores abaixo de zero  
✅ Como usar eventos de clique com `addEventListener`

---

