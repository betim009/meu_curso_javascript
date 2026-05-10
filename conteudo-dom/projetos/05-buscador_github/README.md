# Projeto: Buscador GitHub

## Descrição

Aplicação que busca informações de qualquer usuário do GitHub usando a API pública. Exibe foto de perfil, nome, bio, número de repositórios, seguidores e link para o perfil. Interface inspirada no design do GitHub.

## Tecnologias

- HTML5
- CSS3
- JavaScript (DOM puro + Fetch API)

## Conceitos aplicados

- `fetch()` com `async/await` para consumir API REST
- Verificação de `resposta.status` para tratar 404 e outros erros
- Bloco `try/catch/finally` para tratamento de erros de rede
- Mostrar/ocultar elementos com `classList`
- Atualização dinâmica de múltiplos elementos do DOM
- Evento `keydown` para acionar busca com Enter

## Como executar

1. Abra o arquivo `index.html` no navegador
2. Digite o username de qualquer usuário do GitHub
3. Clique em "Buscar" ou pressione **Enter**
4. Veja o perfil completo carregado

## API usada

```
GET https://api.github.com/users/{username}
```

Não precisa de chave de API nem cadastro. Limite padrão de 60 requisições por hora.

## Funcionalidades

- Busca por username com botão ou tecla Enter
- Exibe: foto, nome, bio, repositórios públicos, seguidores, seguindo
- Link direto para o perfil no GitHub
- Mensagem de carregamento durante a requisição
- Tratamento de: usuário não encontrado (404), erro de rede, campo vazio
- Botão desabilitado durante a requisição (evita cliques duplos)
