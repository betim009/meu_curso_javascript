const pokemons = [
    {
    nome: "squirtle",
    tipo: "agua",
    vantagem1: "pedra",
    vantagem2: "fogo",
    desvantagem1: "eletrico",
    desvantagem2: "planta",
  },
  {
    nome: "charmander",
    tipo: "fogo",
    vantagem1: "planta",
    vantagem2: "inseto",
    desvantagem1: "agua",
    desvantagem2: "pedra",
  },
  {
    nome: "vulpix",
    tipo: "fogo",
    vantagem1: "planta",
    vantagem2: "gelo",
    desvantagem1: "agua",
    desvantagem2: "pedra",
  },
  {
    nome: "growlithe",
    tipo: "fogo",
    vantagem1: "planta",
    vantagem2: "inseto",
    desvantagem1: "agua",
    desvantagem2: "terra",
  },
  {
    nome: "psyduck",
    tipo: "agua",
    vantagem1: "fogo",
    vantagem2: "terra",
    desvantagem1: "eletrico",
    desvantagem2: "planta",
  },
  {
    nome: "poliwag",
    tipo: "agua",
    vantagem1: "fogo",
    vantagem2: "pedra",
    desvantagem1: "eletrico",
    desvantagem2: "planta",
  },
];

// 1. Exibir apenas o nome dos dois pokemons(sem estrutura de repeticao).
console.log(`${pokemons[0].nome}`)
console.log(`${pokemons[1].nome}`)


// 2. Exibir nome e tipo do pokemon(sem estrutura de repeticao)
// exemplo:
// charmander - fogo
// squirtle - agua
console.log(`${pokemons[0].nome} - ${pokemons[0].tipo}`)
console.log(`${pokemons[1].nome} - ${pokemons[1].tipo}`)

// 3. Construa uma estrutura de condicao, que verifica qual dos dois pokemons, possui vantagem entre si.
// exemplo:
// squirtle tem vangatem sobre charmander
// GABARITO do 3
if (pokemons[0].vantagem1 === pokemons[1].tipo) {
  console.log(`${pokemons[0].nome} possui vantagem contra ${pokemons[1].nome}`);
} else if (pokemons[0].vantagem1 === pokemons[1].tipo) {
  console.log(`${pokemons[0].nome} possui vantagem contra ${pokemons[1].nome}`);
} else if (pokemons[1].vantagem1 === pokemons[0].tipo) {
  console.log(`${pokemons[1].nome} possui vantagem contra ${pokemons[0].nome}`);
} else if (pokemons[1].vantagem2 === pokemons[0].tipo) {
  console.log(`${pokemons[1].nome} possui vantagem contra ${pokemons[0].nome}`);
} else {
  console.log("Nenhum dos dois pokemons possui vantagem.")
}

// 4. Exibir o nome de todos os pokemons, utilizando estrutura de repeticao.
// Recomendacao: for of
for (const pokemon of pokemons) {
  console.log(pokemon.nome)
}

// 5. Exibir o nome e tipo de todos os pokemons, utilizando estrutura de repeticao.
for (const pokemon of pokemons) {
  console.log(`${pokemon.nome} - ${pokemon.tipo}`)
}

// 6. Exibir apenas os pokemons do tipo agua
for (const pokemon of pokemons) {
  if (pokemon.tipo === "agua") {
    console.log(pokemon)
  }
}

// 7. Exibir os pokemons do tipo fogo

// 8. Exibir os pokemons que possuem vantagem contra o tipo planta

// 9. Exibir os pokemons que possuem vantagem contra o tipo pedra

// 10. Econtrar o pokemon que tenha o nome igual a "growlithe"

// 11. Exibir todos pokemons que possuem o nome diferente de "growlithe" e "psyduck"

// 12. Exibir os pokemons que possuem desvantagem contra "eletrico"


