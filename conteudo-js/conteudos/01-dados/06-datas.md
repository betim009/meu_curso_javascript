
# 📆 JavaScript: Trabalhando com Datas e Horas

Neste material vamos aprender a manipular **datas e horários** em JavaScript. Esse tipo de dado é essencial quando queremos mostrar o dia atual, calcular prazos, marcar eventos ou registrar atividades em tempo real.

---

## ✅ O que é o tipo Date?

JavaScript possui um tipo de dado chamado `Date`, usado para representar:

- Dia
- Mês
- Ano
- Hora
- Minutos
- Segundos

Para criar uma nova data, usamos:

```js
const agora = new Date();
console.log(agora);
```

> Isso cria um objeto com a **data e hora atual** do sistema.

---

## 🕗 Como criar uma data específica

```js
const natal = new Date(2024, 11, 25); // Ano, MÊS (começa do zero), Dia
console.log(natal);
```

**CUIDADO:** Em JavaScript, **janeiro é mês 0** e **dezembro é mês 11**.

```js
// Exemplo para 20 de agosto de 2025:
const aniversario = new Date(2025, 7, 20);
```

---

## 🧠 Por que usar datas?

- Para **exibir o dia e hora atual**
- Para **calcular diferenças de tempo** (dias restantes, prazos, contagens regressivas)
- Para **formatar mensagens com o dia da semana ou hora**
- Para **agendar algo** em sistemas de agenda, relatórios, logs

---

## 🔍 Métodos mais usados com datas

| Método                | O que faz                                  |
|------------------------|---------------------------------------------|
| `getFullYear()`        | Retorna o ano com 4 dígitos (ex: 2025)      |
| `getMonth()`           | Retorna o mês (0 a 11)                      |
| `getDate()`            | Retorna o dia do mês (1 a 31)              |
| `getDay()`             | Dia da semana (0 = domingo, 6 = sábado)    |
| `getHours()`           | Hora atual (0 a 23)                         |
| `getMinutes()`         | Minutos atuais                             |
| `getSeconds()`         | Segundos atuais                            |
| `toLocaleDateString()` | Retorna a data formatada para o idioma     |
| `toLocaleTimeString()` | Retorna a hora formatada para o idioma     |

---

## 🧪 Exemplos práticos

```js
const agora = new Date();

console.log("Ano:", agora.getFullYear());
console.log("Mês:", agora.getMonth() + 1); // +1 para ajustar o mês
console.log("Dia do mês:", agora.getDate());
console.log("Dia da semana:", agora.getDay());
console.log("Horas:", agora.getHours());
console.log("Minutos:", agora.getMinutes());

console.log("Data formatada:", agora.toLocaleDateString());
console.log("Hora formatada:", agora.toLocaleTimeString());
```

---

## 📅 Exibindo o nome do mês ou do dia da semana

```js
const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const data = new Date();

const diaSemana = dias[data.getDay()];
const mesAtual = meses[data.getMonth()];

console.log(`Hoje é ${diaSemana}, mês de ${mesAtual}`);
```

**DICA:** Criar arrays com os nomes ajuda a deixar a exibição mais amigável.

---

## ⏱️ Diferença entre datas

```js
const inicio = new Date(2024, 0, 1);
const fim = new Date(2024, 11, 31);

const diferencaMs = fim - inicio; // Diferença em milissegundos
const dias = diferencaMs / (1000 * 60 * 60 * 24); // converter para dias

console.log(`Dias entre datas: ${dias}`);
```

**DICA:** Para calcular diferenças, subtraia as datas e converta o resultado.

---

## ⛔ CUIDADOS IMPORTANTES

- Os meses começam do zero! (Janeiro = 0)
- `.getDay()` não retorna o dia do mês, e sim o dia da semana
- Os métodos retornam valores numéricos, então use arrays para mostrar nomes
- Datas vêm com hora, então cuidado ao comparar

---

📘 Agora que você conhece o tipo Date, que tal criar um relógio com JavaScript?
