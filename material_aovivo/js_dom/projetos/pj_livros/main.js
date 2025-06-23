const {
  encontraLivroPreco,
  encontrarLivroId,
  encontrarLivroNome,
  adicionarLivro
} = require(".");
const livros = require("./livros");


// Arquivo responsavel por executar as funcoes.
adicionarLivro({titulo: ""})
console.log(livros)