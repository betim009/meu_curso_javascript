# Projeto: Carrinho de Compras

## Descrição

Loja virtual com catálogo de produtos e carrinho lateral persistente. Os itens do carrinho são salvos no `localStorage`, então continuam disponíveis ao recarregar a página.

## Tecnologias

- HTML5
- CSS3
- JavaScript (DOM puro + LocalStorage)

## Conceitos aplicados

- `localStorage` com `JSON.stringify` e `JSON.parse`
- Renderização dinâmica de produtos com `createElement`
- **Delegação de eventos** — um único `addEventListener` no container trata cliques de todos os botões filhos
- `Array.find()` para localizar itens no carrinho
- `Array.filter()` para remover itens
- `Array.reduce()` para calcular o total
- `toLocaleString()` para formatar preços em BRL
- CSS `position: fixed` para painel lateral
- CSS `position: sticky` para o header

## Como executar

1. Abra o arquivo `index.html` no navegador
2. Clique em "Adicionar ao carrinho" em qualquer produto
3. Clique no botão "Carrinho" para abrir o painel
4. Use os botões `+` e `−` para alterar as quantidades
5. Clique em `×` para remover um item
6. Clique em "Finalizar pedido" para concluir a compra

## Funcionalidades

- Catálogo de 6 produtos com emoji, nome e preço
- Badge no botão mostra a quantidade total de itens
- Adicionar produtos ao carrinho (incrementa quantidade se já existir)
- Alterar quantidade de cada item no carrinho
- Remover itens individualmente
- Limpar carrinho inteiro
- Total calculado automaticamente
- Notificação flutuante ao adicionar um produto
- Carrinho persistente com LocalStorage (sobrevive ao reload)

## Arquitetura

```
produtos.js  → array constante com os produtos disponíveis
script.js    → toda a lógica do carrinho e renderização
style.css    → estilos completos
index.html   → estrutura da página
```
