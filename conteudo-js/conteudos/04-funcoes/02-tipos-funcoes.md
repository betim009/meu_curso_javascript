# Tipos de Funções em JavaScript

## 1. Função Simples (sem parâmetros)
Executa uma tarefa fixa, não recebe informações externas.

```js
function mostrarOla() {
  console.log("Olá!");
}

mostrarOla(); // Saída: Olá!
```

## 2. Função com Parâmetros
Recebe valores externos para trabalhar, tornando a função mais flexível.

```js
function cumprimentar(nome) {
  console.log(`Olá, ${nome}!`);
}

cumprimentar("Maria"); // Saída: Olá, Maria!
cumprimentar("João"); // Saída: Olá, João!
```

## 3. Função com Retorno
Devolve um valor para quem chamou, permitindo usar o resultado em outros lugares.

```js
function multiplicar(a, b) {
  return a * b;
}

let produto = multiplicar(4, 5);
console.log(produto); // Saída: 20
```

---

## Exercícios
1. Crie uma função chamada `subtrair` que receba dois números e retorne a subtração do primeiro pelo segundo.
2. Crie uma função chamada `apresentarPessoa` que receba nome e idade e mostre: "Nome: X, Idade: Y anos".
