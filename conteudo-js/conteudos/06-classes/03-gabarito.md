# Gabarito: Sistema de Biblioteca com Classes JavaScript

Aqui está a solução completa para o exercício proposto:

```javascript
class Livro {
    constructor(id, titulo, autor, anoPublicacao) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }
    
    // Método para exibir informações do livro
    info() {
        return `${this.titulo} (${this.anoPublicacao}) por ${this.autor} - ${this.disponivel ? 'Disponível' : 'Emprestado'}`;
    }
}

class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
    }
    
    // Verificar se o usuário pode pegar mais livros emprestados
    podePegarEmprestado() {
        return this.livrosEmprestados.length < 3;
    }
    
    // Adicionar um livro à lista de empréstimos do usuário
    adicionarLivroEmprestado(livro) {
        if (!this.podePegarEmprestado()) {
            return false;
        }
        this.livrosEmprestados.push(livro.id);
        return true;
    }
    
    // Remover um livro da lista de empréstimos do usuário
    removerLivroEmprestado(livroId) {
        const index = this.livrosEmprestados.indexOf(livroId);
        if (index !== -1) {
            this.livrosEmprestados.splice(index, 1);
            return true;
        }
        return false;
    }
    
    // Verificar se o usuário está com determinado livro
    temLivroEmprestado(livroId) {
        return this.livrosEmprestados.includes(livroId);
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.proximoIdLivro = 1;
        this.proximoIdUsuario = 1;
    }
    
    // Adicionar um novo livro à biblioteca
    adicionarLivro(titulo, autor, anoPublicacao) {
        const livro = new Livro(this.proximoIdLivro++, titulo, autor, anoPublicacao);
        this.livros.push(livro);
        return livro;
    }
    
    // Adicionar um novo usuário à biblioteca
    adicionarUsuario(nome, email) {
        const usuario = new Usuario(this.proximoIdUsuario++, nome, email);
        this.usuarios.push(usuario);
        return usuario;
    }
    
    // Buscar um livro pelo ID
    buscarLivroPorId(id) {
        return this.livros.find(livro => livro.id === id);
    }
    
    // Buscar um usuário pelo ID
    buscarUsuarioPorId(id) {
        return this.usuarios.find(usuario => usuario.id === id);
    }
    
    // Emprestar um livro para um usuário
    emprestarLivro(livroId, usuarioId) {
        const livro = this.buscarLivroPorId(livroId);
        const usuario = this.buscarUsuarioPorId(usuarioId);
        
        if (!livro || !usuario) {
            return { sucesso: false, mensagem: 'Livro ou usuário não encontrado' };
        }
        
        if (!livro.disponivel) {
            return { sucesso: false, mensagem: 'Livro não está disponível para empréstimo' };
        }
        
        if (!usuario.podePegarEmprestado()) {
            return { sucesso: false, mensagem: 'Usuário já atingiu o limite de livros emprestados' };
        }
        
        livro.disponivel = false;
        usuario.adicionarLivroEmprestado(livro);
        
        return { sucesso: true, mensagem: `Livro "${livro.titulo}" emprestado com sucesso para ${usuario.nome}` };
    }
    
    // Devolver um livro
    devolverLivro(livroId, usuarioId) {
        const livro = this.buscarLivroPorId(livroId);
        const usuario = this.buscarUsuarioPorId(usuarioId);
        
        if (!livro || !usuario) {
            return { sucesso: false, mensagem: 'Livro ou usuário não encontrado' };
        }
        
        if (!usuario.temLivroEmprestado(livroId)) {
            return { sucesso: false, mensagem: 'Este usuário não está com este livro emprestado' };
        }
        
        livro.disponivel = true;
        usuario.removerLivroEmprestado(livroId);
        
        return { sucesso: true, mensagem: `Livro "${livro.titulo}" devolvido com sucesso por ${usuario.nome}` };
    }
    
    // Buscar livros por autor
    buscarLivrosPorAutor(autor) {
        return this.livros.filter(livro => 
            livro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }
    
    // Listar livros emprestados por um usuário
    listarLivrosEmprestadosPorUsuario(usuarioId) {
        const usuario = this.buscarUsuarioPorId(usuarioId);
        
        if (!usuario) {
            return [];
        }
        
        return usuario.livrosEmprestados.map(livroId => 
            this.buscarLivroPorId(livroId)
        );
    }
    
    // Listar todos os livros disponíveis
    listarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
    
    // Listar todos os livros emprestados
    listarLivrosEmprestados() {
        return this.livros.filter(livro => !livro.disponivel);
    }
}

// Demonstração do funcionamento do sistema

// Criar a biblioteca
const biblioteca = new Biblioteca();

// Adicionar livros
const livro1 = biblioteca.adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
const livro2 = biblioteca.adicionarLivro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997);
const livro3 = biblioteca.adicionarLivro("1984", "George Orwell", 1949);
const livro4 = biblioteca.adicionarLivro("O Hobbit", "J.R.R. Tolkien", 1937);
const livro5 = biblioteca.adicionarLivro("Dom Quixote", "Miguel de Cervantes", 1605);

// Adicionar usuários
const usuario1 = biblioteca.adicionarUsuario("João Silva", "joao@email.com");
const usuario2 = biblioteca.adicionarUsuario("Maria Santos", "maria@email.com");

// Emprestar livros
console.log(biblioteca.emprestarLivro(1, 1)); // Empresta "O Senhor dos Anéis" para João
console.log(biblioteca.emprestarLivro(2, 1)); // Empresta "Harry Potter" para João
console.log(biblioteca.emprestarLivro(3, 2)); // Empresta "1984" para Maria
console.log(biblioteca.emprestarLivro(4, 2)); // Empresta "O Hobbit" para Maria

// Tentar emprestar mais de 3 livros para um usuário
console.log(biblioteca.emprestarLivro(5, 1)); // Deve falhar (João já tem 2 livros)
console.log(biblioteca.emprestarLivro(5, 2)); // Deve funcionar (Maria tem 2 livros)

// Devolver um livro
console.log(biblioteca.devolverLivro(1, 1)); // João devolve "O Senhor dos Anéis"

// Tentar devolver um livro que o usuário não pegou emprestado
console.log(biblioteca.devolverLivro(3, 1)); // Deve falhar (João não está com "1984")

// Buscar livros por autor
console.log("Livros de Tolkien:");
const livrosTolkien = biblioteca.buscarLivrosPorAutor("Tolkien");
livrosTolkien.forEach(livro => console.log(livro.info()));

// Listar livros emprestados por um usuário
console.log("\nLivros emprestados para João:");
const livrosJoao = biblioteca.listarLivrosEmprestadosPorUsuario(1);
livrosJoao.forEach(livro => console.log(livro.info()));

console.log("\nLivros emprestados para Maria:");
const livrosMaria = biblioteca.listarLivrosEmprestadosPorUsuario(2);
livrosMaria.forEach(livro => console.log(livro.info()));

// Listar todos os livros disponíveis
console.log("\nLivros disponíveis:");
const livrosDisponiveis = biblioteca.listarLivrosDisponiveis();
livrosDisponiveis.forEach(livro => console.log(livro.info()));
```

