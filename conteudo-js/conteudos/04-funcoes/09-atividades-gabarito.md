# Gabarito das Atividades: Funções em JavaScript

## Soluções sugeridas

1. Soma de dois números:
```js
function soma(a, b) {
  return a + b;
}
```

2. Par ou ímpar:
```js
function parOuImpar(num) {
  return num % 2 === 0 ? 'Par' : 'Ímpar';
}
```

3. Imprimir nomes:
```js
function imprimirNomes(nomes) {
  nomes.forEach(nome => console.log(nome));
}
```

4. Fatorial:
```js
function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
```

5. Contar letras "a":
```js
function contarA(texto) {
  let contador = 0;
  for (let letra of texto.toLowerCase()) {
    if (letra === 'a') contador++;
  }
  return contador;
}
```

6. Média de array:
```js
function media(arr) {
  const soma = arr.reduce((acc, n) => acc + n, 0);
  return soma / arr.length;
}
```

7. Contar vogais:
```js
function contarVogais(texto) {
  const vogais = 'aeiou';
  let contador = 0;
  for (let letra of texto.toLowerCase()) {
    if (vogais.includes(letra)) contador++;
  }
  return contador;
}
```

8. Nomes maiores de 18 anos:
```js
function maioresDeIdade(pessoas) {
  return pessoas.filter(p => p.idade > 18).map(p => p.nome);
}
```

// Adicione comentários explicando cada passo, se desejar.
