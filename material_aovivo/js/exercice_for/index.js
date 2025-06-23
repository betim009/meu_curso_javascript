// Exercício: Números Primos de 2 a 50
// Enunciado:
// Um número primo é um número natural maior que 1 que só pode ser dividido por 1 e por ele mesmo, sem deixar resto. Por exemplo, 2, 3, 5 e 7 são números primos, pois não podem ser divididos por nenhum outro número além de 1 e deles mesmos.

// Tarefa:
// Crie um programa em JavaScript que exiba no console todos os números primos entre 2 e 50 (inclusive).

// Dica:
// Você pode usar dois laços for:

// O primeiro para percorrer cada número de 2 até 50.
// O segundo para verificar se o número atual é primo.

for (let num = 2; num <= 50; num++) {
  let primo = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    console.log(num);
  }
}