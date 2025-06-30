## Atividades de JavaScript - Operadores, Condicionais e Arrays

### Exercício 1
Elabore alguns códigos e imprima o resultado no console usando o `console.log`, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, `num1` e `num2`, definidas no começo com os valores que serão operados.

Escreva códigos para:
- Adição (`num1 + num2`)
- Subtração (`num1 - num2`)
- Multiplicação (`num1 * num2`)
- Divisão (`num1 / num2`)
- Módulo (`num1 % num2`)

```javascript
let num1 = 10;
let num2 = 5;

console.log('Soma: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' + (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Módulo: ' + (num1 % num2));
```

---

### Exercício 2
Utilize `if/else` para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

```javascript
const num1 = 20;
const num2 = 21;

if (num1 > num2) {
    console.log(num1 + " é maior que " + num2);
} else if (num1 === num2) {
    console.log("Os números são iguais.");
} else {
    console.log(num2 + " é maior que " + num1);
}
```

---

### Exercício 3
Utilize `if/else` para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

```javascript
let num1 = 6;
let num2 = 4;
let num3 = 2;

if (num1 > num2 && num1 > num3) {
    console.log('O maior número é: ' + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('O maior número é: ' + num2);
} else if (num3 > num1 && num3 > num2) {
    console.log('O maior número é: ' + num3);
} else {
    console.log('IIHH, tem números iguais!');
}
```

---

### Exercício 4
Utilize `if/else` para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne `true` se os ângulos representarem um triângulo válido e `false`, caso contrário. Se algum ângulo for inválido (<= 0), retorne uma mensagem de erro.

```javascript
let ang1 = 60;
let ang2 = 60;
let ang3 = 60;

if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
    console.log("Erro: ângulo inválido.");
} else if (ang1 + ang2 + ang3 === 180) {
    console.log(true);
} else {
    console.log(false);
}
```

---

### Exercício 5
Utilize `switch/case` para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

⭐ Desafio extra: o código deve funcionar com letras maiúsculas e minúsculas, sem aumentar a quantidade de condicionais.

```javascript
let chessPiece = 'BISPO';

switch (chessPiece.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Uma casa para qualquer direção.');
        break;
    case 'bispo':
        console.log('Bispo -> Diagonais.');
        break;
    case 'rainha':
        console.log('Rainha -> Diagonal, horizontal e vertical.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida!');
}
```

---

### Exercício 6
Utilize `if...else` para escrever um código que defina três números em variáveis e retorne `true` se pelo menos um deles for par. Caso contrário, o código deve retornar `false`. Use apenas um `if`.

```javascript
const num1 = 1;
const num2 = 3;
const num3 = 20;

let isEven = (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0);

console.log(isEven);
```

---

### Exercício 7
Utilize `if...else` para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

```javascript
let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 3500;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log("Salário líquido: R$" + (salarioBase - aliquotaIR).toFixed(2));
```

---

### Exercícios com Array
Utilize o array abaixo:
```javascript
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Percorra o array imprimindo todos os valores:
```javascript
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

2. Some todos os valores e imprima o resultado:
```javascript
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
console.log("Soma: ", soma);
```

3. Calcule e imprima a média aritmética:
```javascript
let media = soma / numbers.length;
console.log("Média: ", media);
```

4. Verifique se a média é maior que 20:
```javascript
if (media > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}
```

5. Descubra o maior valor do array:
```javascript
let maior = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maior) maior = numbers[i];
}
console.log("Maior valor: ", maior);
```

6. Conte os valores ímpares:
```javascript
let impares = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) impares++;
}
if (impares > 0) {
  console.log("Quantidade de ímpares: ", impares);
} else {
  console.log("Nenhum valor ímpar encontrado");
}
```

