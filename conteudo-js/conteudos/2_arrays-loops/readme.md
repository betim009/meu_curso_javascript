
# 🧠 Revisão JavaScript - Arrays, Loops e Template Literals

Fala meu consagrado! Aqui tá aquele resuminho brabo com exemplos de JavaScript, pra ninguém ficar voando. 🛸

---

## 🔤 Template Literals

Em vez de concatenar com `+`, usamos a crase (`` ` ``) pra inserir variáveis direto na string.

```js
const myName = "Alberto";
console.log(`Seja bem vindo ${myName}!`);
```

---

## 🧱 Trabalhando com Arrays

### Criando um array:
```js
const timesSerieA = ['Flamengo', 'São Paulo', 'Cruzeiro', 'Palmeiras'];
```

### Acessando valores do array:
```js
console.log(timesSerieA[0]); // 'Flamengo'
```

### Alterando valores:
```js
timesSerieA[1] = 'Sport';
console.log(timesSerieA[1]); // 'Sport'
```

### Adicionando e Removendo elementos:

```js
// Adiciona no final
timesSerieA.push('Botafogo');

// Adiciona no início
timesSerieA.unshift('Fluminense');

// Remove o último
timesSerieA.pop();

// Remove o primeiro
timesSerieA.shift();

console.log(timesSerieA);
```

### Tamanho do array:
```js
console.log(timesSerieA.length); // Mostra quantos elementos tem
```

---

## 🧪 Exercícios com Arrays

### 1. Pegue o valor "Serviços" do array menu
```js
const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1];
console.log(menuServices); // Serviços
```

### 2. Adicione "Contato" ao final do menu2
```js
const menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu2.push('Contato');
console.log(menu2);
```

---

## 🔁 Loop for (laço de repetição)

### Exemplo de contador:
```js
let count = 0;
const limit = 10;

for (let index = 1; index <= limit; index += 1) {
    console.log(count += 1);
}
```

### Outra forma:
```js
for (let i = 1; i <= 10; i += 1) {
    console.log(`Valor do index: ${i}`);
}
```

---

## ➕ Somando valores de um array

```js
const numbers = [2, 2]; // pode testar com mais números
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

console.log(sum); // Mostra a soma total
```

---

## 📋 Exibindo todos os itens de um array

```js
const headers = ['Inicio', 'Sobre', 'Contato', 'Saiba Mais'];

for (let i = 0; i < headers.length; i += 1) {
    console.log(headers[i]);
}
```

---

Se tiver dúvida, volta nos exemplos e faz igual na sua máquina. Bora pra cima! 🚀🔥
