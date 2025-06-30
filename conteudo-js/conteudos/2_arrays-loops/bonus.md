# Projeto: Exibindo Personagens de Livros com JavaScript 📚

## 💡 Sobre o que é esse código?

Esse código é um projetinho simples de JavaScript que trabalha com **arrays**, **objetos**, e **laços de repetição (for)**. Ele mostra como percorrer listas de livros e, dentro de cada livro, acessar uma lista de personagens — tudo isso para exibir o nome de **todos os personagens** de todas as histórias.

---

## 🚀 O que o código faz?

1. Primeiro ele define um **array chamado `livros`**, onde cada item é um **objeto** representando um livro.
2. Cada objeto livro tem:
   - `nome`: o nome do livro
   - `autor`: quem escreveu o livro
   - `nota_imdb`: a nota do livro no IMDb
   - `personagens`: uma lista (array) com os personagens desse livro

3. Depois, o código define uma função chamada `exibeTodosPersonagens()` que:

   - Cria uma lista `data` para armazenar todos os personagens.
   - Usa **dois laços `for` aninhados**:
     - Um para percorrer cada livro
     - Outro para percorrer os personagens de cada livro e adicionar na lista `data`
   - No final, usa mais um `for` para mostrar no console todos os personagens que foram salvos na lista `data`.

4. Por fim, a função `exibeTodosPersonagens()` é chamada para rodar tudo.

---

## 🔍 Pontos importantes pra quem tá começando

- **Array de objetos:** Usar listas onde cada item é um objeto é uma forma muito comum de organizar dados.
- **Função com loops:** A função `exibeTodosPersonagens()` mostra como podemos combinar vários laços `for` para acessar informações mais profundas.
- **Modularização:** Separar o código em uma função facilita a leitura e a manutenção.

---

## 🧠 Dica de cria

Se liga: quando a gente precisa acessar várias informações dentro de listas dentro de outras listas, os **laços aninhados** são nossos parceiros. Esse tipo de estrutura aparece muito em sites, apps e sistemas. Sacar bem isso aqui vai te deixar prontinho pra projetos mais cabulosos depois! 😎

---

## 🖥️ Resultado no console

Ao executar o código, você vai ver todos os personagens de todos os livros sendo exibidos um por um no terminal. Testa aí pra ver a mágica acontecer! ✨



## Código:
```js
    const livros = [
    {
        nome: "Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        nota_imdb: 8.8,
        personagens: [
            "Frodo Bolseiro",
            "Gandalf",
            "Aragorn",
            "Legolas",
            "Gollum"
        ]
    },
    {
        nome: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        nota_imdb: 7.6,
        personagens: [
            "Harry Potter",
            "Hermione Granger",
            "Ron Weasley",
            "Alvo Dumbledore"
        ]
    },
    {
        nome: "O Poderoso Chefão",
        autor: "Mario Puzo",
        nota_imdb: 9.2,
        personagens: [
            "Vito Corleone",
            "Michael Corleone",
            "Sonny Corleone",
            "Tom Hagen"
        ]
    },
    {
        nome: "O Código Da Vinci",
        autor: "Dan Brown",
        nota_imdb: 6.6,
        personagens: [
            "Robert Langdon",
            "Sophie Neveu",
            "Silas",
            "Jacques Saunière"
        ]
    },
    {
        nome: "A Saga Crepúsculo: Crepúsculo",
        autor: "Stephenie Meyer",
        nota_imdb: 5.2,
        personagens: [
            "Edward Cullen",
            "Bella Swan",
            "Jacob Black",
            "Alice Cullen"
        ]
    }
];

function exibeTodosPersonagens() {
    const data = [];

    for (let i = 0; i < livros.length; i++) {
        const personagens = livros[i].personagens;

        for (let j = 0; j < personagens.length; j++) {
            data.push(personagens[j]);
        }
    }

    for (let k = 0; k < data.length; k++) {
        console.log(data[k]);
    }
}

exibeTodosPersonagens();

```