
# 📘 Introdução ao JSON em JavaScript

## ✅ O que é JSON?

JSON é a sigla para **JavaScript Object Notation**, que significa "Notação de Objeto em JavaScript".  
É um **formato de texto leve** para representar dados estruturados — como objetos ou listas.  
Muito usado para **trocar informações entre sistemas web** de forma padronizada e fácil de entender.

---

## 🧱 Estrutura do JSON

### ✅ JSON pode ser um **Objeto**

Um objeto em JSON é representado com **chaves `{}`**. Ele contém pares de chave e valor.

```js
const json = {
    "city": "Goiânia",
    "temperature": 28,
    "humidity": 70,
    "conditions": "Ensolarado"
};
```

- Cada linha tem um par `"chave": valor`
- Os valores podem ser textos, números, booleanos, outros objetos ou arrays

---

### ✅ JSON pode ser um **Array**

Um array em JSON é representado com **colchetes `[]`**. Ele contém uma lista de itens.

```js
const jsonArray = [
    { "product": "Arroz", "brand": "Tio João", "price": 10.50 },
    { "product": "Feijão", "brand": "Camil", "price": 8.99 }
];
```

Aqui temos uma lista com dois objetos, cada um representando um produto.

---

## 🔄 Conversões entre JSON e JavaScript

### ✅ De JSON (texto) para Objeto JavaScript

```js
const json = '{"name": "Alberto", "age": 28}';
const objeto = JSON.parse(json);
console.log(objeto);
```

> O método `JSON.parse()` transforma uma **string JSON** em **objeto JavaScript**.

---

### ✅ De Objeto JavaScript para JSON (texto)

```js
const person = {
    nome: "Alberto",
    age: 28,
    city: "Iúna"
};

const personToJson = JSON.stringify(person);
console.log(personToJson);
```

> O método `JSON.stringify()` transforma um **objeto JavaScript** em uma **string JSON**.

---

## 🔎 Acessando valores no JSON

```js
const json = {
    "nome": "Ana",
    "idade": 22,
    "endereco": {
        "cidade": "São Paulo",
        "estado": "SP"
    }
};

console.log(json['endereco']['cidade']); // ou
console.log(json.endereco.cidade);
```

> Podemos acessar valores usando `objeto.chave` ou `objeto["chave"]`

---

## ✏️ Modificando valores no JSON

```js
const json = {
    "nome": "Pedro",
    "idade": 30,
    "profissao": "Engenheiro"
};

json.idade = 35;
const newJson = JSON.stringify(json);
console.log(newJson);
```

---

## 🧾 Criando um JSON com dados de livro

```js
const json = {
    titulo: 'One Piece',
    autor: 'Echiro Oda',
    anoPublicacao: 1997
};

const newJson = JSON.stringify(json);
console.log(newJson);
```

---

## 🔁 Lendo arrays dentro de JSON

```js
const json = {
    "alunos": [
        { "nome": "Alberto", "idade": 28 },
        { "nome": "Creuza", "idade": 64 },
        { "nome": "Adenil", "idade": 60 }
    ]
};

const alunos = json.alunos;

for (let index = 0; index < alunos.length; index++) {
    console.log(alunos[index]);
}
```

> Aqui usamos `for` para percorrer os itens do array e exibir os dados.

---

## ➕ Adicionando itens a um array no JSON

```js
const json = {
    "produtos": ["TV", "Notebook", "Fones"]
};

json.produtos.push("Celular");

const newJson = JSON.stringify(json);
console.log(newJson);
```

> `.push()` adiciona um item ao final do array.
