# 🧪 Prática com Objetos e Listas em JavaScript

Este material contém **15 exercícios práticos** sobre listas e objetos com base no tema de supermercado.

Eles são divididos por nível de complexidade e tipo de estrutura que o aluno deve usar.

---

## 🧱 Bases de Dados

```javascript
const produtos = [
  { nome: "Arroz", preco: 5.50, unidade: "kg", estoque: 20 },
  { nome: "Feijão", preco: 6.00, unidade: "kg", estoque: 15 },
  { nome: "Leite", preco: 4.00, unidade: "litro", estoque: 30 },
  { nome: "Ovos", preco: 12.00, unidade: "dúzia", estoque: 10 },
  { nome: "Café", preco: 8.50, unidade: "pacote", estoque: 25 }
];

const supermercado = {
  produtos: ["Arroz", "Feijão", "Leite", "Ovos", "Café"],
  precos: [5.50, 6.00, 4.00, 12.00, 8.50],
  unidades: ["kg", "kg", "litro", "dúzia", "pacote"],
  estoque: [20, 15, 30, 10, 25]
};
```

---

## 📘 Bloco 1 — Acesso e Modificação Direta

1. Imprima o nome do primeiro produto da lista `produtos`.

2. Imprima o preço do terceiro produto da estrutura `supermercado`, no formato:  
   `"Preço: R$ 4.00"`

3. Altere o valor do estoque do produto `"Feijão"` da lista `produtos` para `10`.

4. Altere a unidade do produto `"Café"` na estrutura `supermercado` para `"g"`.

5. Acesse e imprima o nome e a unidade do produto na posição 2 da estrutura `supermercado`, no formato:  
   `"Produto: Leite | Unidade: litro"`

---

## 🔁 Bloco 2 — Repetição com `for` ou `forEach`

6. Percorra a lista `produtos` e imprima apenas os nomes.

7. Percorra a estrutura `supermercado` e imprima todas as unidades.

8. Liste todos os preços da lista `produtos`.

9. Para cada produto em `produtos`, imprima: `"nome - estoque"`.

10. Use `forEach` para exibir todos os produtos da estrutura `supermercado`, com índice + nome.

---

## 🔍 Bloco 3 — Repetição com Condição (`if`)

11. Percorra `produtos` e imprima apenas os produtos com estoque menor que 15.

12. Percorra a estrutura `supermercado` e imprima os produtos que custam mais de R$ 5,00.

13. Mostre os produtos da lista `produtos` cuja unidade é `"kg"`.

14. Imprima todos os produtos da estrutura `supermercado` com estoque maior que 20 unidades.

15. Exiba os produtos da lista `produtos` cujo nome começa com a letra `"C"`.

---

⚠️ **Dica:** Use sempre `console.log()` para exibir os resultados.  
Pratique cada exercício no console do navegador ou no VS Code para testar seu entendimento.
