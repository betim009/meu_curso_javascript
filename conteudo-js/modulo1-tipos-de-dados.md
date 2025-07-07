# 🎯 MÓDULO 1: Tipos de Dados em JavaScript

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nível](https://img.shields.io/badge/Nível-Iniciante-brightgreen)
![Tempo](https://img.shields.io/badge/Tempo-2--3%20horas-blue)

</div>

## 📋 **Objetivos do Módulo**
- ✅ Compreender todos os tipos de dados em JavaScript
- ✅ Aprender a declarar e manipular variáveis
- ✅ Dominar operadores de comparação e lógicos
- ✅ Criar um projeto prático aplicando todos os conceitos

---

## 📚 **CONTEÚDO DO MÓDULO**

### **🎯 O que você vai aprender:**

| Aula | Tópico | Descrição | ⏱️ Tempo |
|------|--------|-----------|----------|
| 1 | **Conceitos Fundamentais** | Dados, variáveis e saída | 30 min |
| 2 | **Tipos Primitivos** | Number, String, Boolean, Undefined, Null | 45 min |
| 3 | **Arrays e Objetos** | Estruturas de dados complexas | 40 min |
| 4 | **Typeof e Conversões** | Como verificar e converter tipos | 35 min |
| 5 | **Operadores** | Comparação e lógica | 40 min |
| 6 | **Projeto Prático** | Sistema de cadastro com validação | 50 min |

### **💡 Por que aprender tipos de dados?**

<div align="center">

| 🏗️ **Fundação Sólida** | 🐛 **Debugging Eficiente** | 🛡️ **Código Robusto** | 🚀 **Preparação Avançada** |
|------------------------|----------------------------|----------------------|---------------------------|
| Tudo em JavaScript é baseado em tipos | Saber o tipo ajuda a encontrar erros | Validação e manipulação correta | Base para funções, objetos e APIs |

</div>

### **📊 Progresso do Módulo**
```
[░░░░░░░░░░] 0% - Iniciando o Módulo
```

**🎯 Próximos Passos:**
- **Aula 1**: Conceitos Fundamentais (Dados, Variáveis, Saída)
- **Aula 2**: Tipos Primitivos (Number, String, Boolean, etc.)
- **Aula 3**: Arrays e Objetos
- **Aula 4**: Typeof e Conversões
- **Aula 5**: Operadores
- **Aula 6**: Projeto Final

### **🎮 Ferramentas Recomendadas**
- **🌐 Console do Browser** (F12)
- **💻 VS Code** ou **Sublime Text**
- **🔄 CodePen** ou **JSFiddle** (online)
- **📱 Node.js** (opcional)

---

## 🎓 **AULA 1: Conceitos Fundamentais**

### **📊 Progresso do Módulo**
```
[██░░░░░░░░] 16% - Aula 1 Concluída
```

### **🔍 O que são Dados?**

> 💡 **Dados** são informações que o computador pode processar. Imagine dados como "fatos" sobre algo.

**🌍 Exemplos do Mundo Real:**
- 📱 **Rede Social**: Seu nome, foto, posts, amigos
- 🛒 **E-commerce**: Produtos, preços, carrinho de compras
- 🎮 **Jogo**: Pontuação, vidas, nível atual
- 📧 **Email**: Remetente, destinatário, assunto, conteúdo

**💻 Exemplo prático:**
```javascript
// Estes são dados sobre uma pessoa
"João Silva"     // Nome (texto)
25               // Idade (número)
true             // Está online (verdadeiro/falso)
["pizza", "café"] // Lista de comidas favoritas (array)
```

### **🎯 Teste Rápido #1**
**Qual desses NÃO é um dado?**
- [ ] Seu nome
- [ ] Sua idade
- [ ] Uma foto
- [ ] O computador em si

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** O computador em si não é um dado. Dados são **informações** que o computador processa, não o hardware.

</details>

### **📦 O que são Variáveis?**

> 🎯 **Variáveis** são como "caixas" onde guardamos dados. Elas têm um nome e podem armazenar diferentes tipos de informação.

**📦 Analogia Visual:**
```
┌─────────────────┐
│   📦 nome       │ ← Rótulo (nome da variável)
│                 │
│  "João Silva"   │ ← Conteúdo (dado)
└─────────────────┘
```

**💻 Exemplo prático:**
```javascript
// Declarando variáveis (criando as "caixas")
let nome = "João Silva";        // 📦 Caixa "nome" com valor "João Silva"
const idade = 25;               // 📦 Caixa "idade" com valor 25
var estaOnline = true;          // 📦 Caixa "estaOnline" com valor true

// Usando as variáveis (pegando o que está nas "caixas")
console.log(nome);        // Mostra: João Silva
console.log(idade);       // Mostra: 25
console.log(estaOnline);  // Mostra: true
```

### **🎯 Teste Rápido #2**
**Qual é o nome da variável no código abaixo?**
```javascript
let usuario = "Maria";
```
- [ ] let
- [ ] usuario
- [ ] Maria
- [ ] =

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** `usuario` é o nome da variável. `let` é a palavra-chave para declarar, `Maria` é o valor, e `=` é o operador de atribuição.

</details>

### **🔧 Tipos de Declaração de Variáveis**

<div align="center">

| Palavra-chave | Escopo | Pode Alterar | Recomendação | Exemplo |
|---------------|--------|--------------|--------------|---------|
| `var` | Global | ✅ Sim | ❌ Antigo | `var nome = "João"` |
| `let` | Bloco | ✅ Sim | ✅ Moderno | `let nome = "João"` |
| `const` | Bloco | ❌ Não | ✅ Moderno | `const idade = 25` |

</div>

**💻 Exemplo prático:**
```javascript
// 1. var (mais antigo, escopo global) - NÃO USE!
var nomeAntigo = "João";

// 2. let (moderno, escopo de bloco, pode ser alterado)
let nome = "João";
nome = "Maria"; // ✅ Pode alterar o valor

// 3. const (moderno, escopo de bloco, NÃO pode ser alterado)
const idade = 25;
// idade = 26; // ❌ ERRO! Não pode alterar const

console.log(nome);  // "Maria"
console.log(idade); // 25
```

**⚠️ Atenção:** Use `const` por padrão, `let` quando precisar alterar o valor, e evite `var`.

### **🎯 Teste Rápido #3**
**Qual declaração vai dar erro?**
```javascript
const preco = 100;
preco = 150;
```
- [ ] Vai funcionar normalmente
- [ ] Vai dar erro
- [ ] Vai dar warning
- [ ] Vai ignorar a alteração

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** Vai dar erro! `const` não permite alteração do valor. Use `let` se precisar alterar o valor depois.

</details>

### **📤 O que é Saída de Dados?**

> 🎯 **Saída de dados** é quando o computador mostra informações para você ver. É como o computador "fala" com você, exibindo resultados na tela.

**🌐 Onde aparece a saída?**
- **🌐 Console do navegador** (F12 → Console)
- **💻 Terminal/CMD** (quando roda JavaScript no computador)
- **📱 Área de resultados** (em editores online como CodePen, JSFiddle)

**💻 Como fazer saída de dados?**
```javascript
// console.log() é o comando mais usado para saída
console.log("Olá, mundo!");                    // Mostra: Olá, mundo!
console.log(42);                               // Mostra: 42
console.log(true);                             // Mostra: true

// Você pode mostrar múltiplas coisas de uma vez
console.log("Nome:", "João", "Idade:", 25);    // Mostra: Nome: João Idade: 25

// Você pode mostrar o conteúdo de variáveis
let nome = "Maria";
let idade = 30;
console.log("Olá,", nome, "você tem", idade, "anos");
// Mostra: Olá, Maria você tem 30 anos
```

**🎨 Outros comandos de saída:**
```javascript
console.log("📝 Informação normal");     // Informação geral
console.warn("⚠️ Aviso!");               // Aviso (amarelo)
console.error("❌ Erro!");               // Erro (vermelho)
console.info("ℹ️ Informação");           // Informação (azul)
console.table(["item1", "item2"]);       // Tabela organizada
```

**🔧 Dica:** Use `console.table()` para arrays e objetos - fica muito mais organizado!

### **🎯 Teste Rápido #4**
**Qual comando mostra um aviso amarelo no console?**
- [ ] console.log()
- [ ] console.warn()
- [ ] console.error()
- [ ] console.info()

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** `console.warn()` mostra avisos em amarelo. É útil para alertar sobre possíveis problemas no código.

</details>

### **🧪 Exercício Prático 0: Primeiros Passos**

**🎯 Objetivo:** Criar suas primeiras variáveis e testar saída de dados.

```javascript
// 1. Crie variáveis com seus dados
let meuNome = "Seu Nome";
const minhaIdade = 25;
let minhaCidade = "Sua Cidade";

// 2. Teste diferentes formas de saída
console.log("=== MEUS DADOS ===");
console.log("Nome:", meuNome);
console.log("Idade:", minhaIdade);
console.log("Cidade:", minhaCidade);

// 3. Teste outros comandos de saída
console.warn("⚠️ Este é um aviso!");
console.error("❌ Este é um erro!");
console.info("ℹ️ Esta é uma informação");

// 4. Altere uma variável (apenas let pode ser alterada)
meuNome = "Novo Nome";
console.log("🔄 Nome alterado para:", meuNome);

// 5. Mostre tudo de uma vez
console.log("📋 Resumo:", meuNome, "|", minhaIdade, "anos |", minhaCidade);
```

**🔧 Desafio Extra:**
Tente usar `console.table()` para mostrar seus dados em formato de tabela!

### **📊 Resumo da Aula 1**

<div align="center">

| ✅ **Conceito** | 📝 **Definição** | 💻 **Exemplo** |
|----------------|------------------|----------------|
| **Dados** | Informações que o computador processa | `"João"`, `25`, `true` |
| **Variáveis** | Caixas que guardam dados | `let nome = "João"` |
| **Saída** | Mostrar informações na tela | `console.log("Olá")` |

</div>

**🎯 Checkpoint da Aula 1:**
- [ ] Entendi o que são dados
- [ ] Sei criar variáveis com let, const e var
- [ ] Consigo usar console.log() e outros comandos
- [ ] Completei o exercício prático

---

## 🎓 **AULA 2: Tipos Primitivos**

### **📊 Progresso do Módulo**
```
[████░░░░░░] 32% - Aula 2 Concluída
```

---

## 🎓 **AULA 2: Tipos Primitivos**

### **O que são Tipos de Dados?**
Tipos de dados são as diferentes formas como podemos armazenar e manipular informações no JavaScript. Cada tipo tem características específicas.

### **1. Number (Números)**
```javascript
// Números inteiros
const idade = 25;
const ano = 2024;

// Números decimais
const altura = 1.75;
const preco = 29.99;

// Números negativos
const temperatura = -5;

console.log(typeof idade); // "number"
console.log(typeof altura); // "number"
```

### **2. String (Texto)**
```javascript
// Aspas duplas
const nome = "João Silva";

// Aspas simples
const cidade = 'São Paulo';

// Template literals (backticks)
const mensagem = `Olá, ${nome}! Você mora em ${cidade}.`;

console.log(typeof nome); // "string"
console.log(mensagem); // "Olá, João Silva! Você mora em São Paulo."
```

### **3. Boolean (Verdadeiro/Falso)**
```javascript
const estaChovendo = true;
const estaEnsolarado = false;
const maiorDeIdade = idade >= 18; // true

console.log(typeof estaChovendo); // "boolean"
console.log(maiorDeIdade); // true
```

### **4. Undefined (Indefinido)**
```javascript
let variavelNaoDefinida;
console.log(variavelNaoDefinida); // undefined
console.log(typeof variavelNaoDefinida); // "undefined"
```

### **5. Null (Nulo)**
```javascript
const valorNulo = null;
console.log(valorNulo); // null
console.log(typeof valorNulo); // "object" (peculiaridade do JavaScript)
```

### **🧪 Exercício Prático 1**
```javascript
// Crie variáveis para seus dados pessoais
const meuNome = "Seu Nome";
const minhaIdade = 25;
const minhaCidade = "Sua Cidade";
const souEstudante = true;

console.log("Nome:", meuNome, "| Tipo:", typeof meuNome);
console.log("Idade:", minhaIdade, "| Tipo:", typeof minhaIdade);
console.log("Cidade:", minhaCidade, "| Tipo:", typeof minhaCidade);
console.log("É estudante:", souEstudante, "| Tipo:", typeof souEstudante);
```

---

## 🎓 **AULA 3: Arrays e Objetos**

### **📊 Progresso do Módulo**
```
[██████░░░░] 48% - Aula 3 Concluída
```

### **6. Array (Lista)**
```javascript
// Array de números
const numeros = [1, 2, 3, 4, 5];

// Array de strings
const frutas = ["maçã", "banana", "laranja"];

// Array misto
const dados = ["João", 25, true, ["JavaScript", "Python"]];

console.log(typeof numeros); // "object"
console.log(Array.isArray(numeros)); // true
console.log(numeros[0]); // 1 (primeiro elemento)
console.log(numeros.length); // 5 (quantidade de elementos)
```

### **7. Object (Objeto)**
```javascript
// Objeto simples
const pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "Rio de Janeiro",
    ativo: true
};

console.log(typeof pessoa); // "object"
console.log(pessoa.nome); // "Maria"
console.log(pessoa["idade"]); // 30 (notação de colchetes)
```

### **🧪 Exercício Prático 2**
```javascript
// Crie um array com suas 3 comidas favoritas
const comidasFavoritas = ["pizza", "hambúrguer", "sushi"];

// Crie um objeto representando você
const meuPerfil = {
    nome: "Seu Nome",
    idade: 25,
    profissao: "Desenvolvedor",
    hobbies: ["ler", "jogar", "viajar"]
};

console.log("Comidas favoritas:", comidasFavoritas);
console.log("Meu perfil:", meuPerfil);
console.log("Meu hobby favorito:", meuPerfil.hobbies[0]);
```

---

## 🎓 **AULA 4: Typeof e Conversões de Tipo**

### **📊 Progresso do Módulo**
```
[████████░░] 64% - Aula 4 Concluída
```

### **Verificando Tipos com typeof**
```javascript
const texto = "JavaScript";
const numero = 42;
const booleano = true;
const array = [1, 2, 3];
const objeto = { nome: "João" };

console.log(typeof texto);    // "string"
console.log(typeof numero);   // "number"
console.log(typeof booleano); // "boolean"
console.log(typeof array);    // "object"
console.log(typeof objeto);   // "object"
console.log(typeof undefined); // "undefined"
```

### **Conversões de Tipo (Type Coercion)**
```javascript
// Conversão automática
console.log("5" + 3);        // "53" (concatenação)
console.log("5" - 3);        // 2 (subtração)
console.log("5" * "3");      // 15 (multiplicação)
console.log("10" / "2");     // 5 (divisão)

// Conversão explícita
console.log(Number("42"));   // 42
console.log(String(42));     // "42"
console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
```

### **🧪 Exercício Prático 3**
```javascript
// Teste diferentes conversões
const numeroString = "123";
const textoNumero = 456;

console.log("String para número:", Number(numeroString));
console.log("Número para string:", String(textoNumero));
console.log("Boolean de 1:", Boolean(1));
console.log("Boolean de 0:", Boolean(0));
console.log("Boolean de string vazia:", Boolean(""));
console.log("Boolean de string com texto:", Boolean("texto"));
```

---

## 🎓 **AULA 5: Operadores de Comparação e Lógicos**

### **📊 Progresso do Módulo**
```
[██████████] 80% - Aula 5 Concluída
```

### **Operadores de Comparação**
```javascript
const a = 10;
const b = 20;

console.log(a == b);   // false (igualdade)
console.log(a === b);  // false (igualdade estrita)
console.log(a != b);   // true (diferença)
console.log(a !== b);  // true (diferença estrita)
console.log(a > b);    // false (maior que)
console.log(a < b);    // true (menor que)
console.log(a >= 10);  // true (maior ou igual)
console.log(a <= 20);  // true (menor ou igual)
```

### **Operadores Lógicos**
```javascript
const temIdade = true;
const temDocumento = false;
const temDinheiro = true;

// AND (&&) - Todas as condições devem ser verdadeiras
console.log(temIdade && temDocumento); // false

// OR (||) - Pelo menos uma condição deve ser verdadeira
console.log(temIdade || temDocumento); // true

// NOT (!) - Inverte o valor booleano
console.log(!temIdade); // false
console.log(!temDocumento); // true

// Combinação de operadores
console.log(temIdade && (temDocumento || temDinheiro)); // true
```

### **Valores Falsy e Truthy**
```javascript
// Valores Falsy (avaliados como false)
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Valores Truthy (avaliados como true)
console.log(Boolean(true));      // true
console.log(Boolean(42));        // true
console.log(Boolean("texto"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
```

### **🧪 Exercício Prático 4**
```javascript
// Teste diferentes comparações
const idade = 18;
const temCNH = false;
const temCarro = true;

console.log("Pode dirigir?", idade >= 18 && temCNH);
console.log("Pode viajar de carro?", temCarro && (idade >= 18 || temCNH));
console.log("É menor de idade?", !(idade >= 18));
console.log("Tem documento ou carro?", temCNH || temCarro);
```

---

## 🎯 **PROJETO PRÁTICO: Sistema de Cadastro**

### **📊 Progresso do Módulo**
```
[██████████] 100% - Módulo Concluído! 🎉
```

### **📋 Descrição do Projeto**

**🎯 Objetivo:** Criar um sistema de cadastro completo que valida diferentes tipos de dados e aplica todos os conceitos aprendidos no módulo.

**🌍 Cenário Real:** Imagine que você está desenvolvendo um sistema para uma empresa que precisa cadastrar funcionários. O sistema deve validar todos os dados antes de aceitar o cadastro.

### **📝 Requisitos do Projeto**

#### **✅ Funcionalidades Obrigatórias:**
1. **Validação de Nome**
   - Deve ser string
   - Mínimo 2 caracteres
   - Máximo 50 caracteres
   - Não pode conter números

2. **Validação de Email**
   - Deve ser string
   - Deve conter "@"
   - Deve terminar com domínio válido (.com, .br, .org, etc.)

3. **Validação de Idade**
   - Deve ser number
   - Entre 18 e 65 anos
   - Não pode ser negativo

4. **Validação de Telefone**
   - Deve ser string
   - Apenas números
   - 10 ou 11 dígitos

5. **Validação de Status**
   - Deve ser boolean
   - true = ativo, false = inativo

6. **Validação de Interesses**
   - Deve ser array
   - Mínimo 1 item
   - Máximo 5 itens
   - Todos os itens devem ser strings

#### **🎨 Funcionalidades Extras (Desafio):**
- **Validação de CPF** (formato brasileiro)
- **Validação de CEP** (8 dígitos)
- **Cálculo automático** de categoria por idade
- **Relatório de validação** com estatísticas

### **🔧 Tecnologias e Conceitos Utilizados:**
- ✅ Tipos de dados (string, number, boolean, array, object)
- ✅ Variáveis (let, const)
- ✅ Operadores de comparação (===, !==, >, <, >=, <=)
- ✅ Operadores lógicos (&&, ||, !)
- ✅ typeof e Array.isArray()
- ✅ Métodos de string (.length, .includes())
- ✅ console.log() e console.error()

### **📊 Critérios de Avaliação:**
- **Funcionalidade** (40%): Sistema funciona corretamente
- **Validação** (30%): Todas as validações implementadas
- **Código Limpo** (20%): Código bem organizado e comentado
- **Extras** (10%): Funcionalidades adicionais implementadas

### **⏱️ Tempo Estimado:** 50 minutos

---

### **💻 Código do Projeto**
```javascript
// ========================================
// SISTEMA DE CADASTRO COM VALIDAÇÃO
// ========================================
// Este projeto aplica APENAS os conceitos aprendidos no módulo:
// - Tipos de dados (string, number, boolean, array, object)
// - Variáveis (let, const)
// - Operadores de comparação e lógicos
// - typeof e Array.isArray()
// - console.log()

// 📋 DADOS DE TESTE - Simula dados de um funcionário
const dadosUsuario = {
    nome: "João Silva",
    email: "joao@email.com",
    idade: 25,
    telefone: "11999999999",
    ativo: true,
    interesses: ["programação", "música", "esportes"]
};

// 🧪 DADOS INVÁLIDOS PARA TESTE
const dadosInvalidos = {
    nome: "J", // Muito curto
    email: "email-invalido", // Sem @
    idade: -5, // Negativo
    telefone: "123", // Muito curto
    ativo: "sim", // Não é boolean
    interesses: [] // Array vazio
};

// 🔍 VALIDAÇÃO USANDO APENAS CONCEITOS DO MÓDULO
console.log("🔍 INICIANDO VALIDAÇÃO DE CADASTRO");
console.log("=".repeat(50));

// 📋 TESTE 1: DADOS VÁLIDOS
console.log("\n📋 TESTE 1 - DADOS VÁLIDOS");
console.log("=".repeat(50));

// 1️⃣ VALIDAÇÃO DE NOME
console.log("1️⃣ Validando nome...");
const nomeValido = typeof dadosUsuario.nome === "string" && 
                   dadosUsuario.nome.length >= 2 && 
                   dadosUsuario.nome.length <= 50;
console.log("Nome válido:", nomeValido ? "✅ Sim" : "❌ Não");

// 2️⃣ VALIDAÇÃO DE EMAIL
console.log("2️⃣ Validando email...");
const emailValido = typeof dadosUsuario.email === "string" && 
                    dadosUsuario.email.includes("@");
console.log("Email válido:", emailValido ? "✅ Sim" : "❌ Não");

// 3️⃣ VALIDAÇÃO DE IDADE
console.log("3️⃣ Validando idade...");
const idadeValida = typeof dadosUsuario.idade === "number" && 
                    dadosUsuario.idade >= 18 && 
                    dadosUsuario.idade <= 65;
console.log("Idade válida:", idadeValida ? "✅ Sim" : "❌ Não");

// 4️⃣ VALIDAÇÃO DE TELEFONE
console.log("4️⃣ Validando telefone...");
const telefoneValido = typeof dadosUsuario.telefone === "string" && 
                       dadosUsuario.telefone.length >= 10 && 
                       dadosUsuario.telefone.length <= 11;
console.log("Telefone válido:", telefoneValido ? "✅ Sim" : "❌ Não");

// 5️⃣ VALIDAÇÃO DE STATUS
console.log("5️⃣ Validando status...");
const statusValido = typeof dadosUsuario.ativo === "boolean";
console.log("Status válido:", statusValido ? "✅ Sim" : "❌ Não");

// 6️⃣ VALIDAÇÃO DE INTERESSES
console.log("6️⃣ Validando interesses...");
const interessesValidos = Array.isArray(dadosUsuario.interesses) && 
                          dadosUsuario.interesses.length >= 1 && 
                          dadosUsuario.interesses.length <= 5;
console.log("Interesses válidos:", interessesValidos ? "✅ Sim" : "❌ Não");

// 📊 RESULTADO FINAL - DADOS VÁLIDOS
const todosValidos = nomeValido && emailValido && idadeValida && 
                     telefoneValido && statusValido && interessesValidos;

console.log("\n📊 RESULTADO FINAL:");
if (todosValidos) {
    console.log("🎉 CADASTRO VÁLIDO!");
    console.log("📋 Dados do usuário:");
    console.log("Nome:", dadosUsuario.nome);
    console.log("Email:", dadosUsuario.email);
    console.log("Idade:", dadosUsuario.idade);
    console.log("Telefone:", dadosUsuario.telefone);
    console.log("Status:", dadosUsuario.ativo ? "Ativo" : "Inativo");
    console.log("Interesses:", dadosUsuario.interesses);
    
    // 📈 INFORMAÇÕES ADICIONAIS
    const podeDirigir = dadosUsuario.idade >= 18;
    const temInteresses = dadosUsuario.interesses.length > 0;
    
    console.log("\n📈 Informações adicionais:");
    console.log("Pode dirigir:", podeDirigir ? "Sim" : "Não");
    console.log("Tem interesses:", temInteresses ? "Sim" : "Não");
    console.log("Quantidade de interesses:", dadosUsuario.interesses.length);
} else {
    console.log("❌ CADASTRO INVÁLIDO!");
}

// 📋 TESTE 2: DADOS INVÁLIDOS
console.log("\n📋 TESTE 2 - DADOS INVÁLIDOS");
console.log("=".repeat(50));

// 1️⃣ VALIDAÇÃO DE NOME
console.log("1️⃣ Validando nome...");
const nomeInvalido = typeof dadosInvalidos.nome === "string" && 
                     dadosInvalidos.nome.length >= 2 && 
                     dadosInvalidos.nome.length <= 50;
console.log("Nome válido:", nomeInvalido ? "✅ Sim" : "❌ Não");

// 2️⃣ VALIDAÇÃO DE EMAIL
console.log("2️⃣ Validando email...");
const emailInvalido = typeof dadosInvalidos.email === "string" && 
                      dadosInvalidos.email.includes("@");
console.log("Email válido:", emailInvalido ? "✅ Sim" : "❌ Não");

// 3️⃣ VALIDAÇÃO DE IDADE
console.log("3️⃣ Validando idade...");
const idadeInvalida = typeof dadosInvalidos.idade === "number" && 
                      dadosInvalidos.idade >= 18 && 
                      dadosInvalidos.idade <= 65;
console.log("Idade válida:", idadeInvalida ? "✅ Sim" : "❌ Não");

// 4️⃣ VALIDAÇÃO DE TELEFONE
console.log("4️⃣ Validando telefone...");
const telefoneInvalido = typeof dadosInvalidos.telefone === "string" && 
                         dadosInvalidos.telefone.length >= 10 && 
                         dadosInvalidos.telefone.length <= 11;
console.log("Telefone válido:", telefoneInvalido ? "✅ Sim" : "❌ Não");

// 5️⃣ VALIDAÇÃO DE STATUS
console.log("5️⃣ Validando status...");
const statusInvalido = typeof dadosInvalidos.ativo === "boolean";
console.log("Status válido:", statusInvalido ? "✅ Sim" : "❌ Não");

// 6️⃣ VALIDAÇÃO DE INTERESSES
console.log("6️⃣ Validando interesses...");
const interessesInvalidos = Array.isArray(dadosInvalidos.interesses) && 
                            dadosInvalidos.interesses.length >= 1 && 
                            dadosInvalidos.interesses.length <= 5;
console.log("Interesses válidos:", interessesInvalidos ? "✅ Sim" : "❌ Não");

// 📊 RESULTADO FINAL - DADOS INVÁLIDOS
const todosInvalidos = nomeInvalido && emailInvalido && idadeInvalida && 
                       telefoneInvalido && statusInvalido && interessesInvalidos;

console.log("\n📊 RESULTADO FINAL:");
if (todosInvalidos) {
    console.log("🎉 CADASTRO VÁLIDO!");
} else {
    console.log("❌ CADASTRO INVÁLIDO!");
    console.log("🚨 Problemas encontrados:");
    
    if (!nomeInvalido) console.log("- Nome inválido");
    if (!emailInvalido) console.log("- Email inválido");
    if (!idadeInvalida) console.log("- Idade inválida");
    if (!telefoneInvalido) console.log("- Telefone inválido");
    if (!statusInvalido) console.log("- Status inválido");
    if (!interessesInvalidos) console.log("- Interesses inválidos");
}

console.log("\n" + "=".repeat(50));
console.log("🏁 TESTES CONCLUÍDOS!");
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

#### **🔧 Opção 3: VS Code + Node.js**
1. Crie um arquivo `projeto.js`
2. Cole o código
3. Abra o terminal e execute: `node projeto.js`

### **📊 Resultado Esperado**
Ao executar o código, você verá:
- ✅ Validação detalhada de cada campo
- 📊 Tabela com os dados do usuário
- 📈 Informações adicionais (categoria, permissões)
- 🚨 Lista de erros (se houver)
- 📊 Estatísticas de validação

### **🎨 Desafios Extras**

#### **🥉 Desafio Bronze:**
Adicione validação para:
- **CPF**: 11 dígitos numéricos
- **CEP**: 8 dígitos numéricos
- **Data de nascimento**: formato DD/MM/AAAA

#### **🥈 Desafio Prata:**
Crie uma função que:
- **Calcula idade** a partir da data de nascimento
- **Valida CPF** com algoritmo brasileiro
- **Formata telefone** automaticamente (XX) XXXXX-XXXX

#### **🥇 Desafio Ouro:**
Desenvolva um sistema completo que:
- **Salva dados** em localStorage
- **Lista todos** os cadastros
- **Edita cadastros** existentes
- **Remove cadastros** por ID
- **Exporta dados** em formato JSON

### **🔍 Dicas para o Desafio**
```javascript
// Exemplo de validação usando apenas conceitos do módulo
const cpf = "12345678901";

// Validação básica de CPF (apenas conceitos do módulo)
const cpfValido = typeof cpf === "string" && 
                  cpf.length === 11 && 
                  !isNaN(Number(cpf));

console.log("CPF válido:", cpfValido ? "Sim" : "Não");

// Validação de CEP
const cep = "12345678";
const cepValido = typeof cep === "string" && 
                  cep.length === 8 && 
                  !isNaN(Number(cep));

console.log("CEP válido:", cepValido ? "Sim" : "Não");

// Validação de data (formato simples)
const data = "25/12/2024";
const dataValida = typeof data === "string" && 
                   data.length === 10 && 
                   data.includes("/");

console.log("Data válida:", dataValida ? "Sim" : "Não");
```

### **📚 Recursos Adicionais**
- **MDN Web Docs**: [JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- **W3Schools**: [JavaScript Validation](https://www.w3schools.com/js/js_validation.asp)
- **Regex101**: Para testar expressões regulares

---

## 📝 **Resumo do Módulo**

### **Tipos Aprendidos:**
1. **Primitivos**: number, string, boolean, undefined, null
2. **Complexos**: array, object
3. **Verificação**: typeof, Array.isArray()
4. **Conversão**: Number(), String(), Boolean()

### **Operadores Dominados:**
- **Comparação**: ==, ===, !=, !==, >, <, >=, <=
- **Lógicos**: &&, ||, !
- **Falsy/Truthy**: valores que avaliam como true/false

### **Próximos Passos:**
No próximo módulo, você aprenderá como usar esses tipos de dados com estruturas condicionais (if/else, switch) para criar lógicas mais complexas!

---

## 🎯 **Checklist de Conclusão**

- [ ] Entendi o que são dados e variáveis
- [ ] Sei declarar variáveis com let, const e var
- [ ] Consigo usar console.log() para saída de dados
- [ ] Entendi todos os tipos primitivos
- [ ] Sei declarar arrays e objetos
- [ ] Consigo verificar tipos com typeof
- [ ] Entendo conversões de tipo
- [ ] Domino operadores de comparação
- [ ] Sei usar operadores lógicos
- [ ] Completei o projeto prático
- [ ] Entendo valores falsy e truthy

**Parabéns! Você completou o Módulo 1! 🎉**

---

## 🏆 **CONGRATULAÇÕES!**

### **📊 Progresso Final do Módulo**
```
[██████████] 100% - Módulo Concluído! 🎉
```

### **🎯 O que você conquistou:**
- ✅ **Fundamentos sólidos** em tipos de dados
- ✅ **Habilidade prática** com variáveis e operadores
- ✅ **Projeto completo** de sistema de cadastro
- ✅ **Base preparada** para o próximo módulo

### **🚀 Próximo Passo:**
No **MÓDULO 2: Estruturas de Condições**, você aprenderá:
- If/else e switch/case
- Operadores ternários
- Estruturas condicionais aninhadas
- Projeto prático com validações complexas

**Continue assim! Você está no caminho certo! 🌟** 