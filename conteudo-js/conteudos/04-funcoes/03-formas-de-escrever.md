# Formas de Escrever Funções em JavaScript

## 1. Função Tradicional
A forma mais clássica de declarar funções.
```js
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
console.log(saudacao("Lucas")); // Olá, Lucas!
```

## 2. Função Anônima (em variável)
Função sem nome, atribuída a uma variável.
```js
const saudacao = function(nome) {
  return `Olá, ${nome}!`;
};
console.log(saudacao("Maria")); // Olá, Maria!
```

## 3. Arrow Function (função flecha)
Sintaxe moderna, mais curta e sem seu próprio `this`.
```js
const saudacao = (nome) => `Olá, ${nome}!`;
console.log(saudacao("João")); // Olá, João!
```

### Diferenças principais
- Arrow functions não têm seu próprio `this` (importante em objetos e classes)
- Funções tradicionais podem ser "hoisted" (usadas antes da declaração)
- Arrow functions são ótimas para funções rápidas e callbacks

---

## Exercícios
1. Reescreva a função abaixo como função anônima e arrow function:
```js
function quadrado(x) {
  return x * x;
}
```
2. Explique quando você usaria cada forma.
