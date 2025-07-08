
# 📘 Tipos de Dados em JavaScript: Como Reconhecer Pelos Símbolos

## 🧠 Por que isso é importante?

Saber identificar o **tipo de dado** é essencial em programação. Ele define o que podemos fazer com aquela informação. Em JavaScript, podemos reconhecer alguns tipos **apenas olhando os símbolos** que os representam.

---

## 🔎 Tabela: Como Reconhecer os Tipos de Dados pelos Símbolos

| Símbolo             | Tipo de Dado       | Exemplo                      | Explicação Didática                                                                 |
|---------------------|--------------------|-------------------------------|-------------------------------------------------------------------------------------|
| `""` ou `''`        | String (texto)     | `"Olá"` ou `'mundo'`         | Tudo que estiver entre **aspas** é tratado como texto (mesmo que sejam números).   |
| `123`, `4.5`        | Number (número)    | `42`, `3.14`, `-8`           | Qualquer número **sem aspas** é do tipo número.                                    |
| `true` ou `false`   | Booleano (lógico)  | `true`, `false`              | Usado para condições: verdadeiro ou falso.                                          |
| `[]`                | Array (lista)      | `[1, 2, 3]`, `["a", "b"]`     | Representa uma **lista** de dados, começa com **colchetes**.                       |
| `{}`                | Objeto (objeto)    | `{nome: "Ana", idade: 20}`   | Representa uma **estrutura com chaves** e valores, usado para organizar dados.     |
| `undefined`         | Indefinido         | `let x;`                     | Quando uma variável é declarada mas **não recebe valor**.                          |
| `null`              | Nulo               | `let vazio = null;`          | Representa **ausência de valor** (definido pelo programador).                      |
| `function`          | Função             | `function soma() {}`         | Um **bloco de código reutilizável**, sempre começa com `function`.                 |
| `Symbol()`          | Símbolo            | `Symbol("id")`               | Usado para criar identificadores únicos. Pouco comum em códigos iniciantes.        |
| `BigInt`            | Número muito grande| `1234567890123456789012345n` | Números maiores que o `Number` comum, terminam com `n`.                            |

---

## 📍 Dicas para não confundir

- `[]` (array) e `{}` (objeto) são diferentes!  
  → `[]` é uma lista com **valores separados por vírgulas**  
  → `{}` é um conjunto de **chave:valor**

- `"123"` (string) **não é** igual a `123` (number)  
  → Um está entre aspas (texto), outro não (número)

- `undefined` aparece quando **você não deu valor à variável**  
  → `null` é quando **você escolheu esvaziar**

---

## 🧪 Testando na prática

```javascript
console.log(typeof "Olá");       // string
console.log(typeof 100);         // number
console.log(typeof true);        // boolean
console.log(typeof [1, 2]);      // object (sim, arrays são tipo objeto!)
console.log(typeof {a: 1});      // object
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (isso é um bug histórico do JS)
console.log(typeof function(){}); // function
```

---

## ⚠️ Curiosidades e armadilhas

- `typeof null` retorna `"object"` por um erro histórico do JavaScript.
- `typeof []` também retorna `"object"`, então usamos `Array.isArray()` para checar se é array.
- Strings numéricas (`"123"`) não podem ser somadas com números sem conversão.
