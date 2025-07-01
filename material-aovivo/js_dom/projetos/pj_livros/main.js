const {
  encontraLivroPreco,
  encontrarLivroId,
  encontrarLivroNome,
  adicionarLivro,
} = require(".");

const livros = require("./livros");

// Padrao Correto
adicionarLivro({
  id: 7,
  titulo: "Turma da monica",
  preco: 25.5,
  categoria: "Gibi",
  frete: false,
});

adicionarLivro({
  id: 8, 
  titulo: "Alberto"
})

console.log(livros)
