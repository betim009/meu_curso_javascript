# Exercícios — Strings

---

## Exercício 1 — Propriedade length

Dado o nome `"JavaScript"`, exiba no console:
- O número de caracteres
- O primeiro caractere
- O último caractere (sem fixar o índice manualmente)

---

## Exercício 2 — Maiúsculas e minúsculas

Dada a string `"  Olá, Mundo!  "`, exiba:
1. A string sem os espaços das bordas
2. Em letras maiúsculas (sem espaços)
3. Em letras minúsculas (sem espaços)

---

## Exercício 3 — Verificação de conteúdo

Dado o email `"usuario@example.com"`, verifique usando métodos de string:
1. Se o email contém o símbolo `@`
2. Se o email termina com `.com`
3. Se começa com `"usuario"`

Imprima `true` ou `false` para cada verificação.

---

## Exercício 4 — Extraindo partes

Dada a data no formato `"2025-12-31"`, extraia e exiba separadamente:
- O ano
- O mês
- O dia

**Dica:** Use `split("-")` ou `slice()`.

---

## Exercício 5 — Substituindo texto

Dada a string `"Eu uso Python. Python é minha linguagem favorita."`:
1. Substitua apenas a primeira ocorrência de "Python" por "JavaScript"
2. Substitua todas as ocorrências de "Python" por "JavaScript"

---

## Exercício 6 — Formatando números

Crie uma função `formatarPedido(numero)` que receba um número e retorne no formato de 4 dígitos com zeros à esquerda.

Exemplos:
```javascript
formatarPedido(7)    // "0007"
formatarPedido(42)   // "0042"
formatarPedido(1234) // "1234"
```

---

## Exercício 7 — Contando palavras

Crie uma função `contarPalavras(frase)` que receba uma frase e retorne o número de palavras.

```javascript
contarPalavras("Aprender JavaScript é incrível"); // 4
contarPalavras("Olá");                            // 1
```

---

## Exercício 8 — Desafio: validação de email

Crie uma função `validarEmail(email)` que retorne `true` se o email for válido e `false` caso contrário.

Regras simples de validação:
- Deve conter `@`
- Deve ter algo antes do `@`
- Deve ter pelo menos um `.` depois do `@`

```javascript
validarEmail("usuario@email.com")  // true
validarEmail("semArroba.com")      // false
validarEmail("@semantes.com")      // false
validarEmail("user@semPonto")      // false
```

---

## Gabarito

### Exercício 1

```javascript
const nome = "JavaScript";

console.log(nome.length);          // 10
console.log(nome[0]);              // "J"
console.log(nome[nome.length - 1]); // "t"
```

---

### Exercício 2

```javascript
const texto = "  Olá, Mundo!  ";
const limpo = texto.trim();

console.log(limpo);                  // "Olá, Mundo!"
console.log(limpo.toUpperCase());    // "OLÁ, MUNDO!"
console.log(limpo.toLowerCase());    // "olá, mundo!"
```

---

### Exercício 3

```javascript
const email = "usuario@example.com";

console.log(email.includes("@"));        // true
console.log(email.endsWith(".com"));     // true
console.log(email.startsWith("usuario")); // true
```

---

### Exercício 4

```javascript
const data = "2025-12-31";
const partes = data.split("-");

console.log("Ano:", partes[0]);  // 2025
console.log("Mês:", partes[1]);  // 12
console.log("Dia:", partes[2]);  // 31

// Alternativa com slice:
console.log(data.slice(0, 4));  // "2025"
console.log(data.slice(5, 7));  // "12"
console.log(data.slice(8));     // "31"
```

---

### Exercício 5

```javascript
const frase = "Eu uso Python. Python é minha linguagem favorita.";

console.log(frase.replace("Python", "JavaScript"));
// "Eu uso JavaScript. Python é minha linguagem favorita."

console.log(frase.replaceAll("Python", "JavaScript"));
// "Eu uso JavaScript. JavaScript é minha linguagem favorita."
```

---

### Exercício 6

```javascript
function formatarPedido(numero) {
  return String(numero).padStart(4, "0");
}

console.log(formatarPedido(7));    // "0007"
console.log(formatarPedido(42));   // "0042"
console.log(formatarPedido(1234)); // "1234"
```

---

### Exercício 7

```javascript
function contarPalavras(frase) {
  return frase.trim().split(" ").length;
}

console.log(contarPalavras("Aprender JavaScript é incrível")); // 4
console.log(contarPalavras("Olá"));                            // 1
```

---

### Exercício 8 — Desafio: validação de email

```javascript
function validarEmail(email) {
  const posArroba = email.indexOf("@");

  if (posArroba <= 0) return false;

  const dominio = email.slice(posArroba + 1);

  if (!dominio.includes(".")) return false;

  return true;
}

console.log(validarEmail("usuario@email.com")); // true
console.log(validarEmail("semArroba.com"));     // false
console.log(validarEmail("@semantes.com"));     // false
console.log(validarEmail("user@semPonto"));     // false
```

> Esta é uma validação simples. Em produção, o ideal é usar expressões regulares (regex) ou uma biblioteca de validação.
