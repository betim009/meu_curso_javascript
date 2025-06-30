
# 📚 Eventos no DOM com JavaScript Vanilla

## ✨ O que são Eventos no DOM?

Eventos são ações que ocorrem no navegador — como um clique, um carregamento
de página, ou uma digitação. Em JavaScript, podemos **"ouvir" esses eventos**
e executar algum código quando eles acontecem.

Exemplo: quando o usuário clica em um botão, podemos mostrar uma mensagem.

---

## 📌 Como ouvir eventos?

Usamos o método `addEventListener`:

```javascript
elemento.addEventListener("evento", funcao);
```

---

## 🖱️ Evento `click`

### ✅ Quando usar?
Quando queremos executar algo ao clicar em um botão, imagem, link etc.

### 💡 Exemplo:

```html
<button id="meuBotao">Clique aqui</button>
<p id="mensagem"></p>

<script>
  const botao = document.getElementById("meuBotao");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", () => {
    mensagem.textContent = "Você clicou no botão!";
  });
</script>
```

---

## 🎯 Evento `input`

### ✅ Quando usar?
Sempre que o conteúdo de um campo de texto mudar (a cada tecla digitada).

### 💡 Exemplo:

```html
<input type="text" id="nome">
<p>Você digitou: <span id="saida"></span></p>

<script>
  const nome = document.getElementById("nome");
  const saida = document.getElementById("saida");

  nome.addEventListener("input", () => {
    saida.textContent = nome.value;
  });
</script>
```

---

## 🔄 Evento `change`

### ✅ Quando usar?
Quando o valor de um campo for alterado **e o usuário sair do campo**.

### 💡 Exemplo:

```html
<select id="cor">
  <option value="vermelho">Vermelho</option>
  <option value="azul">Azul</option>
  <option value="verde">Verde</option>
</select>

<p id="escolha"></p>

<script>
  const select = document.getElementById("cor");
  const escolha = document.getElementById("escolha");

  select.addEventListener("change", () => {
    escolha.textContent = `Cor escolhida: ${select.value}`;
  });
</script>
```

---

## 🌐 Evento `load`

### ✅ Quando usar?
Quando queremos fazer algo **assim que a página for carregada**.

### 💡 Exemplo:

```html
<body>
  <h1>Página carregando...</h1>

  <script>
    window.addEventListener("load", () => {
      alert("A página foi carregada!");
    });
  </script>
</body>
```

---

## ⚠️ Dicas e Cuidados

- O `click` acontece com qualquer botão, imagem ou elemento clicável.
- O `input` é mais imediato que o `change` (detecta cada letra digitada).
- O `change` só acontece quando o campo perde o foco.
- O `load` deve ser usado com `window` ou `document`.

---

## 🧪 Exercício Proposto

Crie uma página com:

1. Um campo de texto que exibe o que está sendo digitado (`input`)
2. Um campo select que mostra a cor escolhida (`change`)
3. Um botão que mostra um alerta (`click`)
4. Uma mensagem automática ao carregar a página (`load`)

---

## ✅ Gabarito do Exercício

```html
<!DOCTYPE html>
<html>
<head>
  <title>Eventos no DOM</title>
</head>
<body>
  <h1>Eventos em JavaScript</h1>

  <input type="text" id="campoTexto" placeholder="Digite algo...">
  <p>Texto: <span id="textoDigitado"></span></p>

  <select id="seletorCor">
    <option value="azul">Azul</option>
    <option value="vermelho">Vermelho</option>
    <option value="amarelo">Amarelo</option>
  </select>
  <p id="corSelecionada"></p>

  <button id="botaoAlerta">Clique aqui</button>

  <script>
    window.addEventListener("load", () => {
      alert("Bem-vindo à página!");
    });

    document.getElementById("campoTexto").addEventListener("input", (e) => {
      document.getElementById("textoDigitado").textContent = e.target.value;
    });

    document.getElementById("seletorCor").addEventListener("change", (e) => {
      document.getElementById("corSelecionada").textContent = "Cor: " + e.target.value;
    });

    document.getElementById("botaoAlerta").addEventListener("click", () => {
      alert("Você clicou no botão!");
    });
  </script>
</body>
</html>
```

---

Pratique bastante e tente modificar os exemplos para criar interações diferentes!
