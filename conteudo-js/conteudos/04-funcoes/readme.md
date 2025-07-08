# 📘 Funções em JavaScript - Explicação Simples

Este material explica o que são **funções em JavaScript** e como usá-las, com exemplos práticos e fáceis de entender.

## 🤔 O que é uma função?

Uma função é como uma **receita de bolo**: um conjunto de instruções que você pode usar várias vezes sem precisar reescrever tudo.

**Imagine que:**
- Funções são como "máquinas" que fazem tarefas específicas
- Você aperta um botão (chama a função) e ela faz o trabalho
- Às vezes você precisa colocar ingredientes (parâmetros) para a máquina funcionar
- A máquina pode devolver algo pronto (retorno)

## 🧠 Tipos de Funções

### 1️⃣ Função Simples (sem parâmetros)

É como apertar um interruptor - a luz acende sem precisar de mais informações.

```js
function dizOla() {
    console.log("Olá, tudo bem com você?");
}

// Para usar a função:
dizOla();  // Mostra: Olá, tudo bem com você?
```

**Exemplo do dia a dia:** Função "ligar TV" - aperta o botão e a TV liga.

### 2️⃣ Função com Parâmetros

É como uma máquina que precisa de materiais para funcionar.

```js
function cumprimentar(nome) {
    console.log("Olá, " + nome + "! Como vai?");
}

// Para usar:
cumprimentar("Maria");  // Mostra: Olá, Maria! Como vai?
cumprimentar("João");   // Mostra: Olá, João! Como vai?
```

**Exemplo do dia a dia:** Máquina de café onde você escolhe o tipo de café.

### 3️⃣ Função com Retorno

É como perguntar algo a alguém e receber uma resposta que você pode usar depois.

```js
function somar(numero1, numero2) {
    return numero1 + numero2;
}

// Para usar:
let resultado = somar(5, 3);
console.log(resultado);  // Mostra: 8

console.log(somar(10, 20));  // Mostra: 30
```

**Exemplo do dia a dia:** Perguntar quanto custa um produto e usar essa informação para decidir se vai comprar.

## 🛠️ Exemplos Práticos

### ✅ Calculadora Simples

```js
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero!";
    }
    return a / b;
}

// Usando a calculadora:
console.log(soma(10, 5));         // 15
console.log(subtracao(10, 5));    // 5
console.log(multiplicacao(10, 5)); // 50
console.log(divisao(10, 5));      // 2
console.log(divisao(10, 0));      // Não é possível dividir por zero!
```

### ✅ Verificador de Idade

```js
function verificarIdade(idade) {
    if (idade < 0) {
        return "Idade inválida";
    } else if (idade < 18) {
        return "Menor de idade";
    } else if (idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log(verificarIdade(15));  // Menor de idade
console.log(verificarIdade(30));  // Adulto
console.log(verificarIdade(70));  // Idoso
```

### ✅ Contador de Letras

```js
function contarLetras(texto) {
    return texto.length;
}

const nome = "Maria Silva";
console.log(`O nome ${nome} tem ${contarLetras(nome)} letras`);  // O nome Maria Silva tem 11 letras
```

## 🔄 Formas Diferentes de Escrever Funções

### 1️⃣ Função Tradicional

```js
function multiplicar(a, b) {
    return a * b;
}
```

### 2️⃣ Função Anônima (guardada em uma variável)

```js
const multiplicar = function(a, b) {
    return a * b;
};
```

### 3️⃣ Arrow Function (jeito moderno e mais curto)

```js
// Versão completa
const multiplicar = (a, b) => {
    return a * b;
};

// Versão simplificada (quando é só uma linha)
const multiplicar = (a, b) => a * b;
```

## 📋 Exemplo com Lista de Nomes

### 📝 Mostrar nomes um por um

```js
// Lista de alunos
const alunos = ["Ana", "Bruno", "Carlos", "Daniela"];

function mostrarAlunos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(`Aluno ${i+1}: ${lista[i]}`);
    }
}

mostrarAlunos(alunos);
// Mostra:
// Aluno 1: Ana
// Aluno 2: Bruno
// Aluno 3: Carlos
// Aluno 4: Daniela
```

### 📝 Procurar um nome na lista

```js
function procurarAluno(lista, nome) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nome) {
            return `${nome} está na posição ${i+1} da lista`;
        }
    }
    return `${nome} não está na lista`;
}

console.log(procurarAluno(alunos, "Bruno"));  // Bruno está na posição 2 da lista
console.log(procurarAluno(alunos, "Fábio"));  // Fábio não está na lista
```

## 💰 Exemplo Prático: Controle de Dinheiro

```js
// Vamos simular uma conta bancária
let saldo = 100;

function verSaldo() {
    return `Seu saldo atual é R$ ${saldo}`;
}

function depositar(valor) {
    if (valor <= 0) {
        return "Valor de depósito deve ser maior que zero";
    }
    saldo = saldo + valor;
    return `Depósito de R$ ${valor} realizado. ${verSaldo()}`;
}

function sacar(valor) {
    if (valor <= 0) {
        return "Valor de saque deve ser maior que zero";
    }
    if (valor > saldo) {
        return "Saldo insuficiente";
    }
    saldo = saldo - valor;
    return `Saque de R$ ${valor} realizado. ${verSaldo()}`;
}

console.log(verSaldo());                // Seu saldo atual é R$ 100
console.log(depositar(50));             // Depósito de R$ 50 realizado. Seu saldo atual é R$ 150
console.log(sacar(30));                 // Saque de R$ 30 realizado. Seu saldo atual é R$ 120
console.log(sacar(200));                // Saldo insuficiente
```

## 🌟 Exemplo de Funções Dentro de Funções

```js
function calcularPrecoFinal() {
    // Função interna para calcular desconto
    function calcularDesconto(preco, percentual) {
        return preco * (percentual / 100);
    }
    
    const preco = 100;
    const desconto = calcularDesconto(preco, 10);
    
    return preco - desconto;
}

console.log(`Preço final: R$ ${calcularPrecoFinal()}`);  // Preço final: R$ 90
```

## 🚀 Exemplos com Arrow Functions

### ✅ Filtrar números pares

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando arrow function
const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares);  // [2, 4, 6, 8, 10]
```

### ✅ Dobrar todos os valores

```js
const numeros = [1, 2, 3, 4, 5];

// Usando arrow function
const dobrados = numeros.map(numero => numero * 2);

console.log(dobrados);  // [2, 4, 6, 8, 10]
```

## 💡 Dicas Importantes

1. **Nomes claros**: Dê nomes que explicam o que a função faz (ex: `calcularTotal`, `verificarIdade`)

2. **Uma função, uma tarefa**: Cada função deve fazer apenas uma coisa específica

3. **Validação**: Sempre verifique se os valores recebidos fazem sentido

4. **Comentários**: Explique o que funções complexas fazem

5. **Teste bastante**: Experimente diferentes valores para ter certeza que funciona

6. **Reutilize**: Aproveite funções já criadas para economizar código

## 🎯 Quando Usar Funções?

- Quando precisar repetir o mesmo código várias vezes
- Para organizar o código em blocos que fazem sentido
- Para facilitar a manutenção (mudar em um lugar só)
- Para deixar o código principal mais limpo e fácil de entender

## 📚 Aplicações no Mundo Real

- **Validar formulários**: verificar se email, senha e outros campos estão corretos
- **Calcular valores**: descontos, juros, médias, totais
- **Interagir com o site**: mostrar/esconder menus, mudar cores, animar elementos
- **Buscar informações**: pesquisar nomes, filtrar produtos, ordenar listas