const { saques } = require("./data.js")


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
            saquesUsuario.push(element)
        }
    }
    return saquesUsuario
};

console.log(getSaquesByUsario(5))
console.log(getSaquesByUsario(2))
