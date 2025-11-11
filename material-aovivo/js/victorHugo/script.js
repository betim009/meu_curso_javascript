const vetorPlanos = [];
const vetorPrecos = [];
const vetorQtdDias = [];
const vetorCodigo = [];

let start = true;
while (start) {
  const tipoPlano = prompt("Qual o tipo de plano ? ");
  vetorPlanos.push(tipoPlano);
  const preco = prompt("Qual o preco do plano ? ");
  vetorPrecos.push(preco);
  const qtdDias = prompt("Qual a quantidade de dias do treino ? ");
  vetorQtdDias.push(qtdDias);
  const codigo = prompt("Qual o o codigo do cliente ? ");
  vetorCodigo.push(codigo);

  const finalizar = prompt("Deseja encerar? ");
  if (finalizar !== "nao") start = false;
}

console.log(
    vetorPlanos,
    vetorCodigo,
    vetorPrecos,
    vetorQtdDias
)