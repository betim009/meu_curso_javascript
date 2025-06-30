# 🎨 Capítulo: Manipulando Estilos com JavaScript DOM

## 📖 O que são estilos no DOM?

Estilos controlam a aparência visual dos elementos da página.  
Com JavaScript, podemos **mudar cores, tamanhos, fontes, esconder ou mostrar elementos** em tempo real.

---

## 🧩 Como acessar estilos via JavaScript

Usamos a propriedade `.style` de um elemento.

```html
<p id="mensagem">Olá, mundo!</p>

<script>
  const p = document.getElementById("mensagem");
  p.style.color = "blue";        // muda a cor do texto
  p.style.backgroundColor = "yellow"; // muda o fundo
</script>
```

### Explicação:
- `style.color`: acessa o estilo `color` (cor da fonte)
- `backgroundColor`: nome composto vira camelCase (`background-color` → `backgroundColor`)

---

## 🧪 Exemplo interativo: botão que muda a cor

```html
<button id="trocar">Mudar cor</button>
<p id="texto">Este texto mudará de cor</p>

<script>
  const botao = document.getElementById("trocar");
  const texto = document.getElementById("texto");

  botao.addEventListener("click", function() {
    texto.style.color = "red";
    texto.style.fontSize = "24px";
  });
</script>
```

### Quando usar:
- Para dar feedback visual (ex: erro → texto vermelho)
- Reagir a interações (hover, clique, etc)

---

## 🧠 Dica: estilos devem ser strings

```javascript
element.style.border = "1px solid black"; // certo
element.style.marginTop = "20px";         // certo
```

### Cuidado:
```javascript
element.style.margin-top = "20px"; // errado! ❌
```

**Sempre use camelCase para nomes compostos.**

---

## 💡 Alternativa: trocar classe inteira

Você pode aplicar **classes CSS** em vez de mexer estilo por estilo.

```html
<style>
  .destacado {
    color: white;
    background-color: green;
    padding: 10px;
  }
</style>

<p id="aviso">Texto comum</p>
<button onclick="destacar()">Destacar</button>

<script>
  function destacar() {
    const aviso = document.getElementById("aviso");
    aviso.classList.add("destacado");
  }
</script>
```

### Vantagens de usar `.classList.add()`:
- Reaproveita estilos do CSS
- Código JS mais limpo
- Mais fácil de manter e atualizar

---

## 🔄 Remover ou alternar classes

```javascript
element.classList.remove("classe");
element.classList.toggle("classe");
```

- `remove`: tira a classe do elemento
- `toggle`: **adiciona se não tiver**, **remove se já tiver** (ótimo para "modo escuro", menus, etc)

---

## 🕵️‍♂️ Verificando estilos aplicados

```javascript
const cor = window.getComputedStyle(elemento).color;
console.log(cor); // mostra o valor real da cor
```

- `.style` mostra apenas o que foi definido via JS
- `getComputedStyle` mostra **o estilo final** que está sendo usado

---

## 🧼 Boas práticas com estilos

✅ Use `classList` sempre que possível (mais limpo e organizado)  
✅ Prefira CSS externo ao invés de inline via `.style`  
❌ Evite misturar JS com lógica de visual sempre que possível

---

## ✅ Conclusão

Manipular estilos com JavaScript permite criar páginas **dinâmicas e interativas**.  
Você pode reagir ao que o usuário faz e mudar a aparência da página em tempo real.

Na próxima parte, veremos como **trabalhar com formulários** usando eventos e validando os dados.