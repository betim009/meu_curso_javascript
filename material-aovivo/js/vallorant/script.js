// Dados personagens
const personagem = {nome: "Ar2", kill:  0, death: 0, assist: 0}
const personagem1 = {nome: "quaCK", kill: 0, death: 0, assist: 0}

// Funcoes para os personagens
function addKill(objeto){
    objeto.kill += 1
    return objeto
}

function addDeath(objeto){
    return null
}

function addAssist(objeto){
    return null
}

function calcKDA(objeto){
    return null
}

// Executando funcoes
addKill(personagem)
addKill(personagem)
addKill(personagem1)

// Exibindo resultado
console.table(
    personagem
)

console.table(
    personagem1
)