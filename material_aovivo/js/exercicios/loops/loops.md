# Laços de Repetição em JavaScript

## 1. Introdução

Laços de repetição (loops) permitem percorrer arrays, listas e objetos, facilitando a manipulação de dados em JavaScript.

---

## 2. Conceitos Básicos (Pré-ECMAScript 6)

### for clássico
```js
for (let i = 0; i < array.length; i++) {
  // código
}
```
- Controle total sobre início, fim e incremento.

### for...in
```js
for (const index in array) {
  const element = array[index];
  // código
}
```
- Percorre índices do array.

---

## 3. ECMAScript 6+ (ES6+)

### for...of
```js
for (const item of array) {
  // código
}
```
- Percorre diretamente os elementos do array.

### forEach
```js
array.forEach((element, index) => {
  // código
});
```
- Executa uma função para cada elemento do array.

### Métodos modernos: find, filter
```js
const encontrado = array.find(e => e.propriedade === valor);
const filtrados = array.filter(e => e.propriedade === valor);
```

---

## 4. Exemplos Básicos

### Exemplo 1: Percorrendo um array de objetos (filmes)
```js
const movies = [
  { id: 1, title: "The Shawshank Redemption", year: 1994, genre: "Drama" },
  { id: 2, title: "The Godfather", year: 1972, genre: "Drama" },
  { id: 3, title: "The Dark Knight", year: 2008, genre: "Action" }
];

// for clássico
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].title);
}

// for...of (ES6+)
for (const movie of movies) {
  console.log(movie.title);
}

// forEach (ES6+)
movies.forEach(movie => console.log(movie.title));
```

---

## 5. Exercícios Básicos

- Percorra um array de nomes e exiba cada nome no console usando for, for...of e forEach.
- Crie um array de objetos com id e nome. Exiba apenas os nomes usando um loop.

---

## 6. Exemplos Intermediários

### Filtrando e Encontrando Elementos (ES6+)
```js
// Encontrar filme por título
const encontrar = movies.find(e => e.title === "The Dark Knight");
console.log(encontrar);

// Filtrar filmes por gênero
const filtrar = movies.filter(e => e.genre === "Drama");
console.log(filtrar);
```

### Revisão de Arrays
```js
const array = [
  { id: 1, nome: "Alberto" },
  { id: 2, nome: "Alberto Fernandes" },
  { id: 3, nome: "Alex" },
  { id: 4, nome: "Adriana" },
];

// Exibir todos os nomes
for (const element of array) {
  console.log(element.nome);
}

// Exibir usuário por id
for (const element of array) {
  if (element.id === 3) {
    console.log(element);
  }
}
```

---

## 7. Exercícios Intermediários

- Faça um array de objetos com email. Exiba o email de cada um usando for...of.
- Filtre os objetos cujo email contenha "@gmail.com".

---

## 8. Exemplos Avançados

### Array de Objetos: Bandas
```js
const bandasDeRock = [
  { nome: "Queen", origem: "Reino Unido", hitFamoso: "Bohemian Rhapsody" },
  { nome: "Nirvana", origem: "Estados Unidos", hitFamoso: "Smells Like Teen Spirit" },
  // ...
];

// Mostrar nome e hit famoso de cada banda
for (const banda of bandasDeRock) {
  console.log(`${banda.nome} - Hit: ${banda.hitFamoso}`);
}
```

---

## 9. Exercícios Avançados

- Crie um array de objetos representando vendas. Exiba o valor total usando um loop.
- Encontre o objeto com maior valor usando for...of ou métodos ES6+.

---

## 10. Dicas, Tabelas e Resumo

| Estrutura   | Pré-ES6 | ES6+ | Acessa Elemento | Acessa Índice | Controle Total |
|-------------|---------|------|-----------------|--------------|---------------|
| for         |   ✅    |  ✅  |       ✅        |      ✅       |      ✅        |
| for...in    |   ✅    |  ✅  |       ✅        |      ✅       |      🚫        |
| for...of    |   🚫    |  ✅  |       ✅        |      🚫       |      🚫        |
| forEach     |   🚫    |  ✅  |       ✅        |      ✅       |      🚫        |

- Use for...of e forEach para código mais limpo (ES6+)
- Use for clássico para controle total
- Use métodos modernos (find, filter) para buscas e filtragens

---

## 11. Referências
- Conteúdo unificado de: loop2.js, loops.js, loop.md, for.md, revisao-array.js, array_song.md
- Exercícios e exemplos originais mantidos e organizados por nível de dificuldade e padrão ECMAScript 