const produtos = [
  { nome: "Arroz", preco: 5.5, unidade: "kg", estoque: 20 },
  { nome: "Feijão", preco: 6.0, unidade: "kg", estoque: 15 },
  { nome: "Leite", preco: 4.0, unidade: "litro", estoque: 30 },
  { nome: "Ovos", preco: 12.0, unidade: "dúzia", estoque: 10 },
  { nome: "Café", preco: 8.5, unidade: "pacote", estoque: 25 },
];

const supermercado = { 
  produtos: ["Arroz", "Feijão", "Leite", "Ovos", "Café"],
  precos: [5.5, 6.0, 4.0, 12.0, 8.5],
  unidades: ["kg", "kg", "litro", "dúzia", "pacote"],
  estoque: [20, 15, 30, 10, 25],
};

// 1. 
console.log(produtos[0].nome)
// 2.
console.log(produtos[2].preco)
// 3. 
produtos[2].estoque = 10
console.log(produtos[2])
// 4.
supermercado.unidades[4] = "g"
console.log(supermercado.unidades[4])
// 5.
console.log(
    `Produto: ${supermercado.produtos[2]} | Unidade: ${supermercado.unidades[2]}`
)
// 6. 
produtos.forEach((element) => {
    console.log(element.nome)
})
// 7.
for (let index = 0; index < supermercado.unidades.length; index++) {
    const element = supermercado.unidades[index];
    console.log(element)
}


// OI