# Funções Assíncronas em JavaScript

Funções assíncronas permitem que o código execute tarefas demoradas (como buscar dados na internet) sem travar o restante do programa.

## Analogia
Imagine que você está cozinhando e colocou um bolo no forno. Você não vai ficar parado olhando o bolo assar. Vai fazer outras coisas e só volta quando o bolo estiver pronto. Uma função assíncrona funciona assim: ela espera por algo demorado, mas sem travar o restante do código.

## Síncrono vs. Assíncrono
- **Síncrono:** cada linha espera a anterior terminar. Ex: preparar café, só depois começar o pão.
- **Assíncrono:** tarefas podem acontecer ao mesmo tempo. Ex: liga a cafeteira e já coloca o pão na sanduicheira.

## O que é uma Promise?
Promessa é como uma encomenda que você faz pela internet:
- Pendente (ainda não chegou)
- Resolvida (chegou tudo certo!)
- Rejeitada (deu erro na entrega)
No código, é uma forma de dizer: "Vou te entregar esse valor depois que tudo estiver pronto."

## Por que usar funções assíncronas?
- Para esperar por dados (como de uma API)
- Para não travar o restante do sistema enquanto espera
- Para evitar o famoso callback hell

## Callback Hell
Quando você precisa fazer várias tarefas dependentes, usando funções dentro de funções, o código fica difícil de entender:
```js
func1(() => {
  func2(() => {
    func3(() => {
      console.log("Pronto!");
    });
  });
});
```
Com async/await, o código fica mais limpo e fácil de entender.

## Sintaxe básica
```js
async function minhaFuncao() {
  await algumaPromise();
}
```

## Exemplo simples com async/await
```js
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar() {
  console.log("Esperando 2 segundos...");
  await esperar(2000);
  console.log("Terminou!");
}

executar();
```

## Exemplo com try/catch
```js
async function buscarDados() {
  try {
    const resposta = await fetch("https://api.exemplo.com/dados");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar os dados:", erro);
  }
}

buscarDados();
```

## Usando .then() e .catch() (sem async/await)
```js
fetch("https://api.exemplo.com/dados")
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error("Erro:", erro));
```

## Conclusão
- `async/await` facilita a leitura e escrita de código assíncrono.
- Sempre trate erros com `try/catch`.
- Qualquer função com `async` retorna uma Promise.
- Prefira `async/await` para código moderno e limpo.
