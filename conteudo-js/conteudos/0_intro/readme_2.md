# Material JavaScript

## 3. Estruturas de Repetição

* [ ]  Marcar como lido.

As estruturas de repetição (loops) em JavaScript permitem executar um bloco de código múltiplas vezes de maneira eficiente.

### Tipos de Loops

#### 1. `for`

O loop `for` é usado quando sabemos previamente quantas vezes queremos repetir um bloco de código.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}
```

**Quando usar?**

* Quando sabemos o número exato de iterações.
* Para percorrer arrays quando precisamos acessar tanto o índice quanto o valor.

**Exemplo prático:** Percorrendo um array de objetos e acessando os índices.

```javascript
let produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Celular", preco: 1500 },
    { nome: "Tablet", preco: 1200 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto ${i}: ${produtos[i].nome} - R$ ${produtos[i].preco}`);
}
```

#### 2. `while`

O loop `while` é utilizado quando não sabemos exatamente quantas vezes um bloco será executado, mas sabemos a condição de parada.

```javascript
let contador = 0;
while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}
```

**Quando usar?**

* Quando a quantidade de repetições depende de uma condição externa.
* Útil para ler entradas do usuário até que um valor válido seja fornecido.

#### 3. `do...while`

O loop `do...while` é semelhante ao `while`, mas garante que o bloco será executado pelo menos uma vez.

```javascript
let numero;
do {
    numero = Math.floor(Math.random() * 10);
    console.log("Número gerado:", numero);
} while (numero !== 5);
```

**Quando usar?**

* Quando precisamos garantir pelo menos uma execução antes da verificação da condição.
* Bom para menus interativos que devem aparecer pelo menos uma vez.

#### 4. `for...of`

O `for...of` é utilizado para percorrer arrays de forma simples, obtendo diretamente os valores.

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];
for (let fruta of frutas) {
    console.log(fruta);
}
```

**Quando usar?**

* Quando precisamos apenas dos valores de um array.
* Torna o código mais legível e direto ao acessar elementos.

**Exemplo prático:** Percorrendo uma lista de objetos.

```javascript
let pedidos = [
    { id: 1, produto: "Notebook", preco: 2500 },
    { id: 2, produto: "Celular", preco: 1500 }
];

for (let pedido of pedidos) {
    console.log(`Pedido #${pedido.id}: ${pedido.produto} - R$ ${pedido.preco}`);
}
```

#### 5. `for...in`

O `for...in` é utilizado para percorrer as propriedades de um objeto.

```javascript
let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
for (let chave in pessoa) {
    console.log(chave, ":", pessoa[chave]);
}
```

**Quando usar?**

* Para percorrer objetos e acessar suas chaves e valores.
* Evite em arrays, pois pode acessar protótipos desnecessários.

### Diferença entre Element e Index

Ao usar `for...of`, obtemos apenas os elementos do array:

```javascript
let cores = ["Vermelho", "Verde", "Azul"];
for (let cor of cores) {
    console.log(cor); // Vermelho, Verde, Azul
}
```

Com `for`, podemos acessar tanto os índices quanto os elementos:

```javascript
for (let i = 0; i < cores.length; i++) {
    console.log(`Índice: ${i}, Cor: ${cores[i]}`);
}
```

### Resumo

* **Use `for`** quando precisar acessar índices e valores ao mesmo tempo.
* **Use `while`** quando a repetição depende de uma condição externa.
* **Use `do...while`** para garantir pelo menos uma execução do bloco.
* **Use `for...of`** para iterar sobre arrays sem precisar do índice.
* **Use `for...in`** para percorrer propriedades de objetos.

Escolher a estrutura correta melhora a legibilidade e a eficiência do seu código!

---

## 4. Condições

* [ ]  Marcar como lido.

As estruturas condicionais permitem que um código seja executado com base em uma condição específica.

### `if`, `else if` e `else`

```javascript
let idade = 18;
if (idade < 18) {
    console.log("Menor de idade");
} else if (idade === 18) {
    console.log("Tem exatamente 18 anos");
} else {
    console.log("Maior de idade");
}
```

### Exemplo prático: Loop + Condição

Percorrendo um array de objetos e aplicando uma condição dentro do loop.

```javascript
let usuarios = [
    { nome: "Carlos", idade: 17 },
    { nome: "Ana", idade: 22 },
    { nome: "João", idade: 15 },
    { nome: "Mariana", idade: 20 }
];

for (let usuario of usuarios) {
    if (usuario.idade >= 18) {
        console.log(`${usuario.nome} é maior de idade.`);
    } else {
        console.log(`${usuario.nome} é menor de idade.`);
    }
}
```

### Operador Ternário

O operador ternário é uma forma simplificada de escrever `if-else`.

```javascript
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);
```

### `switch`

O `switch` é útil quando há múltiplas condições possíveis para um mesmo valor.

```javascript
let dia = 3;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
}
```

Escolher a estrutura condicional correta torna o código mais organizado e eficiente!

---------
**[⏭️ Próximo](https://github.com/betim009/meu_curso_javascript/blob/main/conteudo_js/conteudos/0_intro/ex_1.md)**