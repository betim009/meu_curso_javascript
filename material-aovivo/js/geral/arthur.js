const { usuarios, saques, depositos } = require("./data.js");

// 1
// console.log(usuarios[0])
// console.log(usuarios[1])
// console.log(usuarios[2])

// console.log(saques[0])
// console.log(saques[1])
// console.log(saques[2])

// console.log(depositos[0])
// console.log(depositos[1])
// console.log(depositos[2])

// 2 
// console.log(usuarios[usuarios.length - 1])
// console.log(saques[saques.length - 1])
// console.log(depositos[depositos.length - 1])

// 3
// console.log(usuarios[usuarios.length - 2])
// console.log(saques[saques.length - 2])
// console.log(depositos[depositos.length - 2])

// 4
// console.log(usuarios[3])
// usuarios[3].nome = "Alberto"
// usuarios[3].idade = 30
// usuarios[3].email = "alberto@email.com"
// console.log(usuarios[3])

// 5
// console.log(usuarios[1].status)
// usuarios[1].status = "inativo"
// console.log(usuarios[1].status)

// 6
// usuarios[usuarios.length] = {
//   id: 99, 
//   nome: 'Novo', 
//   idade: 20, 
//   email: 'novo@ex.com', 
//   status: 'ativo'
// };
// usuarios.length = usuarios.length - 1;

// 7
// const primeiroUsuario = `${usuarios[0].nome} - ${usuarios[0].email}`
// const ultimoUsuario = `${usuarios[usuarios.length - 1].nome} - ${usuarios[usuarios.length - 1].email}`


// 8
// const emailAntigo = usuarios[2].email;
// usuarios[2].email = "novo@ex.com";
// usuarios[2].email = emailAntigo;

// 9 
// const primeiroDeposito = depositos[0].valor;
// const primeiroSaque = saques[0].valor;
// const diferenca = primeiroDeposito - primeiroSaque;
// console.log(diferenca);

// 10
// console.log(depositos[2].status)
// depositos[2].status = "aprovado"
// console.log(depositos[2].status)

// 11
// console.log(saques[1].status)
// saques[1].status = "aprovado"
// console.log(saques[1].status)

// 12 
const resumo1 = {
    usuario: usuarios[0].nome,
    primeiroDeposito: depositos[0].valor,
    primeiroSaque: saques[0].valor
}

// 13
const idsUsuarios = [usuarios[0].id, usuarios[5].id, usuarios[9].id];

// 14
const saldoUsuario1 = (depositos[0].valor + depositos[12].valor) - (saques[0].valor + saques[12].valor)

// 15
const antigoPrimeiro = usuarios[0].nome
const antigoSegundo = usuarios[1].nome

usuarios[0].nome = antigoSegundo
usuarios[1].nome = antigoPrimeiro

usuarios[0].nome = antigoPrimeiro
usuarios[1].nome = antigoSegundo

console.log(usuarios[0])