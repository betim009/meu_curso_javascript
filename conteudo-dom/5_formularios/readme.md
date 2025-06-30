
# 📝 Trabalhando com Formulários no JavaScript DOM

Formulários são elementos HTML usados para **coletar dados do usuário**.  
Com JavaScript, podemos **acessar, validar, limpar e manipular** esses dados.

---

## 📌 Estrutura Básica de um Formulário

```html
<form id="meuFormulario">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Enviar</button>
</form>
```

---

## 📥 Capturando o Envio do Formulário

Usamos o evento `submit` para interceptar o envio e manipular os dados:

```javascript
const form = document.getElementById("meuFormulario");

form.addEventListener("submit", function(evento) {
  evento.preventDefault(); // Impede o envio padrão

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  console.log("Nome:", nome);
  console.log("Email:", email);
});
```

### 🔐 `event.preventDefault()`
Evita que o formulário seja enviado e a página recarregada.  
Usamos para fazer a validação com JavaScript antes de enviar.

---

## ✅ Validação de Campos

Podemos validar os dados com `if`:

```javascript
if (nome === "" || email === "") {
  alert("Preencha todos os campos!");
  return;
}
```

Podemos também exibir mensagens no HTML:

```javascript
document.getElementById("mensagem").textContent = "Enviado com sucesso!";
```

---

## ♻️ Limpando o Formulário

Depois do envio, podemos limpar os campos com:

```javascript
form.reset();
```

---

## 🧪 Exemplo Completo

```html
<form id="formContato">
  <label>Nome:</label>
  <input type="text" id="nome" name="nome">

  <label>Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Enviar</button>
</form>

<p id="mensagem"></p>

<script>
  const form = document.getElementById("formContato");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
      document.getElementById("mensagem").textContent = "Por favor, preencha todos os campos.";
      return;
    }

    document.getElementById("mensagem").textContent = "Mensagem enviada com sucesso!";

    form.reset();
  });
</script>
```

---

## ⚠️ Dicas e Boas Práticas

- Sempre use `preventDefault()` ao trabalhar com `submit`
- Use `form.reset()` para limpar os campos após o envio
- Adicione mensagens de erro/sucesso visuais para o usuário
- Nunca confie só na validação do HTML — valide também com JS
- Para capturar múltiplos campos, use `form.elements["nomeCampo"].value`

---

## 🚀 Desafio Prático

Crie um formulário com os campos:

- Nome
- Email
- Telefone

Faça a validação para que todos os campos estejam preenchidos.  
Mostre a mensagem "Cadastro realizado com sucesso!" e limpe o formulário.

