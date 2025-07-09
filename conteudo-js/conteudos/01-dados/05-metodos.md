
# 📘 JavaScript: Tipos de Dados e Métodos Úteis

Neste material, vamos aprofundar nosso conhecimento nos **tipos de dados** do JavaScript e aprender **métodos importantes** que podemos usar com eles.

---

## ✅ Tipos de Dados

### 📦 String (texto)

Representa qualquer sequência de caracteres, sempre entre aspas.

```js
const nome = "Alberto";
```

#### 🔧 Métodos úteis:

| Método           | Explicação                                           |
|------------------|------------------------------------------------------|
| `.length`        | Retorna o tamanho da string                          |
| `.toUpperCase()` | Transforma tudo em letras maiúsculas                |
| `.toLowerCase()` | Transforma tudo em letras minúsculas                |
| `.includes()`    | Verifica se contém uma palavra dentro da string     |
| `.replace()`     | Substitui um trecho do texto                         |
| `.slice()`       | Recorta parte da string                              |

#### 🧪 Exemplos:

```js
const frase = "Aprender JavaScript é divertido!";

console.log(frase.length); // 31
console.log(frase.toUpperCase()); // APRENDER JAVASCRIPT É DIVERTIDO!
console.log(frase.includes("JavaScript")); // true
console.log(frase.replace("divertido", "poderoso")); // Aprender JavaScript é poderoso!
```

**DICA:** Use `.toLowerCase()` quando quiser comparar strings sem se preocupar com letras maiúsculas/minúsculas.

**CUIDADO:** Strings são **imutáveis**, ou seja, os métodos **não alteram o valor original**.

---

### 🔢 Number (número)

Representa números inteiros ou decimais.

```js
const preco = 29.90;
```

#### 🔧 Métodos úteis:

| Método            | Explicação                                     |
|-------------------|------------------------------------------------|
| `.toFixed()`      | Define o número de casas decimais              |
| `.toString()`     | Converte o número para texto                   |
| `parseInt()`      | Converte uma string para número inteiro        |
| `parseFloat()`    | Converte uma string para número decimal        |
| `isNaN()`         | Verifica se o valor não é um número            |

#### 🧪 Exemplos:

```js
const valor = 10.56789;

console.log(valor.toFixed(2)); // 10.57
console.log(typeof valor.toString()); // string
console.log(parseInt("123")); // 123
console.log(parseFloat("10.5")); // 10.5
console.log(isNaN("abc")); // true
```

**DICA:** Use `.toFixed()` quando precisar formatar valores como preços.

**CUIDADO:** `parseInt("10.5")` vai retornar `10`, pois ignora os decimais.

---

### 🔁 Boolean (true ou false)

Usado para representar **valores lógicos**.

```js
const aprovado = true;
const reprovado = false;
```

#### Métodos:

Booleanos em si **não possuem métodos próprios**, mas são muito usados em **condições**:

```js
if (true) {
  console.log("Isso sempre acontece");
}
```

**CUIDADO:** Alguns valores como `0`, `""`, `null`, `undefined` são tratados como `false` em condições.

---

### 🧺 Array (lista de itens)

Uma estrutura que armazena vários valores em uma única variável.

```js
const frutas = ["Banana", "Maçã", "Pera"];
```

#### 🔧 Métodos úteis:

| Método         | Explicação                                      |
|----------------|--------------------------------------------------|
| `.push()`      | Adiciona um item no final                        |
| `.pop()`       | Remove o último item                             |
| `.shift()`     | Remove o primeiro item                           |
| `.unshift()`   | Adiciona item no início                          |
| `.includes()`  | Verifica se um item existe na lista              |
| `.indexOf()`   | Retorna a posição de um item                     |
| `.length`      | Quantos itens existem no array                   |
| `.join()`      | Junta os itens em uma string                     |
| `.slice()`     | Cria uma cópia parcial do array                  |
| `.splice()`    | Remove ou substitui itens                        |

#### 🧪 Exemplos:

```js
const itens = ["copo", "prato", "garfo"];
itens.push("faca"); // ["copo", "prato", "garfo", "faca"]
console.log(itens.length); // 4
console.log(itens.includes("garfo")); // true
console.log(itens.indexOf("prato")); // 1
```

**DICA:** Arrays são ideais para listas de dados como nomes, números, tarefas, etc.

**CUIDADO:** `splice()` altera o array original.

---

### 🧱 Object (objeto)

Usado para representar uma **estrutura com propriedades nomeadas**.

```js
const pessoa = {
  nome: "Alberto",
  idade: 28,
  cidade: "Iúna"
};
```

#### 🔧 Métodos e funções úteis:

| Método/forma        | Explicação                                |
|---------------------|--------------------------------------------|
| `objeto.chave`      | Acessa o valor diretamente                 |
| `objeto["chave"]`   | Outra forma de acessar a propriedade       |
| `Object.keys()`     | Retorna todas as chaves                    |
| `Object.values()`   | Retorna todos os valores                   |
| `Object.entries()`  | Retorna chaves e valores em pares          |

#### 🧪 Exemplos:

```js
console.log(pessoa.nome); // Alberto
console.log(Object.keys(pessoa));   // ["nome", "idade", "cidade"]
console.log(Object.values(pessoa)); // ["Alberto", 28, "Iúna"]
```

**DICA:** Objetos são ótimos para agrupar informações relacionadas.

**CUIDADO:** Se usar uma chave que não existe, o valor será `undefined`.

---

📘 Continue praticando esses métodos com seus próprios exemplos!
