# Switch/Case em JavaScript

## O que é Switch/Case?

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

---

## Importante: Break

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

---

### 🎯 Teste Rápido #5
O que acontece se esquecer o break?
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

---

## 🧪 Exercício Prático 4

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