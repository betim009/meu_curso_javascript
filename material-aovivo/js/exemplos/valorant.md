
# 🔁 Funções em JavaScript – Revisão Completa com Tema Valorant

## 1. Relembrando o que é uma função

### 🧠 O que é função?

Uma função é um **bloco de código que executa uma ação específica**.  
Pense nela como uma **habilidade especial no jogo**: você configura o que ela faz e depois pode ativar sempre que quiser.

> Exemplo fora do código:  
> No Valorant, apertar "E" ativa uma habilidade da Sage. No JavaScript, você pode “ativar” uma função usando parênteses `()`.

### 📌 Por que usar funções?

- Evita repetir o mesmo código várias vezes
- Deixa o código mais organizado e fácil de entender
- Você pode "dar um nome" para uma ação
- Pode guardar valores que serão usados depois

### 🧪 Exemplo básico:

```javascript
function mostrarAgente() {
  console.log("Agente selecionado: Jett");
}

mostrarAgente(); // Chamada da função
```

---

## 2. Diferença entre `console.log()` e `return`

### 📢 `console.log()`

Usamos quando queremos **mostrar algo na tela** (geralmente no console do navegador).

```javascript
function mostrarKills(kills) {
  console.log("Você fez", kills, "kills!");
}
```

> Aqui, a função só exibe uma mensagem, mas não devolve nenhum valor que possa ser usado depois.

---

### 🔁 `return`

Usamos `return` quando queremos que a função **devolva um resultado** que poderá ser usado em outras partes do código.

```javascript
function pegarKills(kills) {
  return kills;
}

const total = pegarKills(20);
console.log("Total de kills:", total); // Agora podemos reutilizar esse valor
```

### ⚠️ Diferença principal:

| Ação                     | `console.log`                         | `return`                          |
|--------------------------|----------------------------------------|------------------------------------|
| Mostra algo no console   | ✅ Sim                                 | ❌ Não                              |
| Guarda o valor           | ❌ Não                                 | ✅ Sim                              |
| Usado para depuração     | ✅ Muito comum                         | ✅ Sim, mas mais para lógica        |
| Pode ser usado em outro lugar | ❌ Não                          | ✅ Pode, com `const resultado = ...` |

---

## 3. Armazenando funções em variáveis

Além da forma clássica (`function nome() {}`), podemos **atribuir uma função a uma variável**. Isso é útil quando queremos guardar uma função e usá-la depois como se fosse um dado qualquer.

```javascript
const iniciarPartida = function() {
  console.log("Partida iniciada com sucesso!");
};

iniciarPartida(); // Chamando a função
```

### 🧠 Por que isso é útil?

- Podemos passar essa função como parâmetro para outra função
- Podemos mudar ela dinamicamente
- Dá mais flexibilidade para organizar o código

---

## 4. Diferentes formas de declarar funções (incluindo Arrow Function)

### 📌 Forma tradicional:

```javascript
function somarPontos(a, b) {
  return a + b;
}
```

---

### 💡 Função anônima em variável:

```javascript
const somarPontos = function(a, b) {
  return a + b;
};
```

---

### ⚡ Arrow Function (forma moderna e curta):

```javascript
const somarPontos = (a, b) => {
  return a + b;
};
```

Se for apenas **uma linha**, você pode até tirar as chaves e o `return`:

```javascript
const somarPontos = (a, b) => a + b;
```

---

### 🚨 Cuidado com Arrow Function:

Arrow functions **não possuem o próprio `this`**, então evite usá-las dentro de objetos que dependem de `this`.

---

## 5. Função para calcular K/D de uma partida de Valorant

Vamos criar uma função que calcula o **K/D (Kill/Death Ratio)**, uma métrica comum nos jogos de tiro.

### 📊 Fórmula:
```
K/D = kills / deaths
```

### ✅ Exemplo com validação (evita divisão por 0):

```javascript
function calcularKD(kills, deaths) {
  if (deaths === 0) {
    return kills; // Se não morreu, KD = número de kills
  }
  return (kills / deaths).toFixed(2);
}

const meuKD = calcularKD(15, 5);
console.log("Seu K/D foi:", meuKD); // Seu K/D foi: 3.00
```

### 🧠 Explicação linha por linha:

- `function calcularKD(kills, deaths)` → define a função com 2 parâmetros
- `if (deaths === 0)` → checa se o jogador não morreu
- `return kills` → evita erro de divisão por zero
- `(kills / deaths).toFixed(2)` → calcula e arredonda para 2 casas decimais

---

📌 **Conclusão**:  
Funções ajudam a **organizar e reaproveitar** lógica no código.  
Usar exemplos com jogos facilita a compreensão, mas o mais importante é **entender a lógica por trás**: entrada, processamento, retorno.
