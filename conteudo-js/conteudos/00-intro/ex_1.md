markdown

# Exercícios de JavaScript - Variáveis e Tipos de Dados

## Exercícios

### 1. Criando variáveis

Crie três variáveis: nome, idade e altura, e atribua valores a elas.

**Exemplo de saída:**

```javascript
console.log(nome);  // "Carlos"
console.log(idade);  // 30
console.log(altura);  // 1.75
```

### 2. Tipos de Dados
Imprima os tipos das variáveis criadas no exercício anterior.

Exemplo de saída:

```javascript
console.log(typeof nome);  // "string"
console.log(typeof idade);  // "number"
console.log(typeof altura);  // "number"
```

### 3. Operações com Números
Crie duas variáveis preco e quantidade, realize uma multiplicação entre elas e exiba o resultado.

Exemplo de saída:

```javascript
console.log(valorTotal);  // 150.0
```

### 4. Métodos de String
Dada uma variável produto, converta seu valor para letras maiúsculas e exiba o resultado.

Exemplo de saída:

```javascript
console.log(produto.toUpperCase());  // "NOTEBOOK"
```

### 5. Trabalhando com Booleanos
Crie uma variável disponivel com valor true e converta-a para uma string.

Exemplo de saída:

```javascript

console.log(disponivel.toString());  // "true"
```

### 6. Arrays e Índices
Crie um array de produtos e exiba o terceiro item.

Exemplo de saída:

```javascript
console.log(produtos[2]);  // "Tablet"
```

### 7. Adicionando e Removendo Itens
Crie um array de usuários e adicione um novo usuário.

Exemplo de saída:

```javascript
console.log(usuarios);  // ['Ana', 'Bruno', 'Carlos', 'Daniela']
```

### 8. Arrays (simulando tuplas)
Crie um array com três cores e exiba a segunda cor.

Exemplo de saída:

```javascript
console.log(cores[1]);  // "azul"
```

### 9. Sets e Unicidade
Crie um Set de categorias e tente adicionar um item duplicado.

Exemplo de saída:

```javascript
console.log([...categorias]);  // ['Eletronicos', 'Roupas', 'Livros']
```

### 10. Objetos e Acesso
Crie um objeto representando um usuário com nome e idade e exiba o nome.

Exemplo de saída:

```javascript
console.log(usuario.nome);  // "Mariana"
```

### 11. Objetos e Adição de Dados
Adicione uma nova chave email ao objeto do exercício anterior.

Exemplo de saída:

```javascript
console.log(usuario);  // { nome: 'Mariana', idade: 25, email: 'mariana@email.com' }
```

### 12. Removendo Itens de um Objeto
Remova a chave idade do objeto do exercício anterior.

Exemplo de saída:

```javascript
console.log(usuario);  // { nome: 'Mariana', email: 'mariana@email.com' }
```

### 13. Array de Objetos
Crie um array contendo dois objetos representando usuários e exiba o nome do segundo usuário.

Exemplo de saída:

```javascript
console.log(usuarios[1].nome);  // "Carlos"
```

### 14. Objeto com Arrays
Crie um objeto onde as chaves são categorias e os valores são arrays de produtos.

Exemplo de saída:

```javascript
console.log(loja.Eletronicos);  // ['Notebook', 'Celular']
```

### 15. Acessando Dados em Estruturas Complexas
Dado um objeto de produtos, exiba o preço do segundo item da categoria "Eletronicos".

Exemplo de saída:

```javascript
console.log(loja.Eletronicos[1].preco);  // 1200.0
```

## Gabarito

### 1:
```javascript
let nome = "Carlos";
let idade = 30;
let altura = 1.75;
console.log(nome);  // "Carlos"
console.log(idade);  // 30
console.log(altura);  // 1.75
```

### 2:
```javascript
console.log(typeof nome);  // "string"
console.log(typeof idade);  // "number"
console.log(typeof altura);  // "number"
```

### 3:
```javascript
let preco = 50.0;
let quantidade = 3;
let valorTotal = preco * quantidade;
console.log(valorTotal);  // 150.0
```

### 4:
```javascript
let produto = "notebook";
console.log(produto.toUpperCase());  // "NOTEBOOK"
```

### 5:
```javascript
let disponivel = true;
console.log(disponivel.toString());  // "true"
```

### 6:
```javascript
let produtos = ["Celular", "Notebook", "Tablet", "Fone de Ouvido"];
console.log(produtos[2]);  // "Tablet"
```

### 7:
```javascript
let usuarios = ["Ana", "Bruno", "Carlos"];
usuarios.push("Daniela");
console.log(usuarios);  // ['Ana', 'Bruno', 'Carlos', 'Daniela']
```

### 8:
```javascript
let cores = ["vermelho", "azul", "verde"];
console.log(cores[1]);  // "azul"
```

### 9:
```javascript
let categorias = new Set(["Eletronicos", "Roupas", "Livros"]);
categorias.add("Roupas");
console.log([...categorias]);  // ['Eletronicos', 'Roupas', 'Livros']
```

### 10:
```javascript
let usuario = { nome: "Mariana", idade: 25 };
console.log(usuario.nome);  // "Mariana"
```

### 11:
```javascript
usuario.email = "mariana@email.com";
console.log(usuario);  // { nome: 'Mariana', idade: 25, email: 'mariana@email.com' }
```

### 12:
```javascript
delete usuario.idade;
console.log(usuario);  // { nome: 'Mariana', email: 'mariana@email.com' }
```

### 13:
```javascript
let usuarios = [
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 35 }
];
console.log(usuarios[1].nome);  // "Carlos"
```

### 14:
``` javascript

let loja = {
    Eletronicos: ["Notebook", "Celular"],
    Móveis: ["Mesa", "Cadeira"]
};
console.log(loja.Eletronicos);  // ['Notebook', 'Celular']
```

### 15:
```javascript

let loja = {
    Eletronicos: [
        { produto: "Notebook", preco: 3500.0 },
        { produto: "Celular", preco: 1200.0 }
    ]
};
console.log(loja.Eletronicos[1].preco);  // 1200.0
```

--------
**[⏭️ Próximo](https://github.com/betim009/meu_curso_javascript/blob/main/conteudo_js/conteudos/0_intro/ex_2.md)**