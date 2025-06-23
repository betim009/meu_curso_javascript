# Gabarito – Funções em JavaScript

Este arquivo apresenta as soluções comentadas para os exercícios e desafios do material de funções.

---

## 1. Crie uma função tradicional que receba dois números e retorne a soma.

```js
function somar(a, b) {
    return a + b;
}

// Teste
console.log(somar(2, 3)); // 5
```

---

## 2. Reescreva a função acima como arrow function.

```js
const somar = (a, b) => a + b;

// Teste
console.log(somar(2, 3)); // 5
```

---

## 3. Crie uma função que verifique se um e-mail é válido (contém "@").

### Função tradicional
```js
function verificarEmail(email) {
    return email.includes("@");
}

console.log(verificarEmail("teste@email.com")); // true
console.log(verificarEmail("testeemail.com")); // false
```

### Arrow function
```js
const verificarEmail = email => email.includes("@");

console.log(verificarEmail("teste@email.com")); // true
console.log(verificarEmail("testeemail.com")); // false
```

---

## 4. Use o operador ternário para imprimir "par" ou "ímpar" para um número.

```js
const numero = 7;
console.log(numero % 2 === 0 ? "par" : "ímpar"); // "ímpar"

// Em uma função:
const parOuImpar = n => n % 2 === 0 ? "par" : "ímpar";
console.log(parOuImpar(10)); // "par"
console.log(parOuImpar(3));  // "ímpar"
```

---

## Dicas
- Sempre teste suas funções com diferentes valores.
- Use arrow functions para simplificar funções pequenas.
- O operador ternário é útil para condições simples, mas evite aninhar muitos ternários para não perder legibilidade. 