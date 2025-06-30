# JavaScript: Funções Assíncronas

## O que é uma função assíncrona?

Imagine que você está cozinhando e colocou um bolo no forno. Você não vai ficar parado olhando o bolo assar. Vai fazer outras coisas e só volta quando o bolo estiver pronto. Uma função assíncrona funciona exatamente assim: ela **espera por algo demorado**, mas **sem travar o restante do código**.

Elas permitem que o JavaScript "continue trabalhando" enquanto aguarda o resultado de algo, como uma resposta de uma API.

Para isso, usamos as palavras `async` e `await`.

---

## Mas o que é uma "promessa" (Promise)?

Promessa é como **uma encomenda que você faz pela internet**. Ela pode:

* **Estar pendente** (ainda não chegou)
* **Ser resolvida** (chegou tudo certo!)
* **Ser rejeitada** (deu erro na entrega)

No código, é uma forma de dizer: "Vou te entregar esse valor depois que tudo estiver pronto."

---

## O que é código "síncrono" e "assíncrono"?

* **Síncrono**: cada linha espera a anterior terminar. Ex: preparar café, só depois começar o pão.
* **Assíncrono**: as tarefas podem acontecer ao mesmo tempo. Ex: liga a cafeteira e já coloca o pão na sanduicheira.

O JavaScript é **síncrono por padrão**, mas com `async/await`, ele consegue lidar com tarefas assíncronas.

---

## Por que usar funções assíncronas?

* Para **esperar por dados** (como de uma API)
* Para **não travar** o restante do sistema enquanto espera
* Para evitar o famoso **callback hell** (explicado abaixo)

---

## O que é Callback Hell?

Imagine que você precisa fazer uma tarefa, e depois outra, e depois outra — mas todas dependem da anterior. E tudo isso com funções dentro de funções dentro de funções... Isso vira um **"inferno de callbacks"**, difícil de entender e de manter.

```javascript
// Exemplo de callback hell
func1(() => {
  func2(() => {
    func3(() => {
      console.log("Pronto!");
    });
  });
});
```

Com `async/await`, o código fica **mais limpo e fácil de entender**.

---

## Quando usar?

Use sempre que:

* For fazer uma **requisição para API**
* Precisar **esperar algo** terminar (como leitura de arquivo, tempo, dados)
* Usar funções que **retornam Promises**

---

## Sintaxe

```javascript
async function minhaFuncao() {
  await algumaPromise();
}
```

---

## Exemplo Simples com `async/await`

```javascript
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

---

## Com `async/await` e `try/catch`

```javascript
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

> **Importante:** sempre use `try/catch` para evitar que erros travem seu código.

---

## Exemplo `async/await` sem `try/catch` (NÃO recomendado)

```javascript
async function buscarDados() {
  const resposta = await fetch("https://api.exemplo.com/dados");
  const dados = await resposta.json();
  console.log(dados);
}

buscarDados();
```

> **Cuidado!** Se a API estiver fora do ar, o código quebra.

---

## Usando `.then()` e `.catch()` (sem `async/await`)

```javascript
fetch("https://api.exemplo.com/dados")
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error("Erro:", erro));
```

* Esse é o jeito tradicional, baseado em promessas.
* Funciona, mas pode ficar confuso com muitos `.then()` encadeados.

---

## Exemplo mais completo com `async/await` e API

```javascript
async function buscarUsuarios() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    console.log("Usuários:", usuarios);
  } catch (erro) {
    console.error("Erro ao buscar usuários:", erro);
  }
}

buscarUsuarios();
```

---

## Conclusão

* `async/await` facilita a leitura e escrita de código assíncrono.
* Sempre trate erros com `try/catch`.
* Entenda que qualquer função com `async` retorna uma `Promise`.
* Para código moderno e limpo: prefira `async/await`.
