# 🎯 MÓDULO 2: Estruturas de Condições em JavaScript

## O que são condições em programação?

Condições são instruções que permitem ao programa **tomar decisões** com base em situações diferentes. Elas funcionam como perguntas do tipo "Se... então... senão...". O programa avalia uma expressão (normalmente uma comparação) e, dependendo se o resultado é verdadeiro (`true`) ou falso (`false`), executa um bloco de código ou outro.

### Por que usar condições?
- Para controlar o fluxo do programa.
- Para reagir a diferentes entradas do usuário.
- Para validar dados e evitar erros.
- Para criar programas inteligentes e interativos.

### Exemplo simples em JavaScript:
```javascript
const idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade!");
}
```

No exemplo acima, o programa verifica se a variável `idade` é maior ou igual a 18. Se for, exibe uma mensagem; senão, exibe outra.

### Expressões booleanas
Uma condição sempre resulta em um valor **booleano**: `true` (verdadeiro) ou `false` (falso).

Exemplos de expressões booleanas:
```javascript
10 > 5        // true
3 === 4       // false
"a" !== "b"   // true
idade >= 16   // depende do valor de idade
```

---

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nível](https://img.shields.io/badge/Nível-Iniciante-brightgreen)
![Tempo](https://img.shields.io/badge/Tempo-2--3%20horas-blue)

---

### 📊 Progresso do Módulo
```
[░░░░░░░░░░] 0% - Iniciando o Módulo
```

---

## 📚 **CONTEÚDO DO MÓDULO**

- **Introdução**: O que são estruturas de condição
- **If, Else, Else If**: Decisões simples e compostas
- **Operador Ternário**: Decisão em uma linha
- **Switch/Case**: Múltiplas escolhas
- **Boas Práticas**: Erros comuns e dicas
- **Projeto Prático**: Sistema de Decisão

---

### **💡 Por que aprender estruturas de condição?**

| 🤔 **Tomada de Decisão** | 🧠 **Lógica de Programação** | 🚦 **Fluxo de Código** | 🛡️ **Validação** |
|-------------------------|-----------------------------|-----------------------|-------------------|
| Permite que o programa escolha caminhos | Base de toda lógica em JS | Controla o que acontece e quando | Garante que só dados corretos sejam usados |

---

### **🎮 Ferramentas Recomendadas**
- **🌐 Console do Browser** (F12)
- **💻 VS Code** ou **Sublime Text**
- **🔄 CodePen** ou **JSFiddle** (online)
- **📱 Node.js** (opcional)

---

## 🎓 **AULA 1: Introdução às Estruturas de Condição**

### **O que são Estruturas de Condição?**

> 💡 Estruturas de condição permitem que o programa tome decisões e siga caminhos diferentes de acordo com as situações.

**Exemplo do mundo real:**
- Se está chovendo, levo guarda-chuva. Se não, vou sem.
- Se a nota for maior ou igual a 6, aprovado. Senão, reprovado.

**No código, usamos estruturas como:**
- if
- else
- else if
- switch/case
- operador ternário

---

### **🧪 Exercício Prático 1**

Escreva em português, com frases, 2 exemplos do seu dia a dia que envolvem decisões ("Se... então... senão...").

**Exemplo:**
- Se está chovendo, então levo guarda-chuva, senão vou sem.
- Se tenho dinheiro, então compro o produto, senão espero o próximo mês. 