const { usuarios, saques, depositos } = require("./data.js");

let contador = 0;
const usuariosInativos = [];

for (const element of usuarios) {
    if (element.status === "inativo") {
        contador += 1
        usuariosInativos.push(element)
    }
}

const inativos = usuarios.filter(element => element.status === "inativo");

let totalSaques = 0;
for (const element of saques) {
    if (element.usuarioId === 2) {
        totalSaques += element.valor
    }
}

console.log(totalSaques)
