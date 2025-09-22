const numeros = [32, 20, 5, 101, 28, 10];
const listaNomes = ["Jean", "Adriana", "Marcela", "Alberto"];
const notas = [4, 6, 10, 9];
const animais = [{ nome: "Leao" }, { nome: "Leoa" }, { nome: "Leopardo" }];

for (let index = 1; index <= 20; index++) {
  console.log(index);
}

for (const nome of listaNomes) {
  if (nome[0] === "A") {
    console.log(nome);
  }
}

const somaTotal = numeros.reduce((acc, numero) => acc + numero, 0);
console.log(somaTotal);

for (const numero of numeros) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}

let todasNotas = false;
for (const nota of notas) {
  if (nota > 6) {
    todasNotas = true;
  } else {
    todasNotas = false;
    break;
  }
}
console.log("Todas as notas sao maiores que 6?", todasNotas);

const verificarTodasNotas = notas.every((nota) => nota > 6);
console.log(verificarTodasNotas);

const seExisteMaior100 = numeros.some((numero) => numero > 100);
console.log(seExisteMaior100);

for (const animal of animais) {
  console.log(animal);
}

function recebeString(arrString) {
    const novoArr = []
    for (const animal of arrString) {
        novoArr.push(animal.toUpperCase())
    }

    return novoArr
}

console.log(recebeString(["leao", "macaco", "tubarao"]))

