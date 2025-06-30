# Exercício: Sistema de Biblioteca com Classes JavaScript

## Objetivo
Criar um sistema básico de biblioteca usando classes JavaScript para gerenciar livros, usuários e empréstimos.

## Requisitos

1. Crie uma classe `Livro` com as seguintes propriedades:
   - id (número único)
   - titulo
   - autor
   - anoPublicacao
   - disponivel (booleano, inicialmente true)

2. Crie uma classe `Usuario` com as seguintes propriedades:
   - id (número único)
   - nome
   - email
   - livrosEmprestados (array, inicialmente vazio)

3. Crie uma classe `Biblioteca` que:
   - Armazene coleções de livros e usuários
   - Tenha métodos para:
     - Adicionar livros
     - Adicionar usuários
     - Emprestar um livro
     - Devolver um livro
     - Buscar livros por autor
     - Listar livros emprestados por um usuário específico

4. Implemente validações apropriadas:
   - Não permitir empréstimo de livros já emprestados
   - Não permitir devolução de livros que não foram emprestados pelo usuário
   - Limitar o número de livros que um usuário pode pegar emprestado (máximo 3)

## Instruções

1. Defina todas as classes necessárias
2. Implemente todos os métodos requeridos
3. Crie uma demonstração que:
   - Adicione alguns livros e usuários à biblioteca
   - Empreste alguns livros
   - Devolva um livro
   - Liste os livros de um autor específico
   - Liste os livros emprestados por um usuário

## Dicas
- Use métodos de array como `find()`, `filter()` e `map()` para manipular as coleções
- Considere usar propriedades privadas para dados internos
- Implemente métodos getter para propriedades que não devem ser modificadas diretamente

## Tempo estimado
60 minutos para completar o exercício básico