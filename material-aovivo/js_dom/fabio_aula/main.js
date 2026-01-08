/*
    Os seletores mais importantes:
    - Id:
        - Deve e Somente pode ser utilizado uma unica vez
    - Class
        - Pode ser utilizado e repetido quantas vezes for necessario
*/

const inputNome = document.getElementById("input-nome");
const inputNota1 = document.getElementById("input-nota1");
const inputNota2 = document.getElementById("input-nota2");
const myInputs = document.querySelectorAll(".my-input");

const divResultado = document.getElementById("resultado");

const bntCalcular = document.getElementById("btn-calcular");
const bntLimpar = document.getElementById("btn-limpar");

bntCalcular.addEventListener("click", () => {
  const nota1 = Number(inputNota1.value);
  const nota2 = Number(inputNota2.value);

  const nomeAluno = inputNome.value;

  if (nota1 < 0 || nota1 > 10) {
    return alert("Valor invalido para as nota 1");
  }

  if (nota2 < 0 || nota2 > 10) {
    return alert("Valor invalido para as nota 1");
  }

  const media = (nota1 + nota2) / 2;

  divResultado.innerHTML += `
    <p>O aluno(a) ${nomeAluno} teve a media de: ${media}</p>
  `;
});

bntLimpar.addEventListener("click", () => {
  for (const input of myInputs) {
    input.value = ""
  }
});
