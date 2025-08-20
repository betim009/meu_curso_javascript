const { saques, depositos } = require("./data.js");

/*
    Cria o nome
    Recebe parametros
    Deve Retornar sempre que possivel
    Deve Executar a funcao

    Console para exibir o resultado! 
*/

function getSaquesByUsario(id) {
  const saquesUsuario = [];
  for (const element of saques) {
    if (element.usuarioId === id) {
      saquesUsuario.push(element);
    }
  }
  return saquesUsuario;
}

function getTotais(usuarioId) {
  const saquesUsuario = [];
  for (const element of saques) {
    if (element.usuarioId === usuarioId) {
      saquesUsuario.push(element);
    }
  }

  const depositosUsuario = [];
  for (const element of depositos) {
    if (element.usuarioId === usuarioId) {
      depositosUsuario.push(element);
    }
  }

  let totalSaques = 0;
  for (const element of saquesUsuario) {
    totalSaques += element.valor;
  }

  let totalDepositos = 0;
  for (const element of depositosUsuario) {
    totalDepositos += element.valor;
  }

  return {
    depositos: depositosUsuario,
    saques: saquesUsuario,
    saldo: totalDepositos - totalSaques,
  };
}

console.log(getTotais(1));
console.log(getTotais(3));
console.log(getTotais(4));
