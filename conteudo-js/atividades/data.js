const produtos = [
  { nome: "Arroz", preco: 5.50, unidade: "kg", estoque: 20 },
  { nome: "Feijão", preco: 6.00, unidade: "kg", estoque: 15 },
  { nome: "Leite", preco: 4.00, unidade: "litro", estoque: 30 },
  { nome: "Ovos", preco: 12.00, unidade: "dúzia", estoque: 10 },
  { nome: "Café", preco: 8.50, unidade: "pacote", estoque: 25 }
];

const supermercado = {
  produtos: ["Arroz", "Feijão", "Leite", "Ovos", "Café"],
  precos: [5.50, 6.00, 4.00, 12.00, 8.50],
  unidades: ["kg", "kg", "litro", "dúzia", "pacote"],
  estoque: [20, 15, 30, 10, 25]
};

module.exports = {
    produtos,
    supermercado    
} 