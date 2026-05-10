# Projeto: Calculadora de Metros Quadrados

## Descrição

Calculadora de área que multiplica dois valores (largura × comprimento) e exibe o resultado em m², além de uma representação visual do tamanho com cores que mudam conforme a área aumenta.

## Tecnologias

- HTML5
- CSS3
- JavaScript (DOM puro)

## Conceitos aplicados

- Captura de valores de campos `input` com `parseFloat()`
- Validação de entrada (valores inválidos ou negativos)
- Manipulação de estilos inline via `.style`
- Criação dinâmica de elementos com `createElement()`
- Evento `click` com `addEventListener()`
- Transições CSS aplicadas via JavaScript

## Como executar

1. Abra o arquivo `index.html` no navegador
2. Digite a largura em metros no primeiro campo
3. Digite o comprimento em metros no segundo campo
4. Clique em "Calcular" para ver o resultado

## Funcionalidades

- Calcula a área: `largura × comprimento`
- Exibe o resultado em m²
- Mostra um quadrado visual que cresce proporcionalmente à área
- Cor do quadrado muda conforme a área:
  - Até 100 m²: preto
  - 101 a 500 m²: vermelho
  - 501 a 9.999 m²: azul
  - Acima de 10.000 m²: amarelo
- Aviso quando o display visual atinge o tamanho máximo
