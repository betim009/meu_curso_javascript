# Boas Práticas com Funções em JavaScript

## Dicas Gerais
- Dê nomes claros e descritivos às funções (ex: `calcularMedia`, `verificarIdade`)
- Funções devem fazer uma coisa só (princípio da responsabilidade única)
- Prefira funções pequenas e reutilizáveis
- Use parâmetros para tornar funções flexíveis
- Documente funções complexas com comentários
- Evite efeitos colaterais inesperados (funções puras são mais fáceis de testar)

## Exemplos de Boas Práticas
```js
// Bom exemplo
function calcularMedia(numeros) {
  const soma = numeros.reduce((acc, n) => acc + n, 0);
  return soma / numeros.length;
}

// Anti-padrão: função faz muita coisa
function processarAluno(aluno) {
  // Calcula média, imprime resultado, salva no banco, envia email...
}
```

## Exercícios
1. Reescreva uma função "ruim" (que faz muita coisa) dividindo em funções menores.
2. Dê exemplos de nomes ruins e bons para funções.
