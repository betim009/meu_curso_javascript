# HTML e CSS — Material Didático

Módulo dedicado ao ensino de HTML e CSS para iniciantes.
O conteúdo cobre desde os primeiros elementos até layouts com Flexbox.

---

## Sumário

- [Material de Aulas](#material-de-aulas)
- [Atividades de Flexbox](#atividades-de-flexbox)
- [Projetos Práticos](#projetos-práticos)
- [Componentes de Interface](#componentes-de-interface)

---

## Material de Aulas

Conteúdo produzido durante as aulas ao vivo, organizado por tópico:

| Pasta | Descrição |
|-------|-----------|
| [01_intro/](material_aovivo/01_intro/) | Introdução ao HTML: estrutura básica, tags, listas e formulários |
| [02_game/](material_aovivo/02_game/) | Projeto de cartas com HTML e CSS |
| [03_bootstrap/](material_aovivo/03_bootstrap/) | Exemplo prático com Bootstrap |
| [Divs/](material_aovivo/Divs/) | Exemplos de layout com `div` e Flexbox |
| [style/](material_aovivo/style/) | Introdução ao CSS: cores, fontes e estilos básicos |

### Introdução ao HTML

O material de introdução cobre:
- O que é HTML e para que serve
- Estrutura básica de uma página (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- Tags essenciais: `<h1>` a `<h6>`, `<p>`, `<ul>`, `<ol>`, `<li>`
- Como testar com o Live Server

Ver: [material_aovivo/01_intro/readme.md](material_aovivo/01_intro/readme.md)

---

## Atividades de Flexbox

Exercícios práticos de layout com `display: flex`. Cada exercício inclui instruções, imagem de referência e CSS sugerido.

| Arquivo | Nível | Descrição |
|---------|-------|-----------|
| [flex_1.md](atividades/flex_1.md) | Iniciante | Centralizar uma `div` na tela com Flexbox |
| [flex_2.md](atividades/flex_2.md) | Iniciante | Alinhar três `divs` lado a lado com `gap` |
| [flex_3.md](atividades/flex_3.md) | Iniciante–Intermediário | Container com largura proporcional e duas `divs` internas |

### Propriedades Flexbox abordadas

| Propriedade | O que faz |
|-------------|-----------|
| `display: flex` | Ativa o modo flexível no container |
| `justify-content` | Alinha os filhos no eixo horizontal |
| `align-items` | Alinha os filhos no eixo vertical |
| `flex-direction` | Define a direção dos elementos (linha ou coluna) |
| `gap` | Espaço entre os elementos filhos |
| `flex-wrap` | Permite que os elementos quebrem para a próxima linha |

---

## Projetos Práticos

Projetos completos com HTML, CSS e às vezes JavaScript:

| Projeto | Descrição |
|---------|-----------|
| [1_portfolio/](projeto/1_portfolio/) | Portfólio pessoal com HTML e CSS |
| [2_portfollio/](projeto/2_portfollio/) | Segunda versão do portfólio com CSS externo |
| [pj_airbnb/](projeto/pj_airbnb/) | Clone visual de uma listagem do Airbnb |

---

## Componentes de Interface

Exemplos de componentes reutilizáveis:

| Pasta | Descrição |
|-------|-----------|
| [ui/buttons/](ui/buttons/) | Estilos de botões com CSS |
| [ui/navBars/](ui/navBars/) | Barra de navegação responsiva |

---

## Por onde começar?

Se você está iniciando do zero:

1. Leia o [readme de introdução ao HTML](material_aovivo/01_intro/readme.md)
2. Pratique criando sua própria estrutura HTML
3. Estude os [estilos básicos de CSS](material_aovivo/style/)
4. Faça as [atividades de Flexbox](atividades/flex_1.md)
5. Tente replicar um dos projetos práticos
