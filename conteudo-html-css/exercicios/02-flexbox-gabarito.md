# Gabarito — CSS Flexbox

---

## Exercício 1 — Centralizar um elemento

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.caixa {
  width: 200px;
  height: 200px;
  background-color: #ffef99;
  border: 2px solid orange;
}
```

> `height: 100vh` faz o container ocupar 100% da altura da tela. Sem isso, não há espaço vertical para centralizar.

---

## Exercício 2 — Navbar horizontal

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  background-color: #1a1a2e;
  color: white;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.links {
  display: flex;
  list-style: none;
  gap: 24px;
}

.links a {
  color: white;
  text-decoration: none;
  font-size: 15px;
}

.links a:hover {
  color: #58a6ff;
}
```

> `justify-content: space-between` empurra o logo para a esquerda e os links para a direita.

---

## Exercício 3 — Cards lado a lado

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px;
}

.card {
  width: 200px;
  height: 250px;
  background-color: #e3f2fd;
  border: 1px solid #90caf9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}
```

---

## Exercício 4 — Layout em coluna

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.cabecalho {
  height: 80px;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 20px;
}

.conteudo {
  flex: 1;
  background-color: #f9f9f9;
  padding: 24px;
}
```

> `flex: 1` faz o `<main>` crescer e ocupar todo o espaço que sobrar após o header.

---

## Exercício 5 — Grid de cards responsivo

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.grade {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px;
  justify-content: center;
}

.card {
  flex: 1 1 200px;
  min-width: 200px;
  max-width: 300px;
  height: 150px;
  background-color: #d5f5e3;
  border: 1px solid #82e0aa;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}
```

> `flex: 1 1 200px` significa: pode crescer, pode encolher, e o tamanho base é 200px. Com `flex-wrap: wrap`, os cards quebram para a linha seguinte quando não cabem.

---

## Exercício 6 — Desafio: layout de página completa

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Layout Completo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="pagina">
    <header class="topo">Cabeçalho</header>
    <div class="meio">
      <main class="principal">Conteúdo principal</main>
      <aside class="lateral">Barra lateral</aside>
    </div>
    <footer class="rodape">Rodapé</footer>
  </div>
</body>
</html>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.pagina {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.topo {
  height: 80px;
  background-color: #2980b9;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 20px;
}

.meio {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.principal {
  flex: 2;
  padding: 24px;
  background-color: white;
}

.lateral {
  flex: 1;
  padding: 24px;
  background-color: #ecf0f1;
}

.rodape {
  height: 60px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

> `.meio` tem `flex: 1` para ocupar o espaço entre header e footer. Dentro dele, `flex: 2` e `flex: 1` dividem o espaço em proporção 2:1 (main é o dobro do aside).
