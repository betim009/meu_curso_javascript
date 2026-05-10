# Módulo 9 — Manipulação de Strings

## O que é uma String?

Uma **string** é qualquer sequência de caracteres: texto, números formatados, símbolos. Em JavaScript, strings são criadas com aspas simples, duplas ou template literals (crase).

```javascript
const nome = "Ana";
const sobrenome = 'Silva';
const saudacao = `Olá, ${nome}!`; // template literal
```

---

## Acessando caracteres

Strings funcionam como arrays: cada caractere tem um índice, começando em `0`.

```javascript
const palavra = "JavaScript";

console.log(palavra[0]);  // "J"
console.log(palavra[4]);  // "S"
console.log(palavra.length); // 10
```

---

## Métodos mais usados

### `toUpperCase()` e `toLowerCase()`

Converte para maiúsculas ou minúsculas.

```javascript
const texto = "Olá Mundo";

console.log(texto.toUpperCase()); // "OLÁ MUNDO"
console.log(texto.toLowerCase()); // "olá mundo"
```

**Quando usar:** Comparações sem distinguir maiúsculas/minúsculas.

```javascript
const entrada = "JAVASCRIPT";
if (entrada.toLowerCase() === "javascript") {
  console.log("Correto!");
}
```

---

### `trim()`, `trimStart()`, `trimEnd()`

Remove espaços em branco nas extremidades.

```javascript
const digitado = "   Ana Silva   ";

console.log(digitado.trim());      // "Ana Silva"
console.log(digitado.trimStart()); // "Ana Silva   "
console.log(digitado.trimEnd());   // "   Ana Silva"
```

**Quando usar:** Sempre ao ler dados de formulários.

---

### `includes()`

Verifica se uma string contém outra. Retorna `true` ou `false`.

```javascript
const frase = "Aprender JavaScript é ótimo!";

console.log(frase.includes("JavaScript")); // true
console.log(frase.includes("Python"));     // false
```

---

### `startsWith()` e `endsWith()`

Verifica como a string começa ou termina.

```javascript
const arquivo = "relatorio-2025.pdf";

console.log(arquivo.startsWith("relatorio")); // true
console.log(arquivo.endsWith(".pdf"));         // true
console.log(arquivo.endsWith(".jpg"));         // false
```

---

### `indexOf()` e `lastIndexOf()`

Retorna a posição (índice) da primeira ou última ocorrência de um texto.

```javascript
const frase = "banana";

console.log(frase.indexOf("a"));     // 1 (primeira ocorrência)
console.log(frase.lastIndexOf("a")); // 5 (última ocorrência)
console.log(frase.indexOf("z"));     // -1 (não encontrado)
```

---

### `slice(inicio, fim)`

Extrai uma parte da string.

```javascript
const texto = "JavaScript é incrível";

console.log(texto.slice(0, 10));  // "JavaScript"
console.log(texto.slice(11));     // "é incrível"
console.log(texto.slice(-8));     // "ncrível" (conta do final)
```

> O índice `fim` é exclusivo: `slice(0, 10)` pega do índice 0 ao 9.

---

### `replace()` e `replaceAll()`

Substitui texto dentro de uma string.

```javascript
const texto = "Eu gosto de Python. Python é legal.";

console.log(texto.replace("Python", "JavaScript"));
// "Eu gosto de JavaScript. Python é legal."

console.log(texto.replaceAll("Python", "JavaScript"));
// "Eu gosto de JavaScript. JavaScript é legal."
```

---

### `split(separador)`

Divide uma string em um array de partes.

```javascript
const csv = "Ana,Bruno,Carlos,Daniela";
const nomes = csv.split(",");

console.log(nomes); // ["Ana", "Bruno", "Carlos", "Daniela"]
console.log(nomes[2]); // "Carlos"

const frase = "aprender javascript é divertido";
const palavras = frase.split(" ");
console.log(palavras.length); // 4
```

---

### `join(separador)`

Une um array em uma string (o oposto de `split`).

```javascript
const palavras = ["JavaScript", "é", "incrível"];
const frase = palavras.join(" ");
console.log(frase); // "JavaScript é incrível"

const numeros = [1, 2, 3, 4];
console.log(numeros.join("-")); // "1-2-3-4"
```

---

### `padStart()` e `padEnd()`

Preenche a string até atingir um tamanho mínimo.

```javascript
const numero = "7";
console.log(numero.padStart(3, "0")); // "007"
console.log(numero.padEnd(3, "0"));   // "700"
```

**Quando usar:** Formatar números de pedidos, horas, CEPs, etc.

---

### Template literals (crase)

Permitem interpolar variáveis e expressões dentro de strings.

```javascript
const nome = "Carlos";
const idade = 25;

// Sem template literal:
const msg1 = "Olá, " + nome + "! Você tem " + idade + " anos.";

// Com template literal:
const msg2 = `Olá, ${nome}! Você tem ${idade} anos.`;

// Suporta expressões:
const msg3 = `Daqui a 10 anos você terá ${idade + 10} anos.`;

// Suporta múltiplas linhas:
const html = `
  <div>
    <h1>${nome}</h1>
    <p>Idade: ${idade}</p>
  </div>
`;
```

---

## Resumo dos métodos

| Método | O que faz |
|--------|-----------|
| `.length` | Número de caracteres |
| `.toUpperCase()` | Converte para maiúsculas |
| `.toLowerCase()` | Converte para minúsculas |
| `.trim()` | Remove espaços nas bordas |
| `.includes("x")` | Verifica se contém "x" |
| `.startsWith("x")` | Verifica se começa com "x" |
| `.endsWith("x")` | Verifica se termina com "x" |
| `.indexOf("x")` | Posição da 1ª ocorrência |
| `.slice(i, f)` | Recorta parte da string |
| `.replace("x", "y")` | Troca primeira ocorrência |
| `.replaceAll("x", "y")` | Troca todas as ocorrências |
| `.split("sep")` | Divide em array |
| `.join("sep")` | Une array em string |
| `.padStart(n, "c")` | Preenche à esquerda |
| `.padEnd(n, "c")` | Preenche à direita |

---

Continue para os [exercícios práticos](02-exercicios.md).
