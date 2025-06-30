# Exercícios de JavaScript - Estruturas de Repetição e Condicionais

## Exercícios

### 1. Loop `for`

Percorra um array de números e exiba apenas os pares.

**Exemplo de saída:**

```javascript
console.log(numerosPares);  // [2, 4, 6]
```

### 2. Loop `while`

Exiba os números de 10 a 0.

**Exemplo de saída:**

```javascript
console.log(contador);  // 10, 9, 8, ..., 0
```

### 3. Loop `for...of`

Percorra um array de nomes e exiba apenas os que começam com "A".

**Exemplo de saída:**

```javascript
console.log(nomesComA);  // ["Ana", "Arthur"]
```

### 4. Loop `for...in`

Exiba as chaves e valores de um objeto `pessoa`.

**Exemplo de saída:**

```javascript
console.log(chave, ":", valor);  // nome: "Carlos", idade: 30
```

### 5. `if` dentro de um loop

Percorra uma lista de produtos e exiba apenas os com preço acima de R\$ 1000.

**Exemplo de saída:**

```javascript
console.log(produto);  // { nome: "Notebook", preco: 2500 }
```

### 6. `switch`

Exiba o nome do mês com base em um número de 1 a 12.

**Exemplo de saída:**

```javascript
console.log(mes);  // "Março"
```

## Gabarito

### 1:

```javascript
let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = [];
for (let numero of numeros) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    }
}
console.log(numerosPares);  // [2, 4, 6]
```

### 2:

```javascript
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}
```

### 3:

```javascript
let nomes = ["Ana", "Bruno", "Arthur", "Carla"];
let nomesComA = nomes.filter(nome => nome.startsWith("A"));
console.log(nomesComA);  // ["Ana", "Arthur"]
```

### 4:

```javascript
let pessoa = { nome: "Carlos", idade: 30 };
for (let chave in pessoa) {
    console.log(chave, ":", pessoa[chave]);
}
```

### 5:

```javascript
let produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Notebook", preco: 2500 },
    { nome: "Teclado", preco: 150 }
];
for (let produto of produtos) {
    if (produto.preco > 1000) {
        console.log(produto);
    }
}
```

### 6:

```javascript
let numeroMes = 3;
let mes;
switch (numeroMes) {
    case 1:
        mes = "Janeiro";
        break;
    case 2:
        mes = "Fevereiro";
        break;
    case 3:
        mes = "Março";
        break;
    default:
        mes = "Mês inválido";
}
console.log(mes);
```
