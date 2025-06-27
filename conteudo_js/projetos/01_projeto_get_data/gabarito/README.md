# Projeto: CRUD Básico em Node.js

## Objetivo

Este projeto faz parte de um repositório didático para ajudar pessoas a aprenderem programação. Aqui, você irá praticar a manipulação de dados (CRUD: Create, Read, Update, Delete) usando apenas JavaScript e Node.js, **sem banco de dados real**.

---

## O que você vai aprender

- Como organizar um projeto Node.js modularizado
- Como criar, ler, atualizar e deletar dados em memória
- Como separar dados, funções e middlewares
- Como simular operações de backend

---

## Pré-requisitos

- Node.js instalado ([como instalar](https://nodejs.org/en/download/))
- Editor de código (VSCode recomendado)

---

## Como rodar o projeto

1. Navegue até a pasta do projeto:
   ```sh
   cd conteudo_js/projetos/01_projeto_get_data/01/src
   ```
2. Execute o arquivo principal:
   ```sh
   node index.js
   ```
3. Veja os resultados no terminal.

---

## Ordem das Tasks

Siga as tarefas abaixo para construir seu CRUD passo a passo:

### 1. Entenda a Estrutura
- Explore as pastas: `data/`, `functions/`, `middleware/`
- Veja como os dados estão organizados em `data/users.js` e `data/products.js`

### 2. Leitura de Dados
- Implemente funções para listar todos os usuários e produtos (`getAll`)
- Implemente função para buscar usuário/produto por ID (`getById`)

### 3. Criação de Dados
- Implemente função para criar novo usuário (`createUser`)
- Implemente função para criar novo produto (`createProduct`)

### 4. Atualização de Dados
- Implemente função para atualizar usuário por ID (`updateUserById`)
- Implemente função para atualizar produto por ID (`updateProductById`)

### 5. Remoção de Dados
- Implemente função para deletar usuário por ID (`deleteById`)
- Implemente função para deletar produto por ID (`deleteProductById`)

### 6. Testes
- No arquivo `index.js`, faça chamadas de exemplo para cada função e imprima os resultados no console.

### 7. Desafios Extras
- Adicione validações nos dados (ex: não permitir criar usuário sem email)
- Implemente middlewares para validação antes de criar/atualizar dados

---

## Dicas

- Use o console.log para acompanhar o que está acontecendo.
- Modifique os dados e funções para testar diferentes cenários.
- Consulte a documentação do Node.js sempre que tiver dúvidas.

---

## Próximos Passos

Quando dominar este CRUD, tente criar uma API REST usando Express e, depois, conecte com um banco de dados real!

---

Bons estudos e boa prática! 🚀 