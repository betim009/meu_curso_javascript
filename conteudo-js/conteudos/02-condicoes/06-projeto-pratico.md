# Projeto Prático: Sistema de Decisão (Jogo RPG Simples)

## Descrição do Projeto

**Objetivo:** Criar um sistema de decisão que simula um jogo de RPG simples, aplicando todas as estruturas condicionais aprendidas.

**Cenário Real:** Imagine que você está desenvolvendo um jogo onde o jogador precisa tomar decisões que afetam o resultado da história.

---

## Requisitos do Projeto

### Funcionalidades Obrigatórias
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

### Funcionalidades Extras (Desafio)
- Sistema de inventário (array de itens)
- Sistema de missões (objetos com condições)
- Sistema de save/load (localStorage)
- Interface de usuário (prompts)

---

## Tecnologias e Conceitos Utilizados
- Estruturas condicionais (if, else, else if)
- Switch/case
- Operador ternário
- Operadores de comparação (===, !==, >, <, >=, <=)
- Operadores lógicos (&&, ||, !)
- Variáveis (let, const)
- Tipos de dados (string, number, boolean, array, object)
- console.log()

---

## Critérios de Avaliação
- **Funcionalidade** (40%): Sistema funciona corretamente
- **Estruturas Condicionais** (30%): Uso correto de if, switch, ternário
- **Código Limpo** (20%): Código bem organizado e comentado
- **Extras** (10%): Funcionalidades adicionais implementadas

---

## Código Base do Projeto

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

---

## Como Executar o Projeto

### Opção 1: Console do Navegador
1. Abra o navegador (Chrome, Firefox, etc.)
2. Pressione **F12** para abrir as ferramentas do desenvolvedor
3. Vá para a aba **Console**
4. Cole todo o código acima
5. Pressione **Enter** para executar

### Opção 2: Editor Online
1. Acesse [CodePen](https://codepen.io) ou [JSFiddle](https://jsfiddle.net)
2. Cole o código na seção JavaScript
3. Execute e veja os resultados

---

## Resultado Esperado
- Escolha da classe com switch/case
- Sistema de combate com if/else
- Decisões com operador ternário
- Status final do personagem
- Resultado da aventura

---

## Desafios Extras

### 🥉 Desafio Bronze
- Sistema de itens (array de equipamentos)
- Diferentes inimigos (objetos com vida e dano)
- Sistema de experiência (XP para subir de nível)

### 🥈 Desafio Prata
- Sistema de missões (objetos com objetivos)
- Sistema de loja (comprar itens com moedas)
- Sistema de save (localStorage)

### 🥇 Desafio Ouro
- Interface interativa (prompts para decisões)
- Sistema de múltiplos personagens
- Sistema de ranking (melhor pontuação)

---

## Dicas para o Desafio
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

---

## Recursos Adicionais
- [MDN Web Docs: JavaScript if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [W3Schools: JavaScript Switch](https://www.w3schools.com/js/js_switch.asp)
- [JavaScript.info: Conditional branching](https://javascript.info/ifelse) 