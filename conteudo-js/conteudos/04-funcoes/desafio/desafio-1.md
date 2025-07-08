## 📝 Desafio: Encontrando o Pedido com a Maior Nota

### 📌 Objetivo
Você deve implementar a função `maiorNota`, que recebe um array de arrays representando pedidos em um fast food. Cada pedido é um array contendo dois valores:
- **Quantidade do pedido** (um número inteiro positivo)
- **Nota do pedido** (um número inteiro de 1 a 5)

O objetivo é encontrar o pedido com a **maior nota**. Caso haja mais de um pedido com a mesma nota máxima, deve-se retornar aquele que tem a **menor quantidade**.

### 📊 Exemplo de Entrada e Saída

#### 🔹 Entrada:
```js
[[123, 4], [133, 2], [423, 5], [100, 4]]
```
#### 🔹 Processamento:
- O pedido com a maior nota é `[423, 5]`, pois tem a maior nota (5).

#### 🔹 Saída esperada:
```js
[423, 5]
```

#### Outro exemplo:
```js
[[123, 5], [133, 2], [99, 5], [100, 4]]
```
- Os pedidos `[123, 5]` e `[99, 5]` possuem a maior nota (5).
- Entre eles, `[99, 5]` tem a menor quantidade.

#### 🔹 Saída esperada:
```js
[99, 5]
```

---

### 🖥 Implementação da Função

Complete a função abaixo para resolver o problema:

```js
function maiorNota(notas) {
    // Sua implementação aqui
}

console.log(maiorNota([[123, 4], [133, 2], [423, 5], [100, 4]])); // [423, 5]
console.log(maiorNota([[123, 5], [133, 2], [99, 5], [100, 4]])); // [99, 5]
```

### 🚀 Dicas
- Utilize um loop para percorrer os pedidos e encontrar o de maior nota.
- Caso haja empate na nota, compare as quantidades.
- Retorne o pedido no formato `[quantidade, nota]`.

Boa sorte! 💡💻