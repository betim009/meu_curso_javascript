# Gabarito – Exercícios de Funções em JavaScript

---

## 1. Saudação
```js
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

// Testes
console.log(saudacao("Maria")); // "Olá, Maria!"
console.log(saudacao("João"));  // "Olá, João!"
```

---

## 2. Dobro
```js
function dobro(numero) {
  return numero * 2;
}

// Testes
console.log(dobro(10)); // 20
console.log(dobro(7));  // 14
```

---

## 3. Soma de Dois Números (Média)
```js
function media(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

// Testes
console.log(media(10, 7)); // 8.5
console.log(media(8, 4));  // 6
```

---

## 4. Maior Número
```js
function maiorNumero(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Testes
console.log(maiorNumero(10, 7)); // 10
console.log(maiorNumero(4, 6));  // 6
```

---

## 5. Par ou Ímpar
```js
function parOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

// Testes
console.log(parOuImpar(10)); // "Par"
console.log(parOuImpar(7));  // "Ímpar"
```

---

## 6. Média Maior que Cinco
```js
function mediaMaiorQueCinco(nota1, nota2) {
  return ((nota1 + nota2) / 2) > 5;
}

// Testes
console.log(mediaMaiorQueCinco(10, 7)); // true
console.log(mediaMaiorQueCinco(4, 3));  // false
```

---

## 7. É Positivo?
```js
function ehPositivo(numero) {
  return numero > 0;
}

// Testes
console.log(ehPositivo(10));  // true
console.log(ehPositivo(-7));  // false
```

---

## 8. Calcular Área do Retângulo
```js
function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

// Testes
console.log(calcularAreaRetangulo(10, 5)); // 50
console.log(calcularAreaRetangulo(7, 3));  // 21
```

---

## 9. Concatenação de Strings
```js
function concatenaStrings(str1, str2) {
  return str1 + str2;
}

// Testes
console.log(concatenaStrings("hello", "world")); // "helloworld"
console.log(concatenaStrings("Maria", "João"));  // "MariaJoão"
```

---

## 10. Inverter String
```js
function inverterString(str) {
  return str.split("").reverse().join("");
}

// Testes
console.log(inverterString("hello")); // "olleh"
console.log(inverterString("world")); // "dlrow"
```

---

## 11. Menor Número de um Array
```js
function menorNumeroArray(numeros) {
  return Math.min(...numeros);
}

// Testes
console.log(menorNumeroArray([10, 7, 3, 5])); // 3
console.log(menorNumeroArray([4, 6, 2, 8]));  // 2
```

---

## 12. Soma dos Elementos de um Array
```js
function somaArray(numeros) {
  return numeros.reduce((soma, n) => soma + n, 0);
}

// Testes
console.log(somaArray([10, 7, 3, 5])); // 25
console.log(somaArray([4, 6, 2, 8]));  // 20
```

---

## 13. Contar Vogais
```js
function contaVogais(str) {
  const vogais = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vogais.includes(char)) count++;
  }
  return count;
}

// Testes
console.log(contaVogais("hello")); // 2
console.log(contaVogais("world")); // 1
```

---

## 14. Multiplicar Elementos de um Array
```js
function multiplicaElementos(numeros, multiplicador) {
  return numeros.map(n => n * multiplicador);
}

// Testes
console.log(multiplicaElementos([10, 7, 3, 5], 2)); // [20, 14, 6, 10]
console.log(multiplicaElementos([4, 6, 2, 8], 3));  // [12, 18, 6, 24]
```

---

## 15. Filtrar Pares
```js
function filtraPares(numeros) {
  return numeros.filter(n => n % 2 === 0);
}

// Testes
console.log(filtraPares([10, 7, 3, 5])); // [10]
console.log(filtraPares([4, 6, 2, 8]));  // [4, 6, 2, 8]
``` 