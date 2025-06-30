const livros = require("./livros")

// RESGATAR UM LIVRO POR ID
function encontrarLivroId(id) {
  for (const element of livros) {
    if (element.id === id) {
      return element
    }
  }
  return "Nao existe esse livro por id"
}

// FAZER o RESGATAR POR NOME
function encontrarLivroNome(nome) {
    for (const element of livros) {
    if (element.titulo === nome) {
      return element
    }
  }
  return "Nao existe esse livro por nome"
}


// FAZER o RESGATAR POR PREÇO
function encontraLivroPreco(preco) {
    for (const element of livros) {
    if (element.preço === preco) {
      return element
    }
  }
  return "Nao existe esse livro por preco"
}

// FAZER A FUNCAO DE ADICIONAR UM NOVO LIVRO
function adicionarLivro(livro) {
    livros.push(livro)
}

module.exports = {
    encontrarLivroId,
    encontrarLivroNome,
    encontraLivroPreco,
    adicionarLivro
}