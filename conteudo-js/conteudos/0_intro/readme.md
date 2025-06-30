# Material JavaScript

## 1. Variáveis

* [ ]  Marcar como lido.

Uma **variável** é um nome que se refere a um valor armazenado na memória do computador. Em JavaScript, podemos declarar variáveis usando `var`, `let` ou `const`.

### Exemplos:

```javascript
let nome = "João";  // String
let idade = 25;  // Inteiro
let altura = 1.75;  // Float
```

### Quando usar?

Você deve usar variáveis quando precisar armazenar um valor temporário para manipulá-lo ou usá-lo ao longo do seu código. Exemplos incluem:

* Quando precisar realizar cálculos.
* Para armazenar informações temporárias (como nome de usuário, idade, preços, etc.).
* Para reutilizar valores ou resultados ao longo do código sem precisar duplicá-los.

### Por que usar?

Usar variáveis traz várias vantagens, como:

1. **Legibilidade**: O uso de variáveis permite que você dê nomes significativos aos dados, tornando o código mais fácil de entender.
2. **Reusabilidade**: Você pode armazenar um valor em uma variável e reutilizá-lo várias vezes sem precisar duplicá-lo no código.
3. **Facilidade de manutenção**: Caso precise alterar o valor de uma variável, basta modificar em um único lugar.

### Boas Práticas (Nomes de Variáveis)

* **Seja Descritivo**: Escolha nomes que façam sentido e descrevam o propósito da variável.
  * **Correto**: `idade`, `nomeUsuario`, `alturaMedia`
  * **Errado**: `x`, `y`, `a1`
* **Use Notação camelCase**: A convenção do JavaScript sugere o uso de `camelCase` para variáveis, onde a primeira palavra é minúscula e as seguintes têm a primeira letra maiúscula.
  * **Correto**: `quantidadeProdutos`, `precoTotal`
  * **Errado**: `quantidade_produtos`, `preco_total`
* **Evite Palavras Reservadas**: Não use palavras reservadas do JavaScript (como `class`, `let`, `for`, etc.) como nome de variáveis.
* **Seja Conciso, Mas Claro**: Use nomes curtos, mas que ainda façam sentido.

### Exemplos de boas práticas:

```javascript
// Variáveis com nomes descritivos
let nomeUsuario = "Maria";
let idadeUsuario = 30;
let alturaUsuario = 1.65;

// Evitar nomes confusos ou muito genéricos
let x = "João";  // Confuso
let precoItem = 10.5;  // Claro
```

### Evite Variáveis Globais

Sempre que possível, prefira usar variáveis dentro de funções ou blocos específicos. Variáveis globais podem causar confusão e dificultar a manutenção do código.

```javascript
// Evite
var contador = 0;  // Variável global
```

### Resumo

* **Quando usar**: Para armazenar e manipular dados temporários.
* **Por que usar**: Torna o código mais legível, reutilizável e fácil de manter.
* **Boas práticas**: Use nomes descritivos, siga a convenção `camelCase`, evite variáveis globais e palavras reservadas.

## 2. Tipos de Dados

* [ ]  Marcar como lido.

Em JavaScript, os tipos de dados representam diferentes tipos de valores. Cada tipo de dado tem características próprias e operações que podem ser feitas sobre ele.

### Tipos Comuns em JavaScript

#### Strings (String)

Usadas para representar textos.

```javascript
let produto = "Notebook";
let usuario = "Carlos Silva";
```

Métodos úteis para strings:

```javascript
// Convertendo para maiúsculas
console.log(produto.toUpperCase());  // NOTEBOOK

// Convertendo para minúsculas
console.log(usuario.toLowerCase());  // carlos silva

// Substituindo caracteres
console.log(produto.replace("Note", "Ultra"));  // Ultrabook
```

#### Números (Number)

Usados para representar valores numéricos inteiros e decimais.

```javascript
let preco = 1999.99;  // Float
let quantidade = 10;  // Inteiro
```

Operações aritméticas básicas:

```javascript
// Soma
let valorTotal = preco * quantidade;
console.log(valorTotal);  // 19999.9

// Divisão inteira
let parcelas = Math.floor(valorTotal / 5);
console.log(parcelas);  // 3999

// Módulo (resto da divisão)
let resto = valorTotal % 3;
console.log(resto);  // 1.9
```

#### Booleanos (Boolean)

Usados para representar verdadeiro ou falso.

```javascript
let estoqueDisponivel = true;
let clienteLogado = false;
```

#### Arrays (Array)

São coleções ordenadas e mutáveis de itens.

```javascript
let usuarios = ["Maria", "João", "Carlos"];
let produtos = ["Notebook", "Celular", "Tablet"];
```

Manipulação de arrays:

```javascript
// Adicionar item
usuarios.push("Ana");
console.log(usuarios);

// Remover item
produtos.splice(produtos.indexOf("Tablet"), 1);
console.log(produtos);
```

### Arrays de Objetos

```javascript
let pedidos = [
    { id: 1, produto: "Notebook", preco: 2500 },
    { id: 2, produto: "Celular", preco: 1500 },
    { id: 3, produto: "Tablet", preco: 1200 }
];

// Acessando dados do array de objetos
console.log(pedidos[1].produto);  // Celular
```

#### Objetos com Arrays

```javascript
let loja = {
    nome: "Tech Store",
    endereco: "Av. Principal, 123",
    produtos: [
        { nome: "Notebook", preco: 3500 },
        { nome: "Celular", preco: 1500 }
    ]
};

console.log(loja.produtos[0].nome);  // Notebook
```

### Quando escolher o tipo de dado correto?

* **Use arrays** quando precisar armazenar múltiplos itens e a ordem for importante.
* **Use objetos** quando precisar associar chaves a valores.
* **Use arrays de objetos** para representar coleções estruturadas.
* **Use strings** para armazenar textos e nomes.
* **Use números inteiros e decimais** para cálculos e preços.
* **Use booleanos** para representar verdadeiro ou falso.


**[⏭️ Próximo](https://github.com/betim009/meu_curso_javascript/blob/main/conteudo_js/conteudos/0_intro/readme_2.md)**