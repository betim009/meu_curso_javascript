## 🎓 **AULA 4: Arrays - Listas de Dados**

### **📋 O que são Arrays?**

> 💡 **Arrays** são listas que podem armazenar múltiplos valores em uma única variável.

### **🔧 Criando e Usando Arrays**

```javascript
// Array de números
const numeros = [1, 2, 3, 4, 5];

// Array de strings
const frutas = ["maçã", "banana", "laranja"];

// Array misto
const dados = ["João", 25, true, ["JavaScript", "Python"]];

console.log(typeof numeros); // "object"
console.log(Array.isArray(numeros)); // true
```

### **📊 Acessando Elementos**

```javascript
const cores = ["vermelho", "verde", "azul", "amarelo"];

// Acessando por índice (começa em 0)
console.log(cores[0]); // "vermelho" (primeiro elemento)
console.log(cores[1]); // "verde" (segundo elemento)
console.log(cores[2]); // "azul" (terceiro elemento)

// Quantidade de elementos
console.log(cores.length); // 4
```

### **🔧 Manipulando Arrays**

```javascript
const frutas = ["maçã", "banana"];

// Adicionando elementos
frutas.push("laranja");        // Adiciona no final
frutas.unshift("morango");     // Adiciona no início

console.log(frutas); // ["morango", "maçã", "banana", "laranja"]

// Removendo elementos
frutas.pop();                  // Remove o último
frutas.shift();                // Remove o primeiro

console.log(frutas); // ["maçã", "banana"]

// Alterando elementos
frutas[0] = "pera";
console.log(frutas); // ["pera", "banana"]
```

### **🎯 Teste Rápido #4**
**Qual é o índice do primeiro elemento de um array?**
- [ ] 0
- [ ] 1
- [ ] -1
- [ ] undefined

<details>
<summary>🔍 Ver resposta</summary>

**Resposta:** 0! Em JavaScript (e na maioria das linguagens), os arrays começam no índice 0, não 1.

</details>

### **🧪 Exercício Prático 4**

Trabalhe com arrays:
```javascript
// 1. Crie um array com suas comidas favoritas
const comidasFavoritas = ["pizza", "hambúrguer", "sushi"];

// 2. Mostre o array
console.log("Comidas favoritas:", comidasFavoritas);
console.log("Quantidade:", comidasFavoritas.length);

// 3. Acesse elementos
console.log("Primeira comida:", comidasFavoritas[0]);
console.log("Última comida:", comidasFavoritas[comidasFavoritas.length - 1]);

// 4. Adicione uma nova comida
comidasFavoritas.push("lasanha");
console.log("Após adicionar:", comidasFavoritas);

// 5. Remova a primeira comida
comidasFavoritas.shift();
console.log("Após remover primeira:", comidasFavoritas);

// 6. Altere uma comida
comidasFavoritas[1] = "sorvete";
console.log("Após alterar:", comidasFavoritas);
```
