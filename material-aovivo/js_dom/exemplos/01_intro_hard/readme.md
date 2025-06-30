
# 🧠 Projeto Didático: Manipulação de Formulário + DOM com JavaScript

## 📋 Objetivo
Criar um pequeno formulário que recebe nome, e-mail e senha, valida os dados ao clicar no botão e imprime uma lista de nomes na tela. Tudo isso utilizando JavaScript puro (Vanilla JS).

---

## 📁 Estrutura dos arquivos

```
projeto/
├── index.html
├── script.js
└── mock.js
```

---

## 🔌 mock.js

```javascript
// Lista de nomes que serão usados para simular um banco de dados
export const mock = [
    "André",
    "Maria",
    "Carlos"
];
```

---

## 🧾 index.html

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>JS DOM</title>
</head>
<body>

    <!-- Entradas de dados -->
    <input type="text" id="name" placeholder="name">
    <input type="email" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">

    <!-- Botão para enviar os dados -->
    <button id="btn">enviar</button>

    <!-- Área onde os nomes serão exibidos -->
    <div id="container"></div>

    <!-- Importação do JavaScript -->
    <script type="module" src="script.js"></script>
</body>
</html>
```

---

## 💡 script.js — Explicação Linha por Linha

```javascript
// Importamos os dados simulados (mock) de outro arquivo
import { mock } from "./mock.js";
```

### 🎯 Seletores — Captura dos elementos HTML

```javascript
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnEnviar = document.getElementById('btn');
const divContainer = document.getElementById('container');
```

Essas variáveis armazenam as referências dos elementos da página que vamos manipular.

---

### 🧠 Dados do usuário (objeto inicial)

```javascript
let dados = {
    name: "",
    email: "",
    password: ""
}
```

Criamos um objeto `dados` que será atualizado conforme o usuário digita.

---

### 📦 Função: handleCreateMock

```javascript
const handleCreateMock = () => {
    mock.forEach(element => {
        divContainer.innerHTML += `<h4>${element}</h4>`;
    });
};
```

Essa função percorre a lista `mock` e adiciona cada nome dentro da `<div id="container">`.

---

### 🎧 Eventos — Interatividade com a página

#### 🖊 Captura do nome enquanto o usuário digita

```javascript
inputName.addEventListener('input', ({ target }) => {
    const { value } = target;
    dados.name = value;
});
```

Esse evento `input` é disparado toda vez que o valor do campo muda. Atualizamos o objeto `dados`.

---

#### 🖱 Clique no botão "enviar"

```javascript
btnEnviar.addEventListener('click', () => {
    const data = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    // Validação básica
    if (!data.name) {
        return alert('Nome inválido');
    }

    if (data.email.length < 8) {
        return alert('Email inválido');
    }

    if (data.password.length < 5) {
        return alert('Senha inválida');
    }

    // Se tudo estiver certo, os dados estão prontos para serem usados
});
```

A validação:
- Nome não pode estar vazio
- Email deve ter pelo menos 8 caracteres
- Senha deve ter pelo menos 5 caracteres

---

#### 🌍 Quando a página carregar

```javascript
window.addEventListener('load', () => {
    mock.forEach((element) => {
        divContainer.innerHTML += `<h2>${element}</h2>`;
    });
});
```

Assim que o site abre, ele exibe os nomes do mock automaticamente.

---

## 🧪 Dicas para praticar

1. Tente alterar o `mock.js` para conter objetos com `nome`, `email`, `idade`.
2. Faça o botão salvar esses dados em um array local e exibir tudo no `container`.
3. Adicione um botão para limpar os campos.

---

## 📌 Conclusão

Esse mini projeto é ideal para aprender:

✅ Como capturar dados de inputs  
✅ Como manipular o DOM (inserir elementos na tela)  
✅ Como organizar funções e eventos  
✅ Como validar dados de formulário
