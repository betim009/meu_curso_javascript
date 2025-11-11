import { minhaEquipe } from "./minhaEquipe.js";

const nomePokemon = document.getElementById("nome-pokemon");
const imgPokemon = document.getElementById("img-pokemon");
const hp = document.getElementById("hp");
const btnPokemons = document.getElementById("btn-pokemons");
const btnCombat = document.getElementById("btn-combat");
const painelPokemons = document.getElementById("painel-pokemons");
const painelGolpes = document.getElementById("painel-golpes");

// Gengar
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

btnPokemons.addEventListener("click", () => {
  if (painelPokemons.hidden === false) {
    painelPokemons.hidden = true;
  } else {
    painelPokemons.hidden = false;
  }
});

btnCombat.addEventListener("click", () => {
  if (painelGolpes.hidden === false) {
    painelGolpes.hidden = true;
  } else {
    painelGolpes.hidden = false;
  }
});
