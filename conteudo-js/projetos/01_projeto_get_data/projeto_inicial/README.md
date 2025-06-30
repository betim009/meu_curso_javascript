# Projeto: CRUD Básico em Node.js — Ponto de Partida

## Sobre esta pasta

Esta pasta contém os **arquivos iniciais** para você praticar a construção de um CRUD (Create, Read, Update, Delete) em Node.js, manipulando dados em memória, sem banco de dados real.

O objetivo é que você implemente as funções e a lógica seguindo o roteiro abaixo. Se ficar travado, consulte a pasta `gabarito` para ver o gabarito completo e comparar com sua solução.

---

## O que você vai praticar

- Organização de um projeto Node.js modularizado
- Criação, leitura, atualização e remoção de dados em memória
- Separação de dados, funções e middlewares
- Simulação de operações de backend

---

## Pré-requisitos

- Node.js instalado ([como instalar](https://nodejs.org/en/download/))
- Editor de código (VSCode recomendado)

---

## Como começar

1. Navegue até a pasta do projeto:
   ```sh
   cd conteudo_js/projetos/01_projeto_get_data/projeto_inicial/src
   ```
2. Abra os arquivos no editor e siga o roteiro de tasks abaixo.
3. Para testar seu código, execute:
   ```sh
   node index.js
   ```
4. Veja os resultados no terminal.

---

## Estrutura dos arquivos

- `data.js`: Contém um array de usuários para você manipular. Não altere esse arquivo, apenas utilize os dados.
- `scripts.js`: Aqui você deve implementar as funções CRUD. Elas já estão exportadas, mas estão vazias. Implemente cada uma conforme o roteiro.
- `index.js`: Ponto de entrada para testar suas funções. Já está limpo, pronto para você importar e chamar suas funções.

---

## Roteiro de Tasks — Passo a Passo

### 1. Entenda a Estrutura
- Explore os arquivos e pastas fornecidos.
- Veja como os dados estão organizados em `data.js` (um array de objetos, cada um representando um usuário).

### 2. Implemente as Funções CRUD em `scripts.js`

#### a) getData
- Deve retornar o array completo de usuários.
- Exemplo de uso:
  ```js
  const users = getData();
  console.log(users);
  ```

#### b) getById
- Deve receber um `id` e retornar o usuário correspondente.
- Exemplo de uso:
  ```js
  const user = getById(1);
  console.log(user);
  ```
- Dica: Use o método `find` do array.

#### c) createUser
- Deve receber um objeto com as propriedades `name`, `email` e `password` e adicionar ao array de usuários.
- Gere um novo `id` incremental.
- Exemplo de uso:
  ```js
  const novoUsuario = createUser({ name: 'João', email: 'joao@email.com', password: '123' });
  console.log(novoUsuario);
  ```
- Dica: Valide se todos os campos foram preenchidos.

#### d) updateById
- Deve receber um `id` e um objeto com os dados a serem atualizados.
- Atualize apenas o usuário correspondente.
- Exemplo de uso:
  ```js
  const usuarioAtualizado = updateById(1, { name: 'Maria', email: 'maria@email.com', password: 'abc' });
  console.log(usuarioAtualizado);
  ```
- Dica: Use o método `findIndex` ou `find` para localizar o usuário.

---

## Como testar suas funções

- Importe as funções no `index.js`:
  ```js
  const { getData, getById, createUser, updateById } = require('./scripts');
  ```
- Chame cada função e use `console.log` para ver o resultado no terminal.
- Teste diferentes cenários: buscar usuário inexistente, criar usuário sem email, atualizar usuário que não existe, etc.

---

## Dicas e dúvidas comuns

- **Onde implementar?**
  - Implemente tudo no arquivo `scripts.js`.
- **Como saber se está funcionando?**
  - Use `console.log` no `index.js` para ver o retorno das funções.
- **Posso alterar o arquivo de dados?**
  - Não. Apenas utilize o array já fornecido.
- **Como garantir que o id é único?**
  - Gere o novo id como `data.length + 1` ou busque o maior id existente e some 1.
- **Como tratar erros?**
  - Retorne mensagens claras, como "Usuário não encontrado" ou "Dados inválidos".
- **Fiquei travado!**
  - Consulte a pasta `gabarito` para ver a solução completa.

---

## Sugestões para ir além

- Implemente validações mais robustas (ex: não permitir emails duplicados).
- Crie funções para deletar usuários.
- Tente transformar seu CRUD em uma API REST usando Express.
- Explique sua solução para outra pessoa ou escreva um resumo do que aprendeu.

---

Bons estudos e boa prática! 🚀 