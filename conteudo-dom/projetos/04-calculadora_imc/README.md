# Projeto: Calculadora de IMC

## Descrição

Calculadora de Índice de Massa Corporal (IMC) com interface visual que classifica o resultado em categorias de peso. Demonstra formulários, validação de entrada e manipulação de classes CSS dinâmicas.

## Tecnologias

- HTML5
- CSS3
- JavaScript (DOM puro, sem bibliotecas)

## Conceitos aplicados

- Evento `submit` com `preventDefault()`
- `parseFloat()` para converter strings em números
- Lógica condicional para classificar o IMC
- `classList.add()`, `classList.remove()` e `className` para estilos dinâmicos
- Mostrar e esconder seções com a classe `oculto`
- `form.reset()` para limpar os campos

## Fórmula do IMC

```
IMC = peso (kg) ÷ altura² (m)
```

| IMC | Classificação |
|-----|---------------|
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 a 24,9 | Peso normal |
| 25 a 29,9 | Sobrepeso |
| 30 a 34,9 | Obesidade grau I |
| 35 a 39,9 | Obesidade grau II |
| Acima de 40 | Obesidade grau III |

## Como executar

1. Abra o arquivo `index.html` diretamente no navegador
2. Digite o peso em kg (ex: `70`)
3. Digite a altura em metros (ex: `1.75`)
4. Clique em "Calcular IMC"
5. Veja o resultado e a classificação
6. Clique em "Calcular novamente" para nova consulta
