# Avançando Mais Ainda: Métodos Modernos de Arrays (ECMAScript)

Os métodos modernos de arrays permitem processar, transformar e filtrar listas de forma elegante e funcional, sem precisar de loops explícitos.

## forEach
Executa uma função para cada elemento do array.
```js
const nomes = ['Ana', 'Beto', 'Carlos'];
nomes.forEach((nome) => {
  console.log(nome);
});
```

## map
Cria um novo array com o resultado da função aplicada a cada elemento.
```js
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2); // [2, 4, 6]
```

## filter
Cria um novo array apenas com os elementos que passaram no teste.
```js
const idades = [15, 22, 30, 12];
const maiores = idades.filter(idade => idade >= 18); // [22, 30]
```

## find
Retorna o primeiro elemento que satisfaz a condição.
```js
const produtos = [ {nome: 'Camiseta', preco: 30}, {nome: 'Calça', preco: 80} ];
const barato = produtos.find(p => p.preco < 50); // {nome: 'Camiseta', preco: 30}
```

## reduce
Reduz o array a um único valor (ex: soma, média).
```js
const valores = [10, 20, 30];
const soma = valores.reduce((acc, val) => acc + val, 0); // 60
```

## some
Retorna true se pelo menos um elemento passar no teste.
```js
const notas = [5, 7, 8];
const temReprovado = notas.some(nota => nota < 6); // true
```

## every
Retorna true se todos os elementos passarem no teste.
```js
const notas = [7, 8, 9];
const todosAprovados = notas.every(nota => nota >= 6); // true
```

---

> Experimente cada método e compare com o uso de loops tradicionais!

Adicione exercícios práticos para cada método.
