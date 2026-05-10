# Projeto: Login com LocalStorage

## Descrição

Sistema de autenticação simples com três páginas: cadastro, login e home. Os dados de usuário são armazenados no `localStorage` do navegador, sem nenhum servidor ou banco de dados.

## Tecnologias

- HTML5
- CSS3
- JavaScript (DOM puro + LocalStorage)

## Conceitos aplicados

- `localStorage.setItem()` e `localStorage.getItem()` para persistir dados
- `JSON.stringify()` e `JSON.parse()` para converter objetos para/do localStorage
- `Array.find()` para buscar um usuário correspondente
- `window.location.href` para redirecionar entre páginas
- Evento `submit` com `preventDefault()`
- `setTimeout()` para atrasar ações (ex: redirecionar após mensagem)

## Páginas

| Arquivo | Descrição |
|---------|-----------|
| `cadastro.html` | Formulário de criação de conta (email + senha) |
| `login.html` | Formulário de autenticação |
| `home.html` | Página de boas-vindas após login |

## Como executar

1. Abra `cadastro.html` no navegador
2. Crie uma conta com email e senha
3. Vá para `login.html` e faça login com as mesmas credenciais
4. Você será redirecionado para `home.html`

## Fluxo de dados

```
Cadastro → localStorage.setItem("accounts", [...])
Login    → localStorage.getItem("accounts") → find() → redireciona
```

## Observação importante

Este projeto usa o `localStorage` para fins didáticos. Em aplicações reais, **nunca armazene senhas em texto puro no localStorage** — use autenticação com servidor e hash de senhas.
