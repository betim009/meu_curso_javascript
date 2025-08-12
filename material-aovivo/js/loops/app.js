const pokemons = [
  { id: 1, nome: 'Bulbasaur', tipo1: 'Grama', tipo2: 'Venenoso' },
  { id: 2, nome: 'Ivysaur', tipo1: 'Grama', tipo2: 'Venenoso' },
  { id: 3, nome: 'Venusaur', tipo1: 'Grama', tipo2: 'Venenoso' },
  { id: 4, nome: 'Charmander', tipo1: 'Fogo', tipo2: null },
  { id: 5, nome: 'Charmeleon', tipo1: 'Fogo', tipo2: null },
  { id: 6, nome: 'Charizard', tipo1: 'Fogo', tipo2: 'Voador' },
  { id: 7, nome: 'Squirtle', tipo1: 'Água', tipo2: null },
  { id: 8, nome: 'Wartortle', tipo1: 'Água', tipo2: null },
  { id: 9, nome: 'Blastoise', tipo1: 'Água', tipo2: null },
  { id: 10, nome: 'Caterpie', tipo1: 'Inseto', tipo2: null },
  { id: 11, nome: 'Metapod', tipo1: 'Inseto', tipo2: null },
  { id: 12, nome: 'Butterfree', tipo1: 'Inseto', tipo2: 'Voador' },
  { id: 13, nome: 'Weedle', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { id: 14, nome: 'Kakuna', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { id: 15, nome: 'Beedrill', tipo1: 'Inseto', tipo2: 'Venenoso' },
];

let novoArray = []
for (const e of pokemons) {
    if (e.tipo1 === "Venenoso" || e.tipo2 === "Venenoso") {
        novoArray.push(e)
    }
}

const pokemonsVenenoso = pokemons.filter(pokemon => pokemon.tipo1 === "Venenoso" || pokemon.tipo2 === "Venenoso")
console.table(novoArray)