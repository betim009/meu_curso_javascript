# 🎯 MÓDULO 2: Estruturas de Condições em JavaScript

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nível](https://img.shields.io/badge/Nível-Iniciante-brightgreen)
![Tempo](https://img.shields.io/badge/Tempo-2--3%20horas-blue)

</div>

### 📊 Progresso do Módulo
```
[░░░░░░░░░░] 0% - Iniciando o Módulo
```

---

## 📚 **CONTEÚDO DO MÓDULO**

### **🎯 O que você vai aprender:**

| Aula | Tópico | Descrição | ⏱️ Tempo |
|------|--------|-----------|----------|
| 1 | **Introdução** | O que são estruturas de condição | 15 min |
| 2 | **If, Else, Else If** | Decisões simples e compostas | 40 min |
| 3 | **Operador Ternário** | Decisão em uma linha | 20 min |
| 4 | **Switch/Case** | Múltiplas escolhas | 30 min |
| 5 | **Boas Práticas** | Erros comuns e dicas | 15 min |
| 6 | **Projeto Prático** | Sistema de Decisão | 50 min |

### **💡 Por que aprender estruturas de condição?**

<div align="center">

| 🤔 **Tomada de Decisão** | 🧠 **Lógica de Programação** | 🚦 **Fluxo de Código** | 🛡️ **Validação** |
|-------------------------|-----------------------------|-----------------------|-------------------|
| Permite que o programa escolha caminhos | Base de toda lógica em JS | Controla o que acontece e quando | Garante que só dados corretos sejam usados |

</div>

### **🎮 Ferramentas Recomendadas**
- **🌐 Console do Browser** (F12)
- **💻 VS Code** ou **Sublime Text**
- **🔄 CodePen** ou **JSFiddle** (online)
- **📱 Node.js** (opcional)

---

## 🎓 **AULA 1: Introdução às Estruturas de Condição**

### 📊 Progresso do Módulo
```
[██░░░░░░░░] 16% - Aula 1 Concluída
```

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

### **🧪 Exercício Prático 1**

Escreva em português, com frases, 2 exemplos do seu dia a dia que envolvem decisões ("Se... então... senão...").

**Exemplo:**
- Se está chovendo, então levo guarda-chuva, senão vou sem.
- Se tenho dinheiro, então compro o produto, senão espero o próximo mês.

---

## 🎓 **AULA 2: If, Else e Else If**

### 📊 Progresso do Módulo
```
[████░░░░░░] 32% - Aula 2 Concluída
```

### **🔍 Estrutura Básica: If**

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

### **🎯 Teste Rápido #1**
**O que acontece se a condição for false?**
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

### **🔄 Estrutura: If... Else**

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

### **🎯 Teste Rápido #2**
**Qual mensagem será exibida?**
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

### **🔄 Estrutura: If... Else If... Else**

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

### **🎯 Teste Rápido #3**
**Quantos blocos podem ser executados em um if...else if...else?**
- [ ] Apenas 1
- [ ] Apenas 2
- [ ] Apenas 3
- [ ] Depende do número de else if

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** Apenas 1! O JavaScript executa o primeiro bloco cuja condição for true, depois para.

</details>

### **🧪 Exercício Prático 2**

Crie um sistema de classificação de notas:
```javascript
const nota = 8;

// Se nota >= 9: "Excelente"
// Se nota >= 7: "Bom"
// Se nota >= 6: "Aprovado"
// Senão: "Reprovado"

// Seu código aqui...
```

---

## 🎓 **AULA 3: Operador Ternário**

### 📊 Progresso do Módulo
```
[██████░░░░] 48% - Aula 3 Concluída
```

### **⚡ O que é o Operador Ternário?**

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

### **🔄 Comparação: If vs Ternário**

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

### **🎯 Teste Rápido #4**
**Qual é o resultado?**
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

### **🧪 Exercício Prático 3**

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

---

## 🎓 **AULA 4: Switch/Case**

### 📊 Progresso do Módulo
```
[████████░░] 64% - Aula 4 Concluída
```

### **🔄 O que é Switch/Case?**

> 💡 Switch/case é usado quando você tem múltiplas opções para comparar com uma única variável.

**Sintaxe:**
```javascript
switch (variável) {
    case valor1:
        // código se variável === valor1
        break;
    case valor2:
        // código se variável === valor2
        break;
    default:
        // código se nenhum case for verdadeiro
}
```

**Exemplo prático:**
```javascript
const diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Dia inválido");
}
```

### **⚠️ Importante: Break**

> ⚠️ Sem o `break`, o código continua executando os próximos cases!

**Exemplo sem break:**
```javascript
const nota = 7;

switch (nota) {
    case 10:
        console.log("Perfeito!");
    case 9:
        console.log("Excelente!");
    case 8:
        console.log("Muito bom!");
    case 7:
        console.log("Bom!");
    default:
        console.log("Precisa melhorar!");
}
// Resultado: "Bom!" e "Precisa melhorar!"
```

### **🎯 Teste Rápido #5**
**O que acontece se esquecer o break?**
```javascript
const cor = "vermelho";
switch (cor) {
    case "vermelho":
        console.log("Pare!");
    case "amarelo":
        console.log("Atenção!");
    case "verde":
        console.log("Siga!");
}
```
- [ ] Apenas "Pare!"
- [ ] Apenas "Atenção!"
- [ ] "Pare!", "Atenção!" e "Siga!"
- [ ] Erro

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** "Pare!", "Atenção!" e "Siga!" - Sem break, executa todos os cases a partir do match.

</details>

### **🧪 Exercício Prático 4**

Crie um switch para os meses do ano:
```javascript
const mes = 3;

// Crie um switch que mostre:
// 1-3: "Primeiro trimestre"
// 4-6: "Segundo trimestre"
// 7-9: "Terceiro trimestre"
// 10-12: "Quarto trimestre"
// default: "Mês inválido"
```

---

## 🎓 **AULA 5: Boas Práticas e Erros Comuns**

### 📊 Progresso do Módulo
```
[██████████] 80% - Aula 5 Concluída
```

### **✅ Boas Práticas**

#### **1. Use === em vez de ==**
```javascript
// ❌ Ruim
if (idade == "18") { }

// ✅ Bom
if (idade === 18) { }
```

#### **2. Evite condições desnecessárias**
```javascript
// ❌ Ruim
if (estaAtivo === true) { }

// ✅ Bom
if (estaAtivo) { }
```

#### **3. Use else if para condições relacionadas**
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

### **❌ Erros Comuns**

#### **1. Esquecer o break no switch**
```javascript
// ❌ Erro comum
switch (cor) {
    case "vermelho":
        console.log("Pare!");
    case "verde":
        console.log("Siga!");
}
```

#### **2. Usar = em vez de ===**
```javascript
// ❌ Erro comum
if (idade = 18) { } // Atribui 18 à variável!

// ✅ Correto
if (idade === 18) { } // Compara valores
```

#### **3. Condições muito complexas**
```javascript
// ❌ Difícil de ler
if (idade >= 18 && temCNH === true && carroDisponivel === true && combustivel > 0) { }

// ✅ Mais legível
const podeDirigir = idade >= 18 && temCNH && carroDisponivel && combustivel > 0;
if (podeDirigir) { }
```

### **🎯 Teste Rápido #6**
**Qual é o problema neste código?**
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

### **🧪 Exercício Prático 5**

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

---

## 🎯 **PROJETO PRÁTICO: Sistema de Decisão**

### 📊 Progresso do Módulo
```
[██████████] 100% - Módulo Concluído! 🎉
```

### **📋 Descrição do Projeto**

**🎯 Objetivo:** Criar um sistema de decisão que simula um jogo de RPG simples, aplicando todas as estruturas condicionais aprendidas.

**🌍 Cenário Real:** Imagine que você está desenvolvendo um jogo onde o jogador precisa tomar decisões que afetam o resultado da história.

### **📝 Requisitos do Projeto**

#### **✅ Funcionalidades Obrigatórias:**
1. **Sistema de Personagem**
   - Nome (string)
   - Classe (guerreiro, mago, arqueiro)
   - Nível (1-10)
   - Vida (0-100)
   - Energia (0-100)

2. **Sistema de Decisões**
   - Usar if/else para escolhas simples
   - Usar else if para múltiplas opções
   - Usar switch/case para classes
   - Usar operador ternário para status

3. **Sistema de Combate**
   - Diferentes danos por classe
   - Sistema de vida e energia
   - Condições de vitória/derrota

4. **Sistema de Recompensas**
   - Experiência baseada em decisões
   - Subida de nível
   - Recuperação de vida/energia

#### **🎨 Funcionalidades Extras (Desafio):**
- **Sistema de inventário** (array de itens)
- **Sistema de missões** (objetos com condições)
- **Sistema de save/load** (localStorage)
- **Interface de usuário** (prompts)

### **🔧 Tecnologias e Conceitos Utilizados:**
- ✅ Estruturas condicionais (if, else, else if)
- ✅ Switch/case
- ✅ Operador ternário
- ✅ Operadores de comparação (===, !==, >, <, >=, <=)
- ✅ Operadores lógicos (&&, ||, !)
- ✅ Variáveis (let, const)
- ✅ Tipos de dados (string, number, boolean, array, object)
- ✅ console.log()

### **📊 Critérios de Avaliação:**
- **Funcionalidade** (40%): Sistema funciona corretamente
- **Estruturas Condicionais** (30%): Uso correto de if, switch, ternário
- **Código Limpo** (20%): Código bem organizado e comentado
- **Extras** (10%): Funcionalidades adicionais implementadas

### **⏱️ Tempo Estimado:** 50 minutos

---

### **💻 Código do Projeto**

```javascript
// ========================================
// SISTEMA DE DECISÃO - JOGO RPG SIMPLES
// ========================================
// Este projeto aplica APENAS os conceitos aprendidos no módulo:
// - Estruturas condicionais (if, else, else if)
// - Switch/case
// - Operador ternário
// - Operadores de comparação e lógicos
// - Variáveis e tipos de dados
// - console.log()

// 📋 DADOS DO PERSONAGEM
const personagem = {
    nome: "Herói",
    classe: "guerreiro", // guerreiro, mago, arqueiro
    nivel: 1,
    vida: 100,
    energia: 100
};

// 🎮 SISTEMA DE DECISÕES
console.log("🎮 INICIANDO JOGO DE RPG");
console.log("=".repeat(50));

// 1️⃣ ESCOLHA DA CLASSE (Switch/Case)
console.log("1️⃣ Escolhendo classe...");
switch (personagem.classe) {
    case "guerreiro":
        console.log("⚔️ Você escolheu ser um Guerreiro!");
        console.log("💪 Força: Alta | 🧠 Magia: Baixa | 🏹 Precisão: Média");
        break;
    case "mago":
        console.log("🔮 Você escolheu ser um Mago!");
        console.log("💪 Força: Baixa | 🧠 Magia: Alta | 🏹 Precisão: Média");
        break;
    case "arqueiro":
        console.log("🏹 Você escolheu ser um Arqueiro!");
        console.log("💪 Força: Média | 🧠 Magia: Baixa | 🏹 Precisão: Alta");
        break;
    default:
        console.log("❓ Classe desconhecida!");
}

// 2️⃣ SISTEMA DE COMBATE (If/Else/Else If)
console.log("\n2️⃣ Sistema de combate...");
const inimigoVida = 50;
const inimigoNivel = 3;

// Diferentes danos por classe
let danoPersonagem;
if (personagem.classe === "guerreiro") {
    danoPersonagem = 25;
} else if (personagem.classe === "mago") {
    danoPersonagem = 30;
} else if (personagem.classe === "arqueiro") {
    danoPersonagem = 20;
} else {
    danoPersonagem = 15;
}

console.log("⚔️ Seu dano:", danoPersonagem);

// 3️⃣ DECISÃO DE ATAQUE (Operador Ternário)
const podeAtacar = personagem.energia >= 20;
const resultadoAtaque = podeAtacar ? "Pode atacar!" : "Energia insuficiente!";
console.log("🎯 Status do ataque:", resultadoAtaque);

// 4️⃣ SISTEMA DE VIDA (If/Else)
if (podeAtacar) {
    personagem.energia = personagem.energia - 20;
    const inimigoDerrotado = danoPersonagem >= inimigoVida;
    
    if (inimigoDerrotado) {
        console.log("🎉 Inimigo derrotado!");
        personagem.nivel = personagem.nivel + 1;
        personagem.vida = personagem.vida + 20;
        
        // Verificar se vida não passa do máximo
        if (personagem.vida > 100) {
            personagem.vida = 100;
        }
    } else {
        console.log("💥 Inimigo sobreviveu!");
        personagem.vida = personagem.vida - 10;
    }
} else {
    console.log("😴 Personagem descansa...");
    personagem.energia = personagem.energia + 10;
    
    // Verificar se energia não passa do máximo
    if (personagem.energia > 100) {
        personagem.energia = 100;
    }
}

// 5️⃣ STATUS FINAL (Operador Ternário)
const statusVida = personagem.vida > 50 ? "Saudável" : "Ferido";
const statusEnergia = personagem.energia > 50 ? "Energizado" : "Cansado";
const podeContinuar = personagem.vida > 0;

console.log("\n📊 STATUS FINAL:");
console.log("Nome:", personagem.nome);
console.log("Classe:", personagem.classe);
console.log("Nível:", personagem.nivel);
console.log("Vida:", personagem.vida, "(", statusVida, ")");
console.log("Energia:", personagem.energia, "(", statusEnergia, ")");

// 6️⃣ RESULTADO FINAL (If/Else)
if (podeContinuar) {
    console.log("🎮 Você pode continuar a aventura!");
} else {
    console.log("💀 Game Over! Você morreu!");
}

console.log("\n" + "=".repeat(50));
console.log("🏁 JOGO CONCLUÍDO!");
console.log("=".repeat(50));
```

### **🚀 Como Executar o Projeto**

#### **📱 Opção 1: Console do Navegador**
1. Abra o navegador (Chrome, Firefox, etc.)
2. Pressione **F12** para abrir as ferramentas do desenvolvedor
3. Vá para a aba **Console**
4. Cole todo o código acima
5. Pressione **Enter** para executar

#### **💻 Opção 2: Editor Online**
1. Acesse [CodePen](https://codepen.io) ou [JSFiddle](https://jsfiddle.net)
2. Cole o código na seção JavaScript
3. Execute e veja os resultados

### **📊 Resultado Esperado**
Ao executar o código, você verá:
- ✅ Escolha da classe com switch/case
- ⚔️ Sistema de combate com if/else
- 🎯 Decisões com operador ternário
- 📊 Status final do personagem
- 🎮 Resultado da aventura

### **🎨 Desafios Extras**

#### **🥉 Desafio Bronze:**
Adicione:
- **Sistema de itens** (array de equipamentos)
- **Diferentes inimigos** (objetos com vida e dano)
- **Sistema de experiência** (XP para subir de nível)

#### **🥈 Desafio Prata:**
Crie:
- **Sistema de missões** (objetos com objetivos)
- **Sistema de loja** (comprar itens com moedas)
- **Sistema de save** (localStorage)

#### **🥇 Desafio Ouro:**
Desenvolva:
- **Interface interativa** (prompts para decisões)
- **Sistema de múltiplos personagens**
- **Sistema de ranking** (melhor pontuação)

### **🔍 Dicas para o Desafio**
```javascript
// Exemplo de sistema de itens
const inventario = ["espada", "poção", "escudo"];
const temEspada = inventario.includes("espada");

// Exemplo de sistema de experiência
const experiencia = 150;
const nivelAtual = Math.floor(experiencia / 100) + 1;

// Exemplo de sistema de save
const dadosJogo = {
    personagem: personagem,
    inventario: inventario,
    experiencia: experiencia
};
```

### **📚 Recursos Adicionais**
- **MDN Web Docs**: [JavaScript if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- **W3Schools**: [JavaScript Switch](https://www.w3schools.com/js/js_switch.asp)
- **JavaScript.info**: [Conditional branching](https://javascript.info/ifelse)

---

## 📝 **Resumo do Módulo**

### **Estruturas Aprendidas:**
1. **If/Else** - Decisões simples e compostas
2. **Else If** - Múltiplas condições
3. **Operador Ternário** - Decisão em uma linha
4. **Switch/Case** - Múltiplas escolhas
5. **Boas Práticas** - Código limpo e eficiente

### **Operadores Dominados:**
- **Comparação**: ===, !==, >, <, >=, <=
- **Lógicos**: &&, ||, !
- **Ternário**: ? :

### **Próximos Passos:**
No próximo módulo, você aprenderá sobre **Repetições (Loops)** para automatizar tarefas repetitivas!

---

## 🎯 **Checklist de Conclusão**

- [ ] Entendi o que são estruturas de condição
- [ ] Sei usar if, else e else if
- [ ] Consigo usar o operador ternário
- [ ] Domino switch/case
- [ ] Conheço boas práticas
- [ ] Completei o projeto prático
- [ ] Entendo quando usar cada estrutura

**Parabéns! Você completou o Módulo 2! 🎉**

---

## 🏆 **CONGRATULAÇÕES!**

### **📊 Progresso Final do Módulo**
```
[██████████] 100% - Módulo Concluído! 🎉
```

### **🎯 O que você conquistou:**
- ✅ **Lógica de decisão** em JavaScript
- ✅ **Controle de fluxo** do programa
- ✅ **Projeto completo** de jogo RPG
- ✅ **Base preparada** para loops e funções

### **🚀 Próximo Passo:**
No **MÓDULO 3: Repetições (Loops)**, você aprenderá:
- For, while e do-while
- ForEach, map, filter, reduce
- Loops aninhados
- Projeto prático com automação

**Continue assim! Você está no caminho certo! 🌟** 