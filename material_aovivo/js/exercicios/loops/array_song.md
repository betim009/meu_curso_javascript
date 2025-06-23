
# 📘 Arrays e Objetos em JavaScript

## 🧠 O que vamos aprender

* Qual a diferença entre um **array** e um **objeto**
* Como acessar os valores de cada um
* Como criar uma **lista de objetos**
* Como **exibir só uma propriedade** de cada item com uma estrutura de repetição
* Introdução ao `for...of`

---

## 🟦 1. Diferença entre **Array (Lista)** e **Objeto**

### ✅ O que é um **Array**?

Um **array** é como uma **caixa com vários compartimentos**. A gente consegue guardar vários dados dentro dela — e eles podem ser de **tipos diferentes** (números, textos, objetos...).

📌 **Símbolo do array:** `[]` (colchetes)  
📌 Cada item tem uma **posição** que começa no número 0 (zero).

```js
const bandas = ["Nirvana", "Offspring", "The Strokes", "Foo Fighters"];
```

---

### ✅ O que é um **Objeto**?

Um **objeto** é como uma **caixa com etiquetas**. Cada "etiqueta" tem um nome (chave) e um valor.

📌 **Símbolo do objeto:** `{}` (chaves)  
📌 Acessamos as informações dele usando **ponto** (`objeto.propriedade`).

```js
const nirvana = {
  nome: "Nirvana",
  genero: "Rock",
  nota: 10
};
```

Mesmo tendo várias informações, isso **ainda é um único dado**.

---

## 🔷 2. Array de Objetos

Podemos **juntar vários objetos dentro de um array**. Isso é útil para guardar dados de várias coisas parecidas (como várias bandas de rock).

```js
const bandasDeRock = [
  {
    nome: "Queen",
    origem: "Reino Unido",
    anoFormacao: 1970,
    hitFamoso: "Bohemian Rhapsody",
    nota: 10.0
  },
  {
    nome: "Nirvana",
    origem: "Estados Unidos",
    anoFormacao: 1987,
    hitFamoso: "Smells Like Teen Spirit",
    nota: 8.5
  },
  {
    nome: "The Rolling Stones",
    origem: "Reino Unido",
    anoFormacao: 1962,
    hitFamoso: "(I Can't Get No) Satisfaction",
    nota: 6.0
  },
  {
    nome: "Metallica",
    origem: "Estados Unidos",
    anoFormacao: 1981,
    hitFamoso: "Enter Sandman",
    nota: 7.0
  },
  {
    nome: "Legião Urbana",
    origem: "Brasil",
    anoFormacao: 1982,
    hitFamoso: "Tempo Perdido",
    nota: 8.0
  },
  {
    nome: "AC/DC",
    origem: "Austrália",
    anoFormacao: 1973,
    hitFamoso: "Back in Black",
    nota: 7.0
  }
];
```

---

## 🎯 3. Como acessar só um dado de cada objeto?

Se você quiser ver **apenas as origens**, pode fazer assim:

```js
console.log(bandasDeRock[0].origem);
console.log(bandasDeRock[1].origem);
console.log(bandasDeRock[2].origem);
// ...
```

Isso funciona se tiver só 3 ou 4 bandas.  
Mas **se tiver 100?** Aí a gente usa uma **estrutura de repetição**.

---

## 🔁 4. Estrutura de repetição: `for...of`

O `for...of` serve para **percorrer um array** item por item, de forma simples.

### Exemplo: Mostrar a origem de cada banda

```js
for (const banda of bandasDeRock) {
  console.log(banda.origem);
}
```

> ✅ Para cada **banda** dentro da lista `bandasDeRock`, o código vai **mostrar a origem** dela.

---

## 📌 Resumo

| Termo           | Explicação                                                |
|----------------|------------------------------------------------------------|
| `[]`            | Array: vários dados em uma lista                          |
| `{}`            | Objeto: um dado com várias propriedades (chaves e valores)|
| `array[0]`      | Acessa o primeiro item do array                           |
| `objeto.propriedade` | Acessa um valor específico dentro do objeto        |
| `for...of`      | Percorre cada item de uma lista                          |

---

## ⚠️ Dicas e Cuidados

* Arrays são úteis quando temos **vários dados de mesmo tipo**.
* Objetos são úteis quando temos **várias características de uma única coisa**.
* Quando juntar tudo, use **array de objetos**.
* `for...of` é ótimo para **listar tudo** de um array de objetos.
* Não confunda a **posição do array** com a **chave do objeto**.

---

## 🧪 Desafio

Mostre no console o nome e o hit mais famoso de cada banda.

```js
for (const banda of bandasDeRock) {
  console.log(`${banda.nome} - Hit: ${banda.hitFamoso}`);
}
```
