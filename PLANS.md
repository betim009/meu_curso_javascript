# PLANS.md — Plano de Evolução do Curso

> Documento vivo. Atualizar sempre que uma etapa for concluída ou uma decisão importante for tomada.

---

## Status Geral

| Módulo | Status |
|--------|--------|
| conteudo-js (todos os módulos) | ✅ Base completa |
| conteudo-dom (todos os módulos) | ✅ Base completa |
| Exercícios DOM com gabarito | ✅ Concluído (todos os 5 módulos) |
| Mini-projetos DOM | ✅ Concluído (4 projetos) |
| Módulo 7 — Fetch e APIs | ✅ Concluído |
| README.md principal | ✅ Concluído e atualizado |
| conteudo-html-css/README.md | ✅ Concluído |
| PLANS.md criado | ✅ Concluído |

---

## Tarefas Próximas

### Fase 5 — Melhorias futuras
- [ ] Criar mini-projeto com fetch (buscador de usuário GitHub na DOM)
- [ ] Adicionar módulo de LocalStorage no conteudo-js
- [ ] Criar exercícios com gabarito para `conteudo-html-css/`
- [ ] Melhorar módulo `conteudo-js/conteudos/02-condicoes/` com gabarito separado
- [ ] Adicionar README aos projetos existentes sem documentação

---

## Tarefas Concluídas

- ✅ Leitura e análise completa do repositório (2026-05-10)
- ✅ Criação do PLANS.md (2026-05-10)
- ✅ Exercícios + gabarito: `conteudo-dom/1_seletores/` (2026-05-10)
- ✅ Exercícios + gabarito: `conteudo-dom/2_createElements/` (2026-05-10)
- ✅ Exercícios + gabarito: `conteudo-dom/4_styles/` (2026-05-10)
- ✅ Gabarito do desafio: `conteudo-dom/5_formularios/` (2026-05-10)
- ✅ Mini-projeto: Lista de Tarefas em `conteudo-dom/projetos/03-lista_tarefas/` (2026-05-10)
- ✅ README.md principal reescrito com sumário navegável completo (2026-05-10)
- ✅ Exercícios + gabarito: `conteudo-dom/3_eventos/` (2026-05-10)
- ✅ Módulo 7 — Fetch e APIs: intro + exercícios com gabarito (2026-05-10)
- ✅ Mini-projeto: Calculadora de IMC em `conteudo-dom/projetos/04-calculadora_imc/` (2026-05-10)
- ✅ README: `conteudo-html-css/README.md` criado com estrutura completa (2026-05-10)
- ✅ README: `conteudo-dom/6_desafios/01-desafio/README.md` criado (2026-05-10)
- ✅ Correção de typo em `6_desafios/01-desafio/src/script.js` (2026-05-10)

---

## Surpresas e Descobertas

- Módulo `05-json` já possui exercícios com gabarito integrados no mesmo arquivo
- Módulo `06-classes` está muito completo e bem estruturado
- Módulos DOM têm bom conteúdo teórico mas carecem de exercícios com gabarito
- Existe `conteudo-dom/projetos/` mas não estava linkado no README principal
- Não existe `projetos/`, `exercicios/` ou `desafios/` na raiz como indicado no RUNBOOK
- `conteudo-dom/6_desafios/01-desafio/src/script.js` tinha typo: "reusltado" → "resultado"
- `conteudo-html-css/` tem muito conteúdo rico mas sem README de navegação

---

## Decision Log

| Data | Decisão | Motivo |
|------|---------|--------|
| 2026-05-10 | Criar exercícios para módulos DOM primeiro | São os módulos com mais lacunas de prática |
| 2026-05-10 | Mini-projeto: Lista de Tarefas DOM | Usa múltiplos conceitos: seletores, createElements, eventos, estilos |
| 2026-05-10 | Manter gabarito em arquivo separado no DOM | Padrão já usado no conteudo-js |
| 2026-05-10 | Módulo Fetch usa APIs públicas (GitHub, restcountries) | Não requerem cadastro ou chave, fáceis de usar em aula |
| 2026-05-10 | Mini-projeto IMC escolhido como segundo projeto DOM | Usa formulário, parseFloat, lógica condicional e classList |
