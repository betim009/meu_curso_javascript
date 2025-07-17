
# 🧠 Desafio: Mini-Max Sum

## Enunciado

Dado um array de **cinco números inteiros positivos**, sua tarefa é calcular **dois valores**:

- **O menor valor possível** ao somar **quatro dos cinco** números.
- **O maior valor possível** ao somar **quatro dos cinco** números.

Você deve **imprimir os dois valores em uma única linha**, separados por um espaço:

```
menor_soma maior_soma
```

---

## 🧪 Exemplo

### Entrada:
```
[1, 3, 5, 7, 9]
```

### Saída esperada:
```
16 24
```

### Explicação:
As possíveis somas de quatro elementos são:

- 1 + 3 + 5 + 7 = 16  
- 1 + 3 + 5 + 9 = 18  
- 1 + 3 + 7 + 9 = 20  
- 1 + 5 + 7 + 9 = 22  
- 3 + 5 + 7 + 9 = 24  

O **menor valor** entre essas somas é `16`, e o **maior valor** é `24`.

---

## 🎯 Regras

- Você **deve considerar apenas 4 números por vez** (nunca os 5 juntos).
- A saída **deve estar em uma única linha**, com dois números separados por espaço:  
  `menor maior`
