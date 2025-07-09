# Boas Práticas com Loops e Métodos de Array

## Dicas Gerais
- Prefira métodos de array (map, filter, etc.) para operações simples e transformações.
- Use loops tradicionais (for, while) quando precisar de controle total do fluxo.
- Nomeie variáveis de forma clara dentro dos loops.
- Evite modificar o array original dentro de métodos como map/filter (prefira criar novos arrays).

## Erros Comuns
- Esquecer de inicializar variáveis acumuladoras (ex: soma = 0).
- Usar for...in em arrays (pode trazer propriedades extras, prefira for...of).
- Esquecer o return em funções de map/filter/reduce.
- Misturar lógica de transformação e exibição no mesmo loop.

## Quando usar cada abordagem?
- **forEach**: para executar efeitos colaterais (ex: imprimir, atualizar DOM)
- **map**: para transformar arrays
- **filter**: para filtrar elementos
- **reduce**: para reduzir a um valor (soma, média, etc.)
- **for clássico**: para iteração com índice ou controle total

---

> Sempre teste seu código com arrays vazios e grandes!

Adicione exemplos de boas práticas e anti-padrões.
