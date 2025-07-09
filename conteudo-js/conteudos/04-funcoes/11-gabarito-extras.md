# Gabarito dos Exercícios Extras de Funções

## Exercício 1: Revertendo uma String
```js
function reverseWord(word) {
    let reversedWord = '';
    for (let index = word.length - 1; index >= 0; index -= 1) {
        reversedWord += word[index];
    }
    return reversedWord;
}
```

## Exercício 2: Verificação de Palíndromo
```js
function verifyPalindrome(word) {
    const loweredCaseWord = word.toLowerCase();
    const reversedWord = reverseWord(loweredCaseWord);
    return loweredCaseWord === reversedWord;
}
// Alternativa
function verifyPalindromeAlt(string) {
    const lowerCaseString = string.toLowerCase();
    const reverse = lowerCaseString.split('').reverse().join('');
    return reverse === lowerCaseString;
}
```

## Exercício 3: Índice do Maior Valor
```js
function getHighestIndex(numbers) {
    let highestIndex = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[highestIndex] < numbers[index]) {
            highestIndex = index;
        }
    }
    return highestIndex;
}
```

## Exercício 4: Índice do Menor Valor
```js
function getSmallestIndex(numbers) {
    let smallestIndex = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[smallestIndex] > numbers[index]) {
            smallestIndex = index;
        }
    }
    return smallestIndex;
}
```

## Exercício 5: Palavra Mais Longa
```js
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
```

## Exercício 6: Contagem de Ocorrências do Maior Número
```js
function countHighestNumberMaxOccurrences(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let highestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }
    let occurrencesCounter = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] === highestNumber) {
            occurrencesCounter += 1;
        }
    }
    return occurrencesCounter;
}
``` 