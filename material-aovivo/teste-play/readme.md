# QA/Testes com Node + TypeScript

**testes end-to-end e BDD usando Cucumber + Playwright.**

## Objetivo
Montar uma estrutura minima de testes BDD com Cucumber + Playwright e ajustar o TypeScript
para uso em Node no contexto de testes.

## Como pensar e criar do zero

**Modelo mental**
- Objetivo: que tipo de teste? E2E de UI? API? Smoke? Isso define estrutura e ferramentas.
- Fluxo: "feature -> steps -> execucao -> relatorio". O projeto gira em torno desse pipeline.
- Camadas:
  1) configuracao do runner
  2) steps (acoes de negocio)
  3) suporte (hooks, world, helpers)
  4) infra (env, reports, CI)

**Passo a passo mental**
1) Escolher stack: Playwright + Cucumber (steps) + TypeScript
2) Inicializar: package.json, tsconfig, tooling
3) Configurar runner: cucumber config / playwright config
4) Criar estrutura de pastas:
   - src/steps -> steps de Gherkin
   - src/support -> hooks, world, helpers
   - features -> arquivos .feature
5) Primeiro cenario minimo: criar 1 feature + 1 step que abre pagina
6) Rodar e garantir feedback rapido
7) Refinar: adicionar reports, env, tags, retry, etc.

**Proximos passos sugeridos**
1) Explicar o que cada arquivo do projeto atual faz (hooks/world/steps)
2) Desenhar a estrutura completa de um projeto do zero

## O que foi feito
- Criada uma estrutura basica de pastas para features, steps e suporte.
- Adicionado `cucumber.js` com configuracao de TS via `ts-node/register`.
- Criado um exemplo funcional de feature + steps usando Playwright.
- Ajustado `tsconfig.json` para incluir types de Node.
- Atualizado `package.json` com scripts `pretest` e `test`.

## Estrutura criada
```
features/
  example.feature
src/
  steps/
    example.steps.ts
  support/
    hooks.ts
    world.ts
cucumber.js
reports/
```

## Como rodar
1) Instalar dependencias
```
npm install -D @cucumber/cucumber @playwright/test @types/node cucumber-html-reporter ts-node typescript
```

2) Instalar browsers do Playwright
```
npx playwright install
```

3) Executar os testes
```
npm test
```

## Observacoes importantes
- Os scripts `pretest` e `test` ja estao configurados.
- O `tsconfig.json` ja inclui `"types": ["node"]` para liberar tipos de Node.
