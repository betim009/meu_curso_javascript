# Sintaxe de cenarios (Gherkin)

Um cenario e um caso de teste escrito em linguagem natural estruturada. Ele vive dentro de um arquivo `.feature` e segue regras simples de Gherkin.

## Estrutura basica
- **Feature:** descreve o tema geral do arquivo.
- **Scenario:** descreve um caso especifico (o teste em si).
- **Steps:** linhas que comecam com `Given`, `When`, `Then`, `And`, `But`.

## Regras praticas
- Use frases curtas e claras.
- Cada step deve representar uma acao ou verificacao.
- Comece com **Given** (contexto), passe para **When** (acao) e finalize com **Then** (resultado).
- **And/But** servem para continuar a mesma ideia sem repetir a palavra chave.

## Exemplo
```gherkin
Feature: Login

  Scenario: Login valido
    Given que estou na pagina de login
    When preencho usuario e senha corretos
    And clico em Entrar
    Then vejo a pagina inicial
```

## O que e um cenario
- Um `Scenario` e uma historia curta e completa.
- Ele deve funcionar sozinho, sem depender de outro cenario.
- Cada `Scenario` gera um World novo (estado limpo para o teste).
