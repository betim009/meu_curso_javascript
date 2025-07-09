# Introdução a Funções em JavaScript

Funções são um dos conceitos mais importantes em programação. Elas permitem organizar o código, evitar repetições e resolver problemas de forma mais clara e eficiente.

## O que é uma função?
Uma função é um bloco de código que executa uma tarefa específica. Você pode "chamar" (executar) a função sempre que precisar daquela tarefa.

### Analogia
Imagine uma função como uma máquina de suco: você coloca frutas (parâmetros), aperta o botão (chama a função) e recebe suco (resultado).

## Por que usar funções?
- **Reutilização:** Escreva uma vez, use várias vezes.
- **Organização:** Deixa o código mais limpo e dividido em partes menores.
- **Facilidade de manutenção:** Se precisar mudar algo, muda só na função.

## Estrutura básica de uma função
```js
function nomeDaFuncao() {
  // código a ser executado
}
```

## Exemplo simples
```js
function mostrarMensagem() {
  console.log("Bem-vindo ao curso de JavaScript!");
}

mostrarMensagem(); // Saída: Bem-vindo ao curso de JavaScript!
```

## Exercício 1
Crie uma função chamada `apresentar` que mostre no console: "Olá, eu sou estudante de JavaScript!"

---

## Parâmetros e retorno
Funções podem receber valores (parâmetros) e devolver resultados (retorno).

```js
function somar(a, b) {
  return a + b;
}

let resultado = somar(3, 5);
console.log(resultado); // Saída: 8
```

## Exercício 2
Crie uma função chamada `dobrar` que receba um número e retorne o dobro desse número.

---

## Dicas importantes
- Use nomes claros para suas funções.
- Funções devem fazer uma coisa só.
- Teste suas funções com diferentes valores.

---

Nos próximos arquivos, você vai aprender os tipos de funções, formas de escrever e como usá-las na prática!
