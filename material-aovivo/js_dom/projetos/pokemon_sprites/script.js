const minhaEquipe = [
  {
    id: 1,
    nome: "Gengar",
    imagem: "https://img.pokemondb.net/sprites/x-y/normal/gengar.png",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    move1: "Shadow Punch",
    move2: "Shadow Punch",
    move3: "Shadow Punch",
    move4: "Shadow Punch",
    hp: 60,
  },
  {
    id: 2,
    nome: "Dragonite",
    imagem:
      "https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
    move1: "Dragon Claw",
    move2: "Ember",
    move3: "Fire Fang",
    move4: "Slash",
    hp: 78,
  },
  {
    id: 6,
    nome: "Charizard",
    imagem:
      "https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
    move1: "Dragon Claw",
    move2: "Ember",
    move3: "Fire Fang",
    move4: "Slash",
    hp: 78,
  },
];

const nomePokemon = document.getElementById("nome-pokemon");
const imgPokemon = document.getElementById("img-pokemon");
const gengar = document.getElementById("gengar");


gengar.addEventListener("click", () => {
    nomePokemon.textContent = minhaEquipe[0].nome;
    imgPokemon.src = minhaEquipe[0].sprite;
})