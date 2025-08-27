const livros = require("./livros");

// RESGATAR UM LIVRO POR ID
function encontrarLivroId(id) {
  for (const element of livros) {
    if (element.id === id) {
      return element;
    }
  }
  return "Nao existe esse livro por id";
}

// FAZER o RESGATAR POR NOME
function encontrarLivroNome(nome) {
  for (const element of livros) {
    if (element.titulo === nome) {
      return element;
    }
  }
  return "Nao existe esse livro por nome";
}

// FAZER o RESGATAR POR PREÇO
function encontraLivroPreco(preco) {
  for (const element of livros) {
    if (element.preco === preco) {
      return element;
    }
  }
  return "Nao existe esse livro por preco";
}

// FAZER A FUNCAO DE ADICIONAR UM NOVO LIVRO
function adicionarLivro(livro) {
  // Verificando se livro eh um objeto
  if (typeof livro !== 'object') {
    return "Nao é possivel cadastrar"
  }

  // Verificando se livro.id nao existe
  if (!livro.id || !livro.titulo || !livro.preco || !livro.categoria){
    return "Nao é possivel cadastrar"
  }

  // Verificando se frete nao eh true ou false
  if (livro.frete !== false && livro.frete !== true) {
    return "Nao é possivel cadastrar"
  }

  livros.push(livro);
}

function alterarIdLivro(id, novoId) {
  for (const element of livros) {
    if (element.id === id) {
      element.id = novoId
      return "Id do livro alterado."
    }
  }

  return "Nao encontramos livro com esse id"
}

function alterarNomeLivro(id, novoTitulo) {
  for (const element of livros) {
    if (element.id === id) {
      element.titulo = novoTitulo
      return "Titulo do livro alterado."
    }
  }

  return "Nao encontramos o livro com esse id"
}

module.exports = {
  encontrarLivroId,
  encontrarLivroNome,
  encontraLivroPreco,
  adicionarLivro,
  alterarIdLivro,
  alterarNomeLivro
};
