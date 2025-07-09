# Boas Práticas e Erros Comuns em Estruturas Condicionais

## Boas Práticas

### 1. Use === em vez de ==
```javascript
// ❌ Ruim
if (idade == "18") { }

// ✅ Bom
if (idade === 18) { }
```

### 2. Evite condições desnecessárias
```javascript
// ❌ Ruim
if (estaAtivo === true) { }

// ✅ Bom
if (estaAtivo) { }
```

### 3. Use else if para condições relacionadas
```javascript
// ❌ Ruim
if (nota >= 9) { }
if (nota >= 7 && nota < 9) { }
if (nota < 7) { }

// ✅ Bom
if (nota >= 9) { }
else if (nota >= 7) { }
else { }
```

---

## Erros Comuns

### 1. Esquecer o break no switch
```javascript
// ❌ Erro comum
switch (cor) {
    case "vermelho":
        console.log("Pare!");
    case "verde":
        console.log("Siga!");
}
```

### 2. Usar = em vez de ===
```javascript
// ❌ Erro comum
if (idade = 18) { } // Atribui 18 à variável!

// ✅ Correto
if (idade === 18) { } // Compara valores
```

### 3. Condições muito complexas
```javascript
// ❌ Difícil de ler
if (idade >= 18 && temCNH === true && carroDisponivel === true && combustivel > 0) { }

// ✅ Mais legível
const podeDirigir = idade >= 18 && temCNH && carroDisponivel && combustivel > 0;
if (podeDirigir) { }
```

---

## 🎯 Teste Rápido #6
Qual é o problema neste código?
```javascript
const preco = 100;
if (preco = 50) {
    console.log("Preço é 50");
}
```
- [ ] Nada, está correto
- [ ] Deveria usar ===
- [ ] Deveria usar ==
- [ ] Sintaxe incorreta

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** Deveria usar ===! O = atribui valor, não compara. O código sempre será true porque atribui 50 a preco.

</details>

---

## 🧪 Exercício Prático 5

Corrija os erros neste código:
```javascript
const idade = 18;
const temCNH = true;

// Corrija os erros:
if (idade = 18) {
    if (temCNH == true) {
        console.log("Pode dirigir!");
    }
}
``` 