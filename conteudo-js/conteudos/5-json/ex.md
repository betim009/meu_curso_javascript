
# ✏️ Exercícios de Prática — JSON em JavaScript

## 🎯 Objetivo
Praticar leitura, modificação, criação e iteração de estruturas JSON usando JavaScript.

---

## ✅ Exercício 1: Acesso a dados

Dado o seguinte JSON, acesse e imprima no console:

- O nome do usuário
- A cidade onde ele mora

```js
const json = {
  "nome": "Camila",
  "idade": 26,
  "endereco": {
    "cidade": "Vitória",
    "estado": "ES"
  }
};
```

---

## ✅ Exercício 2: Atualizando dados

Altere o valor da chave `idade` para `30` no objeto abaixo e imprima o resultado como JSON (texto).

```js
const json = {
  "nome": "Ricardo",
  "idade": 27,
  "profissao": "Designer"
};
```

---

## ✅ Exercício 3: Criando um objeto e convertendo para JSON

Crie um objeto que represente um **carro** com as seguintes propriedades:

- modelo
- marca
- ano

Depois, converta esse objeto para JSON e imprima no console.

---

## ✅ Exercício 4: Iteração com Array

Dado o seguinte JSON com dados de produtos, imprima o nome de cada produto:

```js
const json = {
  "produtos": [
    { "nome": "Camiseta", "preco": 29.90 },
    { "nome": "Tenis", "preco": 199.99 },
    { "nome": "Boné", "preco": 35.00 }
  ]
};
```

---

## ✅ Exercício 5: Adicionando itens a um array

Dado o JSON com a lista de tarefas, adicione a tarefa `"Estudar JavaScript"` e imprima o JSON atualizado.

```js
const json = {
  "tarefas": ["Lavar louça", "Arrumar a cama"]
};
```

---

## ✅ Exercício 6: Conversão de JSON para objeto

Você recebeu os seguintes dados do servidor em formato JSON (texto). Converta isso para objeto e acesse o nome:

```js
const dados = '{"nome":"Paulo", "idade":31}';
```

---

# ✅ Gabarito Comentado

### ✅ Exercício 1 — Acesso

```js
console.log(json.nome); // Camila
console.log(json.endereco.cidade); // Vitória
```

---

### ✅ Exercício 2 — Modificação

```js
json.idade = 30;
const novoJson = JSON.stringify(json);
console.log(novoJson);
```

---

### ✅ Exercício 3 — Criando JSON

```js
const carro = {
  modelo: "Civic",
  marca: "Honda",
  ano: 2020
};
const jsonCarro = JSON.stringify(carro);
console.log(jsonCarro);
```

---

### ✅ Exercício 4 — Iterando produtos

```js
for (let i = 0; i < json.produtos.length; i++) {
  console.log(json.produtos[i].nome);
}
```

---

### ✅ Exercício 5 — Adicionando item ao array

```js
json.tarefas.push("Estudar JavaScript");
const tarefasAtualizadas = JSON.stringify(json);
console.log(tarefasAtualizadas);
```

---

### ✅ Exercício 6 — JSON para Objeto

```js
const objeto = JSON.parse(dados);
console.log(objeto.nome); // Paulo
```
