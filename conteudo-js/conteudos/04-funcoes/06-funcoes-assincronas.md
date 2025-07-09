# Funções Assíncronas em JavaScript

Funções assíncronas permitem que o código execute tarefas demoradas (como buscar dados na internet) sem travar o restante do programa.

## 1. Callback
Uma função passada como argumento para ser executada depois de uma tarefa.
```js
function esperarUmSegundo(callback) {
  setTimeout(() => {
    callback("Passou 1 segundo!");
  }, 1000);
}
esperarUmSegundo(mensagem => console.log(mensagem));
```

## 2. Promise
Objeto que representa uma operação que pode terminar no futuro.
```js
function esperarDoisSegundos() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Passaram 2 segundos!");
    }, 2000);
  });
}
esperarDoisSegundos().then(msg => console.log(msg));
```

## 3. async/await
Sintaxe moderna para trabalhar com promises de forma mais simples.
```js
async function executar() {
  const resultado = await esperarDoisSegundos();
  console.log(resultado);
}
executar();
```

---

## Exercícios
1. Crie uma função que simule buscar dados de um servidor usando setTimeout e callback.
2. Reescreva a função anterior usando Promise e depois usando async/await.
