
# Introdução ao JavaScript: Tipos, Variáveis e Operadores

Este material serve como base introdutória para quem está começando a aprender JavaScript. A seguir, abordamos tipos de dados, declaração de variáveis, operadores aritméticos e lógicos, bem como estruturas condicionais.

---

## 🧠 Tipos de Dados

| Tipo        | Descrição                                               | Exemplo                      |
|-------------|--------------------------------------------------------|------------------------------|
| `number`    | Valores numéricos                                      | `let idade = 25;`            |
| `string`    | Texto entre aspas (`"texto"` ou `'texto'`)            | `let nome = "Ana";`         |
| `boolean`   | Verdadeiro ou falso (`true` ou `false`)                | `let ativo = true;`          |
| `function`  | Bloco de código que executa uma tarefa                 | `function soma() {}`         |
| `object`    | Coleções de propriedades representando uma entidade     | `let pessoa = {nome: "João"}`|
| `undefined` | Valor indefinido (variável declarada sem valor)         | `let x;`                     |
| `null`      | Valor intencionalmente inexistente                      | `let vazio = null;`          |

### Exemplos de cada tipo:
```js
let idade = 30; // number
let nome = "Maria"; // string
let aprovado = false; // boolean
let pessoa = { nome: "Carlos", idade: 22 }; // object
let lista = [1, 2, 3]; // object (array)
let nada = null; // null
let indefinido; // undefined
function saudacao() { return "Olá!"; } // function
```

---

## ✍️ Convenções

- Em JavaScript, usamos **camelCase** para nomear variáveis e funções. Exemplo:
  ```js
  let nomeCompleto = "Alberto Couto";
  ```
- Evite usar acentos, espaços ou caracteres especiais nos nomes.
- Nomes de variáveis devem ser claros e descritivos.

---

## 💬 Comentários em JavaScript

Comentários servem para explicar o código e são ignorados na execução.
- Comentário de uma linha:
  ```js
  // Este é um comentário de uma linha
  let idade = 20; // Comentário ao lado do código
  ```
- Comentário de múltiplas linhas:
  ```js
  /*
    Este é um comentário
    de várias linhas
  */
  ```

---

## 📦 Variáveis

### Tipos de declaração

```js
var nome = 'alberto';      // Escopo global ou de função
let nomeDois = 'Alberto';  // Escopo de bloco
const nomeTres = 'alBerto' // Valor constante (não pode ser alterado)
```

### Diferença de escopo
- **var**: visível em toda a função ou globalmente, pode causar bugs inesperados.
- **let**: visível apenas no bloco onde foi declarada (entre chaves `{}`), mais seguro.
- **const**: igual ao let, mas o valor não pode ser reatribuído.

#### Exemplo de escopo:
```js
if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); // 10 (var vaza do bloco)
console.log(y); // Erro! (let não vaza do bloco)
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

O operador `typeof` retorna o tipo de uma variável.
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

Operadores aritméticos básicos:
- Soma: `+`
- Subtração: `-`
- Multiplicação: `*`
- Divisão: `/`
- Módulo (resto da divisão): `%`

```js
console.log(10 + 22); // Adição
console.log(20 - 10); // Subtração
console.log(4 * 2);   // Multiplicação
console.log(4 / 2);   // Divisão
console.log(7 % 2);   // Módulo (resto da divisão)
```

### Incremento e Decremento

```js
let number = 20;
number += 1; // Incrementa 1 (equivalente a number = number + 1)
number -= 1; // Decrementa 1 (equivalente a number = number - 1)
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

- Igualdade solta: `==` (compara valores, ignora tipo)
- Igualdade estrita: `===` (compara valor e tipo)
- Diferente: `!=` ou `!==`
- Maior: `>`
- Menor: `<`
- Maior ou igual: `>=`
- Menor ou igual: `<=`

```js
const a = 10;
const b = 20;

console.log(a == b);   // false
console.log(a === 10); // true
console.log(a > b);    // false
console.log(a < b);    // true
console.log(a != b);   // true
console.log(a !== 10); // false
```

---

## 🔗 Operadores Lógicos

- E lógico: `&&` (true se ambos forem verdadeiros)
- OU lógico: `||` (true se pelo menos um for verdadeiro)
- NÃO lógico: `!` (inverte o valor)

```js
const idade = 18;
const temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}

if (idade < 18 || !temCarteira) {
  console.log("Não pode dirigir");
}
```

---

### Falsy e Truthy

Em JavaScript, alguns valores são considerados "falsy" (falsos) mesmo não sendo o booleano `false`. Todos os outros são "truthy" (verdadeiros).

| Valor         | Falsy? |
|---------------|--------|
| `false`       | Sim    |
| `0`           | Sim    |
| `""` (string vazia) | Sim    |
| `null`        | Sim    |
| `undefined`   | Sim    |
| `NaN`         | Sim    |
| Qualquer outro| Não    |

Exemplos:
```js
console.log(!0);          // true
console.log(!42);         // false
console.log(!null);       // true
console.log(!undefined);  // true
console.log(!"");         // true
console.log(!"abc");      // false
```

---

## 💡 Dicas de Boas Práticas
- Use sempre `let` ou `const` (evite `var`)
- Prefira nomes de variáveis descritivos
- Comente seu código para facilitar o entendimento
- Teste seus códigos no console do navegador ou no Node.js

---
