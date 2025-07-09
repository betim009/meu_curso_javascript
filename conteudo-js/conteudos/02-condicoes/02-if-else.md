# If, Else e Else If em JavaScript

## Estrutura Básica: If

> 💡 O `if` é a estrutura mais básica de decisão. Ele executa um bloco de código apenas se a condição for verdadeira.

**Sintaxe:**
```javascript
if (condição) {
    // código que executa se a condição for true
}
```

**Exemplo prático:**
```javascript
const idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade!");
}
```

---

### 🎯 Teste Rápido #1
O que acontece se a condição for false?
```javascript
const temperatura = 15;
if (temperatura > 30) {
    console.log("Está quente!");
}
```
- [ ] Mostra "Está quente!"
- [ ] Não mostra nada
- [ ] Dá erro
- [ ] Mostra "false"

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** Não mostra nada! O bloco só executa se a condição for true. Como 15 > 30 é false, o console.log não é executado.

</details>

---

## Estrutura: If... Else

> 💡 O `else` executa um bloco alternativo quando a condição do `if` é falsa.

**Sintaxe:**
```javascript
if (condição) {
    // código se condição for true
} else {
    // código se condição for false
}
```

**Exemplo prático:**
```javascript
const nota = 7;

if (nota >= 6) {
    console.log("Aprovado! 🎉");
} else {
    console.log("Reprovado! 😢");
}
```

---

### 🎯 Teste Rápido #2
Qual mensagem será exibida?
```javascript
const saldo = 50;
if (saldo >= 100) {
    console.log("Pode comprar!");
} else {
    console.log("Saldo insuficiente!");
}
```
- [ ] "Pode comprar!"
- [ ] "Saldo insuficiente!"
- [ ] Nenhuma mensagem
- [ ] Erro

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** "Saldo insuficiente!" - Como 50 >= 100 é false, executa o bloco else.

</details>

---

## Estrutura: If... Else If... Else

> 💡 O `else if` permite múltiplas condições em sequência.

**Sintaxe:**
```javascript
if (condição1) {
    // código se condição1 for true
} else if (condição2) {
    // código se condição2 for true
} else {
    // código se nenhuma condição for true
}
```

**Exemplo prático:**
```javascript
const hora = 14;

if (hora < 12) {
    console.log("Bom dia! ☀️");
} else if (hora < 18) {
    console.log("Boa tarde! 🌤️");
} else {
    console.log("Boa noite! 🌙");
}
```

---

### 🎯 Teste Rápido #3
Quantos blocos podem ser executados em um if...else if...else?
- [ ] Apenas 1
- [ ] Apenas 2
- [ ] Apenas 3
- [ ] Depende do número de else if

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** Apenas 1! O JavaScript executa o primeiro bloco cuja condição for true, depois para.

</details>

---

## 🧪 Exercício Prático 2

Crie um sistema de classificação de notas:
```javascript
const nota = 8;

// Se nota >= 9: "Excelente"
// Se nota >= 7: "Bom"
// Se nota >= 6: "Aprovado"
// Senão: "Reprovado"

// Seu código aqui...
``` 