## Explicação da Solução

### Classe `Livro`
- Armazena todas as informações necessárias sobre um livro
- Tem uma propriedade `disponivel` que controla se o livro pode ser emprestado
- Inclui um método `info()` para formatar as informações do livro para exibição

### Classe `Usuario`
- Armazena dados do usuário e mantém uma lista de IDs dos livros emprestados
- Implementa métodos para:
  - Verificar se o usuário pode pegar mais livros (`podePegarEmprestado()`)
  - Adicionar um livro à lista de empréstimos (`adicionarLivroEmprestado()`)
  - Remover um livro da lista de empréstimos (`removerLivroEmprestado()`)
  - Verificar se tem um livro específico emprestado (`temLivroEmprestado()`)

### Classe `Biblioteca`
- Gerencia as coleções de livros e usuários
- Implementa IDs autoincrementais para livros e usuários
- Fornece métodos para todas as operações necessárias:
  - Adicionar livros e usuários
  - Buscar livros e usuários por ID
  - Emprestar e devolver livros com validações apropriadas
  - Buscar livros por autor
  - Listar livros emprestados por um usuário
  - Listar todos os livros disponíveis ou emprestados

### Considerações de Design
1. **Encapsulamento**: Cada classe gerencia seus próprios dados
2. **Validação**: Todos os métodos incluem validações para garantir operações seguras
3. **Feedback**: Os métodos retornam objetos de resultado com mensagens claras
4. **Autoincrementos**: IDs são gerados automaticamente para evitar duplicatas
5. **Busca Flexível**: A busca por autor é case-insensitive e busca correspondências parciais

### Melhorias Possíveis
- Adicionar métodos para persistência de dados (salvar em JSON/localStorage)
- Implementar categorias para livros
- Adicionar sistema de reservas de livros
- Implementar datas de empréstimo e devolução com cálculo de multas
- Usar propriedades privadas (#) para melhor encapsulamento