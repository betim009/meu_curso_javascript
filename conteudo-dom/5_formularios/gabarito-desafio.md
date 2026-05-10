# Gabarito — Desafio de Formulário

## Enunciado

Crie um formulário com os campos:

- Nome
- Email
- Telefone

Faça a validação para que todos os campos estejam preenchidos.
Mostre a mensagem `"Cadastro realizado com sucesso!"` e limpe o formulário.

---

## Solução Completa

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário de Cadastro</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 40px auto;
      padding: 0 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    label {
      font-weight: bold;
    }

    input {
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    #mensagem {
      margin-top: 12px;
      font-weight: bold;
    }

    .erro {
      color: red;
    }

    .sucesso {
      color: green;
    }
  </style>
</head>
<body>

  <h2>Cadastro</h2>

  <form id="formCadastro">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" placeholder="Seu nome completo">

    <label for="email">Email:</label>
    <input type="email" id="email" placeholder="seu@email.com">

    <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone" placeholder="(11) 99999-9999">

    <button type="submit">Cadastrar</button>
  </form>

  <p id="mensagem"></p>

  <script>
    const form = document.getElementById("formCadastro");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();

      // Valida se todos os campos foram preenchidos
      if (nome === "" || email === "" || telefone === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.className = "erro";
        return;
      }

      // Exibe mensagem de sucesso
      mensagem.textContent = "Cadastro realizado com sucesso!";
      mensagem.className = "sucesso";

      // Limpa o formulário
      form.reset();
    });
  </script>

</body>
</html>
```

---

## Pontos importantes da solução

- **`e.preventDefault()`** — impede o recarregamento da página ao submeter o formulário
- **`.trim()`** — remove espaços em branco do início e fim, evitando cadastros com espaços
- **`form.reset()`** — limpa todos os campos do formulário de uma vez
- **Classes CSS dinâmicas** — usamos `.className` para alternar entre as classes `erro` e `sucesso`, deixando o código mais organizado
