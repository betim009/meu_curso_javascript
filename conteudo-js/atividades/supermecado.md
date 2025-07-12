# 🧪 Exercícios de Prática — Lista de Supermercado (JavaScript)

Este material contém **15 exercícios práticos** com base em duas estruturas de dados sobre produtos de supermercado em JavaScript.  
Os exercícios estão organizados em três blocos:

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

## 📘 Bloco 1 — Acesso direto e modificação

```javascript
// 1
console.log(produtos[0].nome);

// 2
console.log(`Preço: R$ ${supermercado.precos[2].toFixed(2)}`);

// 3
produtos.find(p => p.nome === "Feijão").estoque = 10;

// 4
const indexCafe = supermercado.produtos.indexOf("Café");
supermercado.unidades[indexCafe] = "g";

// 5
console.log(`Produto: ${supermercado.produtos[2]} | Unidade: ${supermercado.unidades[2]}`);
```

---

## 🔁 Bloco 2 — Uso de `for...of`

```javascript
// 6
for (const item of produtos) {
  console.log(item.nome);
}

// 7
for (const unidade of supermercado.unidades) {
  console.log(unidade);
}

// 8
for (const item of produtos) {
  console.log(item.preco);
}

// 9
for (const item of produtos) {
  console.log(`${item.nome} - ${item.estoque}`);
}

// 10
supermercado.produtos.forEach((nome, i) => {
  console.log(`${i} - ${nome}`);
});
```

---

## 🔍 Bloco 3 — Uso de `for` com `if`

```javascript
// 11
for (const item of produtos) {
  if (item.estoque < 15) {
    console.log(item.nome);
  }
}

// 12
supermercado.produtos.forEach((nome, i) => {
  if (supermercado.precos[i] > 5.00) {
    console.log(nome);
  }
});

// 13
for (const item of produtos) {
  if (item.unidade === "kg") {
    console.log(item.nome);
  }
}

// 14
supermercado.produtos.forEach((nome, i) => {
  if (supermercado.estoque[i] > 20) {
    console.log(nome);
  }
});

// 15
for (const item of produtos) {
  if (item.nome.startsWith("C")) {
    console.log(item.nome);
  }
}
```
