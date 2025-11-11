function controleEstoque(produtos, quantidades) {
  const verificaCompleto = quantidades.every((element) => element !== 0);

  if (verificaCompleto) {
    console.log("Estoque Completo");
  } else {
    quantidades.forEach((element, index) => {
      if (element === 0) console.log(`${produtos[index]} Vazio`);
    });
  }
}
console.log("Saida 1");
controleEstoque(["Mouse", "Teclado"], [0, 0]);

console.log("Saida 2");
controleEstoque(["Mouse", "Teclado"], [10, 10]);
