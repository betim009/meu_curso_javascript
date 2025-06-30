# 🧪 Exercícios sobre Laços: `for`, `for...of` e `forEach`

## 📦 Base de Dados para os Exercícios

```javascript
const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers: Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];
```

---

## 🧪 Exercício 1: Usando `for`

**Enunciado:**  
Use um `for` tradicional para exibir no console os títulos de todos os filmes.

**Gabarito:**

```javascript
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
}
```

---

## 🧪 Exercício 2: Usando `for...of`

**Enunciado:**  
Use `for...of` para mostrar o gênero (`genre`) de cada filme da lista.

**Gabarito:**

```javascript
for (const movie of movies) {
    console.log(movie.genre);
}
```

---

## 🧪 Exercício 3: Usando `forEach`

**Enunciado:**  
Use `forEach` para exibir a seguinte frase para cada filme:  
`"O filme [título] foi lançado em [ano]."`

**Gabarito:**

```javascript
movies.forEach(movie => {
    console.log(`O filme ${movie.title} foi lançado em ${movie.year}.`);
});
```

---

## 🧪 Exercício 4: Desafio com `for`

**Enunciado:**  
Usando `for`, crie um novo array chamado `recentes` apenas com filmes lançados depois de 2010.

**Gabarito:**

```javascript
const recentes = [];

for (let i = 0; i < movies.length; i++) {
    if (movies[i].year > 2010) {
        recentes.push(movies[i]);
    }
}

console.log(recentes);
```

---

## 🧪 Exercício 5: Contar gêneros com `forEach`

**Enunciado:**  
Use `forEach` para contar quantos filmes são do gênero `"Action"`.

**Gabarito:**

```javascript
let contagem = 0;

movies.forEach(movie => {
    if (movie.genre === "Action") {
        contagem++;
    }
});

console.log(`Filmes de ação: ${contagem}`);
```

---

## 🧪 Exercício 6: Índices com `forEach`

**Enunciado:**  
Use `forEach` com o índice (`index`) para imprimir:  
`"[1] The Matrix"`  
`"[2] Titanic"`  
E assim por diante.

**Gabarito:**

```javascript
movies.forEach((movie, index) => {
    console.log(`[${index + 1}] ${movie.title}`);
});
```
