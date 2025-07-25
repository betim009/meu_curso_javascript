// Dados personagens
const personagem = {nome: "Ar2", kill:  0, death: 0, assist: 0}
const personagem1 = {nome: "quaCK", kill: 0, death: 0, assist: 0}

// Funcoes para os personagens
function addKill(objeto){
    objeto.kill += 1
    return objeto
}

function addDeath(objeto){
    objeto.death += 1
    return objeto
}

function addAssist(objeto){
    objeto.assist += 1
    return objeto
}

function calcKDA(objeto){
    if (!objeto.death) return (objeto.kill + objeto.assist)  
    const KDA = (objeto.kill + objeto.assist) / objeto.death
    return KDA
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

console.log(
    calcKDA(personagem)
)