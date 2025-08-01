const vendedores = [
    {
        id: 1,
        nome: "Ana Silva",
        email: "ana.silva@email.com",
        valor_venda: 1500.50,
        data: "2025-07-10"
    },
    {
        id: 2,
        nome: "Ana Silva",
        email: "carlos.souza@email.com",
        valor_venda: 2300.00,
        data: "2025-07-09"
    },
    {
        id: 3,
        nome: "Maria Oliveira",
        email: "maria.oliveira@email.com",
        valor_venda: 1800.75,
        data: "2025-07-08"
    }
]

const novaLista = []
for (const element of vendedores) {
    if (element.valor_venda > 1700) {
        novaLista.push(element)
    }
}

let encontrar = ""
for (const element of vendedores) {
    if (element === "Ana Silva") {
        encontrar = element
    }
}

const newArray = vendedores.filter(element => element.valor_venda > 1700)
const findSeller = vendedores.find(element => element.nome === "Ana Silva")
const findLastSeller = vendedores.findLast(element => element.nome === "Ana Silva")

console.log(findLastSeller)