const minhaEquipe = [
  {
    id: 1,
    nome: "Gengar",
    imagem: "https://img.pokemondb.net/sprites/x-y/normal/gengar.png",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    move1: "Shadow Punch",
    move2: "Lick",
    move3: "Dark Pulse",
    move4: "Dream Eater",
    hp: 60,
  },
  {
    id: 2,
    nome: "Dragonite",
    imagem:
      "https://img.pokemondb.net/sprites/scarlet-violet/normal/dragonite.png",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
    move1: "Dragon Claw",
    move2: "Thunder Punch",
    move3: "Hyper Beam",
    move4: "Outrage",
    hp: 91,
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
const hp = document.getElementById("hp");

// GENGAR
const gengar = document.getElementById("gengar");
// Dragonite
const dragonite = document.getElementById("dragonite");

const labelMove1 = document.getElementById("move1");
const labelMove2 = document.getElementById("move2");
const labelMove3 = document.getElementById("move3");
const labelMove4 = document.getElementById("move4");
const inputGolpe1 = document.getElementById("golpe1");
const inputGolpe2 = document.getElementById("golpe2");
const inputGolpe3 = document.getElementById("golpe3");
const inputGolpe4 = document.getElementById("golpe4");

gengar.addEventListener("click", () => {
  nomePokemon.textContent = minhaEquipe[0].nome;
  imgPokemon.src = minhaEquipe[0].sprite;
  hp.textContent = `${minhaEquipe[0].hp} HP`;
  labelMove1.textContent = minhaEquipe[0].move1;
  labelMove2.textContent = minhaEquipe[0].move2;
  labelMove3.textContent = minhaEquipe[0].move3;
  labelMove4.textContent = minhaEquipe[0].move4;
  inputGolpe1.value = minhaEquipe[0].move1;
  inputGolpe2.value = minhaEquipe[0].move2;
  inputGolpe3.value = minhaEquipe[0].move3;
  inputGolpe4.value = minhaEquipe[0].move4;
});

dragonite.addEventListener("click", () => {
  nomePokemon.textContent = minhaEquipe[1].nome;
  imgPokemon.src = minhaEquipe[1].sprite;
  hp.textContent = `${minhaEquipe[1].hp} HP`;
  labelMove1.textContent = minhaEquipe[1].move1;
  labelMove2.textContent = minhaEquipe[1].move2;
  labelMove3.textContent = minhaEquipe[1].move3;
  labelMove4.textContent = minhaEquipe[1].move4;
  inputGolpe1.value = minhaEquipe[1].move1;
  inputGolpe2.value = minhaEquipe[1].move2;
  inputGolpe3.value = minhaEquipe[1].move3;
  inputGolpe4.value = minhaEquipe[1].move4;
});
