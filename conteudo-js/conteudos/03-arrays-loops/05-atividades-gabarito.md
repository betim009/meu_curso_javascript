# Gabarito das Atividades e Desafios Finais: Loops e Métodos de Array

## 1. Imprima todos os números de 1 a 20 usando um loop for.
```js
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
```

## 2. Dada uma lista de nomes, imprima apenas os que começam com a letra 'A'.
```js
const nomes = ['Ana', 'Bruno', 'Amanda', 'Carlos'];
nomes.forEach(nome => {
  if (nome[0] === 'A') {
    console.log(nome);
  }
});
// Ou usando filter:
const nomesA = nomes.filter(nome => nome[0] === 'A');
console.log(nomesA);
```

## 3. Some todos os valores de um array de números usando reduce.
```js
const numeros = [10, 20, 30];
const soma = numeros.reduce((acc, val) => acc + val, 0);
console.log(soma); // 60
```

## 4. Crie um novo array apenas com os números pares de uma lista.
```js
const lista = [1, 2, 3, 4, 5, 6];
const pares = lista.filter(num => num % 2 === 0);
console.log(pares); // [2, 4, 6]
```

## 5. Verifique se todos os alunos de uma turma têm nota maior que 6 (every).
```js
const notas = [7, 8, 9, 10];
const todosAprovados = notas.every(nota => nota > 6);
console.log(todosAprovados); // true
```

## 6. Verifique se existe algum produto com preço acima de 100 (some).
```js
const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça', preco: 120 }
];
const temCaro = produtos.some(prod => prod.preco > 100);
console.log(temCaro); // true
```

## 7. Use for...of para exibir todos os elementos de um array de objetos.
```js
const pessoas = [
  { nome: 'Ana' },
  { nome: 'Beto' }
];
for (const pessoa of pessoas) {
  console.log(pessoa.nome);
}
```

## 8. Crie uma função que receba um array de strings e retorne um novo array com todas as strings em maiúsculo (map).
```js
function paraMaiusculo(arr) {
  return arr.map(str => str.toUpperCase());
}
// Exemplo:
console.log(paraMaiusculo(['oi', 'tchau'])); // ['OI', 'TCHAU']
```

## 9. Filtre os usuários maiores de idade de um array de objetos {nome, idade}.
```js
const usuarios = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Beto', idade: 20 }
];
const maiores = usuarios.filter(u => u.idade >= 18);
console.log(maiores); // [{ nome: 'Beto', idade: 20 }]
```

## 10. Desafio: Dado um array de compras, calcule o valor total e retorne uma lista apenas com os itens acima de R$ 50.
```js
const compras = [
  { item: 'Livro', preco: 40 },
  { item: 'Fone', preco: 120 },
  { item: 'Mouse', preco: 60 }
];
const total = compras.reduce((acc, c) => acc + c.preco, 0);
const acima50 = compras.filter(c => c.preco > 50);
console.log('Total:', total); // 220
console.log('Acima de 50:', acima50); // [{item: 'Fone', ...}, {item: 'Mouse', ...}]
``` 