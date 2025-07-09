# Avançando: Tipos de Loops em JavaScript

## Loop for clássico
- Estrutura mais tradicional para repetições controladas
- Ideal para quando você sabe o número de repetições

```js
for (let i = 0; i < 10; i++) {
  // código a ser repetido
}
```

## Loop for...of
- Percorre valores de arrays, strings e coleções iteráveis
- Simples para acessar cada elemento

```js
const frutas = ['maçã', 'banana', 'uva'];
for (const fruta of frutas) {
  console.log(fruta);
}
```

## Loop for...in
- Percorre as chaves (índices ou propriedades) de objetos e arrays
- Útil para objetos

```js
const pessoa = { nome: 'Ana', idade: 25 };
for (const chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
```

---

> Dica: Use for...of para arrays e for...in para objetos!

Adicione exemplos, exercícios e dicas práticas para cada tipo de loop.
