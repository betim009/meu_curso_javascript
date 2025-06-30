
# Introdução ao JavaScript: Tipos, Variáveis e Operadores

Este material serve como base introdutória para quem está começando a aprender JavaScript. A seguir, abordamos tipos de dados, declaração de variáveis, operadores aritméticos e lógicos, bem como estruturas condicionais.

---

## 🧠 Tipos de Dados

| Tipo        | Descrição                                               |
|-------------|----------------------------------------------------------|
| `number`    | Valores numéricos                                        |
| `string`    | Texto entre aspas (`"texto"` ou `'texto'`)              |
| `boolean`   | Verdadeiro ou falso (`true` ou `false`)                 |
| `function`  | Bloco de código que executa uma tarefa                  |
| `object`    | Coleções de propriedades representando uma entidade     |
| `undefined` | Valor indefinido (variável declarada sem valor)         |
| `null`      | Valor intencionalmente inexistente                      |

---

## ✍️ Convenções

- Em JavaScript, usamos **camelCase** para nomear variáveis e funções. Exemplo:
  ```js
  let nomeCompleto = "Alberto Couto";
  ```

---

## 📦 Variáveis

### Tipos de declaração

```js
var nome = 'alberto';      // Escopo global
let nomeDois = 'Alberto';  // Escopo de bloco
const nomeTres = 'alBerto' // Valor constante (não pode ser alterado)
```

### Exemplo de declaração e exibição
```js
const admin = "admin@email.com";
let usuario = "alberto@email.com";

console.log(admin);
console.log(usuario);
```

---

## 📊 Tipos com typeof

```js
const nomeCompleto = 'Alberto F. Couto';
const idade = 28;
const flameguista = true;

console.log(typeof nomeCompleto); // string
console.log(typeof idade);        // number
console.log(typeof flameguista);  // boolean
console.log(typeof vascaino);     // undefined
```

---

## 🧪 Exercício 1

Crie as variáveis abaixo com os seguintes dados:

```js
const myName = "Seu Nome";
const birthCity = "Sua Cidade";
const birthYear = 1995;

console.log(myName, birthCity, birthYear);
```

---

## ➕ Operações Aritméticas

```js
console.log(10 + 22); // Adição
console.log(20 - 10); // Subtração
console.log(4 * 2);   // Multiplicação
console.log(4 / 2);   // Divisão
```

### Incremento e Decremento

```js
let number = 20;
number += 1; // Incrementa 1
number -= 1; // Decrementa 1
console.log(number);
```

### 🧪 Exercício 2

```js
const base = 5;
const height = 8;

const area = base * height;
const perimeter = 5 + 5 + 8 + 8;

console.log(area, perimeter);
```

---

## 🔍 Operadores de Comparação

```js
const a = 10;
const b = 20;

console.log(a == b);   // false
console.log(a === 10); // true
console.log(a > b);    // false
console.log(a < b);    // true
```

---

## 🧠 Estrutura Condicional

```js
const idade = 90;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

### Exemplo com votação

```js
const idadeAlberto = 27;
const podeVotar = idadeAlberto >= 16 ? "Pode Votar!" : "Não Pode";
console.log(podeVotar);
```

---

## 🔁 Operador Ternário

```js
const idadePessoa = 15;
const youCanVote = idadePessoa >= 16 ? "Pode Votar!" : "Não Pode";
console.log(youCanVote);
```

---

## 🧪 Exercício 3

```js
const grade = 65;

if (grade >= 80) {
  console.log("Parabéns, você foi aprovado!");
} else if (grade >= 60) {
  console.log("Você está na lista de espera.");
} else {
  console.log("Infelizmente, você reprovou.");
}
```

---

## ⚙️ Operadores Lógicos

```js
const comida = "pão";
const bebida = "leite";

if (comida === "pão" && bebida === "café") {
  console.log("Obrigado!");
} else {
  console.log("Erraram meu pedido.");
}
```

### Falsy e Truthy

```js
console.log(!0);          // true
console.log(!42);         // false
console.log(!null);       // true
console.log(!undefined);  // true
```

---

## 🧪 Exercício 4: Mensagem por hora do dia

```js
const currentHour = 15;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11) {
  message = "Hora do almoço!!!";
} else if (currentHour >= 4) {
  message = "Hmmm, cheiro de café recém-passado";
} else {
  message = "zzzzzz.";
}

console.log(message);
```

---

📘 *Fique à vontade para testar e modificar os exemplos!* 🚀
