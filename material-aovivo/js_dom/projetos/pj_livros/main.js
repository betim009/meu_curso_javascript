const {
  encontraLivroPreco,
  encontrarLivroId,
  encontrarLivroNome,
  adicionarLivro,
  alterarIdLivro,
  alterarNomeLivro
} = require(".");

const livros = require("./livros");

// Todas execucoes de funcoes devem ser instancias

// Padrao Correto do envio dos dados
const addLivro1 = adicionarLivro({
  id: 10,
  titulo: "Turma da monica",
  preco: 25.5,
  categoria: "Gibi",
  frete: false,
});

// Padrao errado do envio dos dados
const addLivr2 = adicionarLivro({
  id: 8, 
  titulo: "Alberto"
}); 

// Alterar o id do livro
const alterarId = alterarIdLivro(10, 7);

// Alterar o nome do livro
const alterarNome = alterarNomeLivro(5, "Mundo de BOB");

// Deve ser sempre a ultima linha do arquivo
console.log(livros)