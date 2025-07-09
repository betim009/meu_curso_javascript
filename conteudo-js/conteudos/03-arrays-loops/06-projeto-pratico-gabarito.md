# Gabarito do Projeto Prático: Dashboard de Compras

## Exemplo de Estrutura de Dados
```js
const produtos = [
  { nome: 'Camiseta', preco: 50, categoria: 'Roupas', quantidade: 2 },
  { nome: 'Calça', preco: 120, categoria: 'Roupas', quantidade: 1 },
  { nome: 'Celular', preco: 900, categoria: 'Eletrônicos', quantidade: 1 },
  { nome: 'Livro', preco: 40, categoria: 'Livros', quantidade: 3 }
];
```

## Exibir todos os produtos
```js
produtos.forEach(prod => {
  console.log(`${prod.nome} - R$${prod.preco} (${prod.categoria}) x${prod.quantidade}`);
});
```

## Calcular o valor total da compra
```js
const total = produtos.reduce((acc, prod) => acc + prod.preco * prod.quantidade, 0);
console.log('Total da compra: R$', total);
```

## Listar apenas os produtos de uma categoria específica
```js
const categoria = 'Roupas';
const roupas = produtos.filter(prod => prod.categoria === categoria);
console.log('Roupas:', roupas);
```

## Filtrar produtos acima de um certo valor
```js
const acima100 = produtos.filter(prod => prod.preco > 100);
console.log('Produtos acima de R$100:', acima100);
```

## Calcular a média de preços
```js
const media = produtos.reduce((acc, prod) => acc + prod.preco, 0) / produtos.length;
console.log('Média de preços:', media);
```

## Exibir o produto mais caro e o mais barato
```js
const maisCaro = produtos.reduce((a, b) => (a.preco > b.preco ? a : b));
const maisBarato = produtos.reduce((a, b) => (a.preco < b.preco ? a : b));
console.log('Mais caro:', maisCaro);
console.log('Mais barato:', maisBarato);
```

## Dicas de funções reutilizáveis
```js
function listarPorCategoria(arr, cat) {
  return arr.filter(prod => prod.categoria === cat);
}

function totalCompra(arr) {
  return arr.reduce((acc, prod) => acc + prod.preco * prod.quantidade, 0);
}

function filtrarAcimaDe(arr, valor) {
  return arr.filter(prod => prod.preco > valor);
}
```

---

> Expanda o projeto criando funções para adicionar/remover produtos, gerar relatórios ou exportar dados! 