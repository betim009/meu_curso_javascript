# Gabarito: Exercícios de Números e Arrays

## 1. Mostra tudo!
```js
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

## 2. Soma tudo aí, chefia
```js
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
```

## 3. Calcule a média dos números
```js
let media = sum / numbers.length;
console.log(media);
```

## 4. E aí, passou ou não?
```js
if (media > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}
```

## 5. Qual o maior valor?
```js
let maior = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(maior);
```

## 6. Só os ímpares
```js
let impares = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    impares += 1;
  }
}
if (impares === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log(impares);
}
```

## Desafio extra: Fatorial nervoso
```js
let fatorial = 1;
for (let i = 10; i > 0; i--) {
  fatorial *= i;
}
console.log(fatorial);
``` 