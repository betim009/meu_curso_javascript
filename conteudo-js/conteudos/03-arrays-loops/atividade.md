
# Atividade JS Braba 😎

Vamo botar esse JS pra cantar! Segue aí uns desafios de cria pra tu treinar os dedos no teclado. Só vem! 💻🔥

---

## 🚀 Desafios

### 1. Mostra tudo!  
Percorra o array `numbers` e imprime geral com `console.log()`.

### 2. Soma tudo aí, chefia  
Soma todos os valores desse array e mostra o total no console.

### 3. Calcule a média dos numeros  
Calcula a média aritmética dos valores do array. Lembra: soma tudo e divide pelo tanto de elemento.

### 4. E aí, passou ou não?  
Se a média for maior que 20, solta no console:  
**"O valor da média aritmética é maior que 20"**  
Se for 20 ou menos:  
**"O valor da média aritmética é menor ou igual a 20"**

### 5. Qual o maior valor?  
Acha o maior valor dentro do array e mostra no console.

### 6. Só os ímpares  
Conta quantos valores ímpares tem no array e mostra.  
Se não tiver nenhum, manda:  
**"Nenhum valor ímpar encontrado"**

### 💣 Desafio extra: Fatorial nervoso  
Calcula o fatorial de 10.  
Faz o seguinte cálculo: `10! = 10 x 9 x 8 x ... x 1`  
Mostra o resultado no final.

---

## ✅ Gabarito

```js
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// 3.
let media = sum / numbers.length;
console.log(media);

// 4.
if (media > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}

// 5.
let maior = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(maior);

// 6.
let impares = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    impares += 1;
  }
}
if (impares === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log(impares);
}

// Desafio: Fatorial de 10
let fatorial = 1;
for (let i = 10; i > 0; i--) {
  fatorial *= i;
}
console.log(fatorial);
```

---

**Agora é contigo, meu mano! Pratica aí e bora virar dev sinistro! 🚀**
