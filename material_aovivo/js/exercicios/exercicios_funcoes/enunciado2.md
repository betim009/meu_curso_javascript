# Funções em JavaScript

## 1. Introdução
Funções são blocos de código reutilizáveis que ajudam a organizar, evitar repetição e tornar o código mais limpo.

---

## 2. Funções Tradicionais (Pré-ECMAScript 6)

### O que é uma função tradicional?
```js
function somar(numero1, numero2) {
    return numero1 + numero2;
}

// Para usar:
let resultado = somar(5, 3);
console.log(resultado);  // Mostra: 8

let resultado2 = somar(10, 10)
console.log(resultado2)
```
- Funções tradicionais usam a palavra-chave `function`.
- Podem ser chamadas antes de serem declaradas (hoisting).

#### Exemplo: Verificar e-mail
```js
function verificarEmail(stringEmail) {
    if (stringEmail.includes("@")) {
        return true
    } else {
        return false
    }
}

console.log(verificarEmail("pauloemail.com"))       // false
console.log(verificarEmail("paulo@email.com"))      // true
```

---

## 3. ECMAScript 6+ (ES6+): Arrow Functions

### O que é uma Arrow Function?
Arrow Functions são uma forma mais curta e moderna de escrever funções anônimas.

#### Sintaxe Tradicional x Arrow Function
```js
// Tradicional
function saudacao(nome) {
    return "Olá, " + nome;
}

// Arrow Function
const saudacao = (nome) => {
    return "Olá, " + nome;
}

// Versão ainda mais curta
const saudacao = nome => "Olá, " + nome;
```

#### Exemplo: Verificar e-mail com Arrow Function
```js
const veriEmail = (stringEmail) => {
    if (stringEmail.includes("@")) {
        return true
    } else {
        return false
    }
}

console.log(veriEmail("alberto@email.com"))         // true
```

#### Arrow Function com retorno simplificado
```js
const veriEmail = (stringEmail) => stringEmail.includes("@");
```

#### Diferenças principais
- Sintaxe mais concisa
- Não tem hoisting
- O `this` funciona diferente

---

## 4. Operador Ternário (ES6+)

O operador ternário é uma forma curta de fazer condições:
```js
condição ? valor_se_verdadeiro : valor_se_falso
```

#### Exemplo:
```js
4 > 2 ? console.log("maior") : console.log("menor") // Resultado: "maior"
```

#### Exemplo com array e arrow function:
```js
const vendas = [
    { id: 1, data: "22/04", valor: 350 },
    { id: 2, data: "22/04", valor: 150 },
    { id: 3, data: "22/04", valor: 3320 }
];

vendas.forEach(e => e.id === 3 ? console.log(e) : null);
```

---

## 5. Exercícios e Desafios

- Crie uma função tradicional que receba dois números e retorne a soma.
- Reescreva a função acima como arrow function.
- Crie uma função que verifique se um e-mail é válido (contém "@").
- Use o operador ternário para imprimir "par" ou "ímpar" para um número.

---

## 6. Dicas e Resumo
- Use funções para evitar repetição de código.
- Prefira arrow functions para funções curtas e callbacks.
- Use funções tradicionais quando precisar de hoisting ou do contexto dinâmico de `this`.
- O operador ternário deixa o código mais conciso, mas não exagere para não perder legibilidade.

---

## 7. Referências
- Conteúdo unificado de: funcao.js, funcoes_1.md, intro-arrow.md
- Exemplos e exercícios organizados por nível de dificuldade e padrão ECMAScript 