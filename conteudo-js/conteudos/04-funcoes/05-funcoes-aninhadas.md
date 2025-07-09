# Funções Aninhadas (Funções dentro de Funções)

## O que são?
Funções aninhadas são funções declaradas dentro de outras funções. Elas podem acessar variáveis da função "pai" e são úteis para organizar tarefas relacionadas.

### Analogia
Pense em uma função aninhada como um ajudante dentro de uma loja: o gerente (função principal) pode pedir para o ajudante (função interna) fazer tarefas específicas.

## Exemplo prático
```js
function calcularPrecoFinal(preco, percentualDesconto) {
  function calcularDesconto(valor, percentual) {
    return valor * (percentual / 100);
  }
  const desconto = calcularDesconto(preco, percentualDesconto);
  return preco - desconto;
}

console.log(calcularPrecoFinal(200, 15)); // 170
```

## Escopo
- Funções internas só existem dentro da função onde foram criadas
- Podem acessar variáveis da função externa
- Não são visíveis fora da função "pai"

## Exercícios
1. Crie uma função chamada `processarTexto` que receba um texto e, dentro dela, tenha uma função interna que conte quantas palavras o texto possui.
2. Explique por que usar funções aninhadas pode ajudar na organização do código.
