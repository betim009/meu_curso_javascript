# Operador Ternário em JavaScript

## O que é o Operador Ternário?

> 💡 O operador ternário é uma forma abreviada de escrever if...else em uma única linha.

**Sintaxe:**
```javascript
condição ? valorSeTrue : valorSeFalse
```

**Exemplo prático:**
```javascript
const idade = 18;
const status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"
```

---

## Comparação: If vs Ternário

**Com if tradicional:**
```javascript
const nota = 7;
let resultado;

if (nota >= 6) {
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}
```

**Com operador ternário:**
```javascript
const nota = 7;
const resultado = nota >= 6 ? "Aprovado" : "Reprovado";
```

---

### 🎯 Teste Rápido #4
Qual é o resultado?
```javascript
const preco = 100;
const desconto = preco > 50 ? 10 : 0;
console.log(desconto);
```
- [ ] 0
- [ ] 10
- [ ] 100
- [ ] Erro

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** 10! Como 100 > 50 é true, o valor 10 é atribuído à variável desconto.

</details>

---

## 🧪 Exercício Prático 3

Converta este if para operador ternário:
```javascript
const idade = 20;
let podeDirigir;

if (idade >= 18) {
    podeDirigir = "Sim";
} else {
    podeDirigir = "Não";
}

// Converta para operador ternário:
// podeDirigir = ?
``` 