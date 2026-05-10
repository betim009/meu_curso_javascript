# Gabarito — HTML Semântico

---

## Exercício 1 — Estrutura básica de página

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Blog</title>
</head>
<body>

  <header>
    <h1>Meu Blog de Tecnologia</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Artigos</a></li>
        <li><a href="#">Sobre</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Como aprender JavaScript em 2025</h2>
      <p>JavaScript é a linguagem mais popular da web...</p>
    </article>

    <aside>
      <h3>Artigos relacionados</h3>
      <ul>
        <li><a href="#">Introdução ao DOM</a></li>
        <li><a href="#">CSS Flexbox na prática</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Meu Blog. Todos os direitos reservados.</p>
  </footer>

</body>
</html>
```

---

## Exercício 2 — Hierarquia de títulos

```html
<main>
  <h1>Guia de JavaScript para Iniciantes</h1>

  <section>
    <h2>Variáveis e Tipos de Dados</h2>
    <h3>O que é uma variável?</h3>
    <p>Uma variável é um espaço na memória para guardar um valor...</p>
    <h3>Tipos de dados primitivos</h3>
    <p>JavaScript tem 7 tipos primitivos: string, number, boolean...</p>
  </section>

  <section>
    <h2>Estruturas de Controle</h2>
    <h3>O comando if/else</h3>
    <p>O if permite tomar decisões no código...</p>
    <h3>Loops: for e while</h3>
    <p>Loops repetem um bloco de código múltiplas vezes...</p>
  </section>
</main>
```

---

## Exercício 3 — Listas e tabela

```html
<main>
  <h1>var, let e const em JavaScript</h1>

  <section>
    <h2>Características de cada um</h2>

    <h3>var</h3>
    <ul>
      <li>Escopo de função (não respeita blocos)</li>
      <li>Pode ser reatribuído</li>
      <li>Pode ser redeclarado</li>
      <li>Sofre hoisting (sobe para o topo)</li>
    </ul>

    <h3>let</h3>
    <ul>
      <li>Escopo de bloco</li>
      <li>Pode ser reatribuído</li>
      <li>Não pode ser redeclarado</li>
    </ul>

    <h3>const</h3>
    <ul>
      <li>Escopo de bloco</li>
      <li>Não pode ser reatribuído</li>
      <li>Não pode ser redeclarado</li>
    </ul>
  </section>

  <section>
    <h2>Comparativo</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Palavra-chave</th>
          <th>Escopo</th>
          <th>Reatribuição</th>
          <th>Redeclaração</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>var</td>
          <td>Função</td>
          <td>Sim</td>
          <td>Sim</td>
        </tr>
        <tr>
          <td>let</td>
          <td>Bloco</td>
          <td>Sim</td>
          <td>Não</td>
        </tr>
        <tr>
          <td>const</td>
          <td>Bloco</td>
          <td>Não</td>
          <td>Não</td>
        </tr>
      </tbody>
    </table>
  </section>
</main>
```

---

## Exercício 4 — Formulário semântico completo

```html
<main>
  <h1>Cadastro</h1>

  <form action="#" method="post">
    <fieldset>
      <legend>Dados Pessoais</legend>

      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" name="senha" required>

      <label for="nascimento">Data de nascimento:</label>
      <input type="date" id="nascimento" name="nascimento">

      <label for="genero">Gênero:</label>
      <select id="genero" name="genero">
        <option value="">Selecione...</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="outro">Outro</option>
        <option value="nao-informar">Prefiro não informar</option>
      </select>
    </fieldset>

    <fieldset>
      <legend>Termos</legend>
      <input type="checkbox" id="termos" name="termos" required>
      <label for="termos">Li e aceito os termos de uso</label>
    </fieldset>

    <button type="submit">Cadastrar</button>
  </form>
</main>
```

> O atributo `for` do `<label>` deve ser igual ao `id` do campo associado. Isso melhora a acessibilidade e permite clicar no texto do label para focar o campo.

---

## Exercício 5 — Desafio: página de portfólio

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfólio — Ana Silva</title>
</head>
<body>

  <header>
    <h1>Ana Silva</h1>
    <nav>
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="sobre">
      <h2>Sobre mim</h2>
      <img src="foto.jpg" alt="Foto de Ana Silva">
      <p>Sou desenvolvedora front-end apaixonada por criar experiências digitais acessíveis e bonitas.</p>
    </section>

    <section id="projetos">
      <h2>Meus Projetos</h2>

      <article>
        <h3>Lista de Tarefas</h3>
        <p>Aplicação de gerenciamento de tarefas com HTML, CSS e JavaScript.</p>
        <a href="#">Ver projeto</a>
      </article>

      <article>
        <h3>Calculadora de IMC</h3>
        <p>Calculadora com interface visual e classificação automática do IMC.</p>
        <a href="#">Ver projeto</a>
      </article>

      <article>
        <h3>Buscador GitHub</h3>
        <p>Aplicação que consome a API do GitHub para exibir perfis de usuários.</p>
        <a href="#">Ver projeto</a>
      </article>
    </section>

    <section id="contato">
      <h2>Contato</h2>
      <form>
        <label for="msg-nome">Nome:</label>
        <input type="text" id="msg-nome" name="nome">

        <label for="msg-email">E-mail:</label>
        <input type="email" id="msg-email" name="email">

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="4"></textarea>

        <button type="submit">Enviar mensagem</button>
      </form>
    </section>
  </main>

  <footer>
    <p>
      <a href="https://github.com/anasilva" target="_blank">GitHub</a> |
      <a href="https://linkedin.com/in/anasilva" target="_blank">LinkedIn</a>
    </p>
    <p>&copy; 2025 Ana Silva</p>
  </footer>

</body>
</html>
```
