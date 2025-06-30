# Exercícios de Funções em JavaScript

## Exercício 1: Revertendo uma String
**Enunciado:** Crie uma função que receba uma string como parâmetro e retorne esta string invertida.

**Exemplo:**
```javascript
// Entrada: "cavalo"
// Saída: "olavac"

// Entrada: "banana"
// Saída: "ananab"
```

## Exercício 2: Verificação de Palíndromo
**Enunciado:** Crie uma função que verifica se uma palavra é um palíndromo. Um palíndromo é uma palavra que se lê da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda, independente de letras maiúsculas ou minúsculas.

**Exemplo:**
```javascript
// Entrada: "Arara"
// Saída: true

// Entrada: "desenvolvimento"
// Saída: false
```

## Exercício 3: Índice do Maior Valor
**Enunciado:** Crie uma função que receba um array de números e retorne o índice (posição) do maior valor presente nesse array.

**Exemplo:**
```javascript
// Entrada: [20, 3, 5]
// Saída: 0 (pois o maior valor é 20 e está na posição 0)

// Entrada: [9, 15, 6, 3, 8]
// Saída: 1 (pois o maior valor é 15 e está na posição 1)
```

## Exercício 4: Índice do Menor Valor
**Enunciado:** Crie uma função que receba um array de números e retorne o índice (posição) do menor valor presente nesse array.

**Exemplo:**
```javascript
// Entrada: [2, 3, 1, 4]
// Saída: 2 (pois o menor valor é 1 e está na posição 2)

// Entrada: [7, 5, 8, 3, 9]
// Saída: 3 (pois o menor valor é 3 e está na posição 3)
```

## Exercício 5: Palavra Mais Longa
**Enunciado:** Crie uma função que receba um array de palavras e retorne a palavra mais longa presente nesse array.

**Exemplo:**
```javascript
// Entrada: ["Alberto", "cazuza", "Flamengo"]
// Saída: "Flamengo" (pois tem 8 caracteres, sendo a mais longa)

// Entrada: ["sol", "lua", "estrelas", "céu"]
// Saída: "estrelas" (pois tem 8 caracteres, sendo a mais longa)
```

## Exercício 6: Contagem de Ocorrências do Maior Número
**Enunciado:** Crie uma função que receba um array de números e retorne quantas vezes o maior número do array aparece. Se o array estiver vazio, deve retornar 0.

**Exemplo:**
```javascript
// Entrada: [33, 40, 21, 22, 21, 21, 40, 40]
// Saída: 3 (pois o maior valor é 40 e ele aparece 3 vezes)

// Entrada: [5, 5, 5, 3, 2, 5]
// Saída: 4 (pois o maior valor é 5 e ele aparece 4 vezes)

// Entrada: []
// Saída: 0 (array vazio)
```

---

# Gabarito dos Exercícios

## Exercício 1: Revertendo uma String
```javascript
function reverseWord(word) {
    let reversedWord = '';

    for (let index = word.length - 1; index >= 0; index -= 1) {
        reversedWord += word[index];
    }

    return reversedWord;
}

// Teste
console.log(reverseWord('cavalo')); // olavac
```

## Exercício 2: Verificação de Palíndromo
```javascript
function verifyPalindrome(word) {
    const loweredCaseWord = word.toLowerCase();
    const reversedWord = reverseWord(loweredCaseWord);
    const isPalindrome = loweredCaseWord === reversedWord;

    return isPalindrome;
}

// Versão alternativa com split
function verifyPalindromeAlt(string) {
    const lowerCaseString = string.toLowerCase();
    const reverse = lowerCaseString.split('').reverse().join('');
    
    return reverse === lowerCaseString;
}

// Teste
console.log(verifyPalindrome('Arara')); // true
console.log(verifyPalindrome('desenvolvimento')); // false
```

## Exercício 3: Índice do Maior Valor
```javascript
function getHighestIndex(numbers) {
    let highestIndex = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[highestIndex] < numbers[index]) {
            highestIndex = index;
        }
    }

    return highestIndex;
}

// Teste
console.log(getHighestIndex([20, 3, 5])); // 0
console.log(getHighestIndex([9, 15, 6, 3, 8])); // 1
```

## Exercício 4: Índice do Menor Valor
```javascript
function getSmallestIndex(numbers) {
    let smallestIndex = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[smallestIndex] > numbers[index]) {
            smallestIndex = index;
        }
    }

    return smallestIndex;
}

// Teste
console.log(getSmallestIndex([2, 3, 1, 4])); // 2
console.log(getSmallestIndex([7, 5, 8, 3, 9])); // 3
```

## Exercício 5: Palavra Mais Longa
```javascript
function getLongestWord(words) {
    let longestWord = words[0];
  
    for (let index = 0; index < words.length; index += 1) {
      const currentWord = words[index];
  
      if (longestWord.length < currentWord.length) {
        longestWord = currentWord;
      }
    }
  
    return longestWord;
}

// Teste
console.log(getLongestWord(['Alberto', 'cazuza', 'Flamengo'])); // Flamengo
console.log(getLongestWord(['sol', 'lua', 'estrelas', 'céu'])); // estrelas
```

## Exercício 6: Contagem de Ocorrências do Maior Número
```javascript
function countHighestNumberMaxOccurrences(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    // Encontrar o maior número
    let highestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }

    // Contar ocorrências
    let occurrencesCounter = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] === highestNumber) {
            occurrencesCounter += 1;
        }
    }

    return occurrencesCounter;
}

// Versão alternativa usando getHighestIndex
function countHighestNumberOccurrences(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const highestIndex = getHighestIndex(numbers);
    const highestNumber = numbers[highestIndex];

    let occurrencesCounter = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] === highestNumber) {
            occurrencesCounter += 1;
        }
    }

    return occurrencesCounter;
}

// Teste
console.log(countHighestNumberMaxOccurrences([33, 40, 21, 22, 21, 21, 40, 40])); // 3
console.log(countHighestNumberMaxOccurrences([5, 5, 5, 3, 2, 5])); // 4
console.log(countHighestNumberMaxOccurrences([])); // 0
```