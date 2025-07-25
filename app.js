const order = [
  { nome: "Hambúrguer", quantidade: 10, preco: 12.5 },
  { nome: "Cachorro-quente", quantidade: 15, preco: 8.0 },
  { nome: "Batata Frita", quantidade: 20, preco: 6.5 },
  { nome: "Refrigerante", quantidade: 25, preco: 5.0 },
  { nome: "Milkshake", quantidade: 12, preco: 10.0 },
];

// Calcular o preco FINAL

function valorFinal() {
  let valor = 0; // ESTADO
  // const [valor, setValor] = useState(0)
  order.forEach((e) => {
    valor += e.quantidade * e.preco;
    // setValor[valor += e.quantidade * e.preco]
  });

  return valor;
}

const resultado = order.reduce((acc, e) => e.quantidade * e.preco + acc, 0);
// setCheckout(resultado)
