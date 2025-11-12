const vetor1 = [6, 8, 10, 8];
const vetor2 = [6, 10, 10, 8];
const medias = [];

// estrutura de repeticao
for (let index = 0; index < vetor1.length; index++) {
  const nota1 = vetor1[index];
  const nota2 = vetor2[index];

  const media = (nota1 + nota2) / 2;
  medias.push(media);
}

for (let i = 0; i < medias.length - 1; i++) {
  for (let j = 0; j < medias.length - 1 - i; j++) {
    if (medias[j] > medias[j + 1]) {
      let temp = medias[j];
      medias[j] = medias[j + 1];
      medias[j + 1] = temp;
    }
  }
}

for (let index = 0; index < vetor1.length; index++) {
    document.write(`${medias[index]} `)
}