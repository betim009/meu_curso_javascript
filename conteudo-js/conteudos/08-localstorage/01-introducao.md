# Módulo 8 — LocalStorage

## O que é o LocalStorage?

O `localStorage` é um espaço de armazenamento que existe **dentro do próprio navegador**. Ele permite que você salve dados que continuam disponíveis mesmo depois de fechar e abrir o navegador novamente.

Pense nele como um "caderninho" que o navegador guarda para cada site que você acessa.

---

## Por que usar o LocalStorage?

| Situação | Exemplo |
|----------|---------|
| Salvar preferências | Modo escuro ativado ou não |
| Lembrar dados do usuário | Nome, configurações |
| Guardar o progresso | Lista de tarefas, carrinho de compras |
| Evitar preencher formulários repetidamente | Último valor digitado |

---

## Limitações importantes

- Os dados ficam **apenas no navegador do usuário** (não vão para o servidor)
- Limite de armazenamento: aproximadamente **5 MB**
- Só suporta **strings** — objetos e arrays precisam ser convertidos
- Os dados **não expiram** (ficam até o usuário limpar ou o código remover)

---

## Os quatro métodos principais

### `setItem(chave, valor)` — salvar

```javascript
localStorage.setItem("nome", "Ana");
localStorage.setItem("idade", "25");
```

> Sempre salva como **string**. Mesmo que você passe um número, ele vira texto.

---

### `getItem(chave)` — ler

```javascript
const nome = localStorage.getItem("nome");
console.log(nome); // "Ana"

const naoExiste = localStorage.getItem("xyz");
console.log(naoExiste); // null
```

> Retorna `null` se a chave não existir.

---

### `removeItem(chave)` — remover uma chave

```javascript
localStorage.removeItem("idade");
```

---

### `clear()` — limpar tudo

```javascript
localStorage.clear();
```

> Remove **todas** as chaves do localStorage para aquele site. Use com cuidado!

---

## Salvando e lendo objetos (JSON)

O `localStorage` só aceita strings. Para salvar um objeto ou array, usamos `JSON.stringify()` para converter, e `JSON.parse()` para recuperar:

```javascript
const usuario = {
  nome: "Carlos",
  email: "carlos@email.com",
  idade: 30
};

// Salvar objeto
localStorage.setItem("usuario", JSON.stringify(usuario));

// Ler objeto
const dadosSalvos = localStorage.getItem("usuario");
const usuarioRecuperado = JSON.parse(dadosSalvos);

console.log(usuarioRecuperado.nome); // "Carlos"
```

---

## Salvando e lendo arrays

```javascript
const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Revisar DOM"];

// Salvar array
localStorage.setItem("tarefas", JSON.stringify(tarefas));

// Ler array
const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
console.log(tarefasSalvas[0]); // "Estudar JavaScript"
```

---

## Padrão seguro para ler dados que podem não existir

```javascript
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
```

> O `|| []` garante que, se não houver dados salvos (`null`), usamos um array vazio em vez de dar erro.

---

## Exemplo prático — salvando o nome do usuário

```html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <input type="text" id="campo-nome" placeholder="Seu nome">
  <button id="btn-salvar">Salvar</button>
  <button id="btn-carregar">Carregar</button>
  <p id="saida"></p>

  <script>
    document.getElementById("btn-salvar").addEventListener("click", function() {
      const nome = document.getElementById("campo-nome").value;
      localStorage.setItem("nomeUsuario", nome);
      alert("Nome salvo!");
    });

    document.getElementById("btn-carregar").addEventListener("click", function() {
      const nome = localStorage.getItem("nomeUsuario");
      if (nome) {
        document.getElementById("saida").textContent = "Olá, " + nome + "!";
      } else {
        document.getElementById("saida").textContent = "Nenhum nome salvo ainda.";
      }
    });
  </script>
</body>
</html>
```

---

## Exemplo prático — lista de tarefas persistente

```javascript
// Carrega tarefas ao iniciar a página
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function adicionarTarefa(texto) {
  tarefas.push(texto);
  salvarTarefas();
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1);
  salvarTarefas();
}

adicionarTarefa("Estudar LocalStorage");
adicionarTarefa("Fazer exercícios práticos");
console.log(tarefas);

removerTarefa(0);
console.log(tarefas);

// Feche e abra o navegador — as tarefas continuam lá!
```

---

## Verificando o LocalStorage no navegador

1. Abra o DevTools (F12)
2. Vá na aba **Application** (Chrome) ou **Storage** (Firefox)
3. Clique em **Local Storage** no menu lateral
4. Veja todas as chaves e valores salvos para o site atual

---

## Diferença entre localStorage e sessionStorage

| | `localStorage` | `sessionStorage` |
|--|--|--|
| Persiste ao fechar aba | Sim | Não |
| Persiste ao fechar navegador | Sim | Não |
| Compartilhado entre abas | Sim | Não |
| Uso típico | Preferências, carrinho | Dados temporários da sessão |

---

## Resumo dos métodos

| Método | O que faz |
|--------|-----------|
| `setItem("chave", valor)` | Salva um valor (sempre como string) |
| `getItem("chave")` | Lê um valor (retorna `null` se não existir) |
| `removeItem("chave")` | Remove uma chave específica |
| `clear()` | Remove todos os dados do site |
| `JSON.stringify(obj)` | Converte objeto/array para string |
| `JSON.parse(str)` | Converte string de volta para objeto/array |

---

Continue para os [exercícios práticos](02-exercicios.md).
