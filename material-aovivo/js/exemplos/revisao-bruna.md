# 📘 Fundamentos de Arrays, Objetos, Estrutura de Repetição e Funções em JavaScript

## 🔹 Arrays

Um **array** é um tipo de dado que serve para armazenar **vários elementos**.

**Símbolo**: Colchetes `[]`

### Exemplo:
```javascript
const frutas = ["maçã", "banana", "laranja"];
```

Você acessa os elementos pela **posição** (índice):
```javascript
console.log(frutas[0]); // "maçã"
console.log(frutas[2]); // "laranja"
```

---

## 🔸 Objetos

Um **objeto** armazena **várias informações de um único item** (propriedades).

**Símbolo**: Chaves `{}`

### Exemplo:
```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  email: "ana@email.com"
};
```

Você acessa os valores com **ponto (`.`)**:
```javascript
console.log(pessoa.nome); // "Ana"
console.log(pessoa.email); // "ana@email.com"
```

---

## 🔹 Array de Objetos

É uma combinação muito comum e útil: um **array** que armazena **vários objetos**.

### Exemplo:
```javascript
const usuarios = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Carlos", idade: 40 }
];
```

---

## 🔁 Estrutura de Repetição: `for...of`

Essa estrutura é usada para **percorrer um array** do início ao fim.

### Exemplo:
```javascript
for (const usuario of usuarios) {
  console.log(usuario.nome);
}
```

### ✅ Pontos Positivos:
- Simples e fácil de usar
- Sintaxe limpa

### ⚠️ Pontos Negativos:
- Não dá acesso direto ao índice (posição)
- Não tem controle sobre início, fim e incrementos

---

## 🧠 Funções em JavaScript

### O que é uma função?
É um **bloco de código reutilizável**. Usamos funções para evitar repetição e tornar o código mais organizado.

### Estrutura de uma função:
```javascript
function nomeDaFuncao(parametros) {
  // lógica
  return resultado;
}
```

### Exemplo:
```javascript
function somarNumeros(n1, n2) {
  return n1 + n2;
}
```

### Como usar corretamente:
```javascript
const resultado = somarNumeros(4, 40); // A função retorna o valor 44
console.log(resultado); // Exibe 44
```

✅ **Certo**: Criar a função para retornar valor e depois exibir esse valor com `console.log()`.

### ⚠️ Erro comum: colocar `console.log()` dentro da função
```javascript
function sumNumeros(n1, n2) {
  console.log(n1 + n2); // Aqui só exibe, não retorna
}

const nm1 = sumNumeros(4, 4); // Aqui nm1 é undefined!
console.log(nm1 + 123); // Resultado: NaN
```

➡️ A função está **apenas exibindo** o resultado, mas **não está retornando**. Isso gera `undefined` ao tentar armazenar o resultado.

---

## 🧩 Resumo: Estudando CRUD com Funções

| Ação        | Nome em Inglês | Estudou? | Dominou? |
|-------------|----------------|----------|----------|
| Criar       | CREATE         | ✅       | ⬜        |
| Ler         | READ           | ✅       | ⬜        |
| Atualizar   | UPDATE         | ⬜       | ⬜        |
| Deletar     | DELETE         | ⬜       | ⬜        |

Você está no caminho certo! Continue praticando para dominar cada uma dessas etapas. 😉
