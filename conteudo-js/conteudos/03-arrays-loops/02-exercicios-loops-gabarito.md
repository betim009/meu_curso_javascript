# Gabarito: Exercícios sobre Laços e Arrays de Objetos

## 1. Usando for para exibir títulos
```js
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
}
```

## 2. Usando for...of para mostrar gêneros
```js
for (const movie of movies) {
    console.log(movie.genre);
}
```

## 3. Usando forEach para frases
```js
movies.forEach(movie => {
    console.log(`O filme ${movie.title} foi lançado em ${movie.year}.`);
});
```

## 4. Desafio: Filmes recentes com for
```js
const recentes = [];
for (let i = 0; i < movies.length; i++) {
    if (movies[i].year > 2010) {
        recentes.push(movies[i]);
    }
}
console.log(recentes);
```

## 5. Contar gêneros com forEach
```js
let contagem = 0;
movies.forEach(movie => {
    if (movie.genre === "Action") {
        contagem++;
    }
});
console.log(`Filmes de ação: ${contagem}`);
```

## 6. Índices com forEach
```js
movies.forEach((movie, index) => {
    console.log(`[${index + 1}] ${movie.title}`);
});
``` 