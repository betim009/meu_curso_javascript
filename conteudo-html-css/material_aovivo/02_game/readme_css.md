
# Introdução ao CSS – Material Didático para Iniciantes

**Data:** 06/05/2025  
**Objetivo:** Ensinar o básico de CSS para quem está começando agora.

---

## 🎨 O QUE É CSS?

CSS significa **Cascading Style Sheets**, ou seja, "Folhas de Estilo em Cascata".  
É usado para **modificar a aparência** da página HTML.

Exemplos do que o CSS faz:
- Muda cores
- Alinha elementos
- Define fontes e tamanhos de texto
- Organiza o layout da página

---

## 📄 ESTRUTURA DO CSS

### Exemplo:
```css
.titulo {
  font-size: 40px;
}
```

Nesse exemplo, `.titulo` é o nome da **classe** e `{ }` define os **estilos**.

---

## 🔠 ENTENDENDO OS PRINCIPAIS TRECHOS DO SEU CÓDIGO

### 1. Seletor universal: `*`

```css
* {
  margin: 0;
  font-family: "Caveat", cursive;
  font-weight: 600;
}
```
- Aplica essas regras para **todos os elementos** da página.
- Remove a margem e define uma fonte personalizada para o texto.

---

### 2. `header`

```css
header {
  height: 160px;
  background-color: #ffde59;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
}
```
- Cria um cabeçalho com cor de fundo amarela.
- Usa **flexbox** para organizar o conteúdo na vertical (`column`), centralizando.

---

### 3. `.titulo`

```css
.titulo {
  font-size: 40px;
}
```
- Altera o **tamanho do texto** do título para 40px.

---

### 4. `.botao` e `.botao:hover`

```css
.botao {
  text-decoration: none;
  font-size: 27px;
  cursor: pointer;
  background-color: #eac42c;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: #e0a615;
}
```
- Define a aparência dos botões.
- Quando o mouse passa por cima (`:hover`), o botão muda de cor suavemente.

---

### 5. `.borda`

```css
.borda {
  background-image: url("borda.png");
  height: 20px;
}
```
- Cria uma faixa com imagem de fundo.
- Pode ser usada como divisor entre seções.

---

### 6. `main`

```css
main {
  height: 2000px;
  width: 100%;
  background-color: rgb(17, 17, 15);
  display: flex;
  justify-content: center;
  align-items: center;
}
```
- Define o conteúdo principal da página.
- Usa `flex` para alinhar os elementos ao centro.

---

### 7. `.botaofooter` e `.botao2`

```css
.botaofooter {
  display: flex;
  gap: 15px;
}

.botao2 {
  color: black;
}

.botao2:hover {
  color: rgb(72, 73, 67);
}
```
- Organiza os botões no rodapé.
- Muda a cor do texto ao passar o mouse.

---

### 8. `footer`

```css
footer {
  height: 160px;
  background-color: #ffde59;
  display: flex;
  justify-content: center;
  text-align: center;
}
```
- Define a aparência do rodapé.
- Fundo amarelo e conteúdo centralizado.

---

### 9. `.cartas` e `.carta1`

```css
.cartas {
  display: flex;
  flex-wrap: wrap;
}

.carta1 {
  height: 300px;
}
```
- Mostra várias "cartas" lado a lado.
- `wrap` faz com que elas quebrem linha se faltar espaço.

---

### 10. `.textocarta`, `.dados`, `.cartaint`

```css
.textocarta {
  font-size: 30px;
}

.dados {
  font-size: 25px;
}

.cartaint {
  background-color: aliceblue;
}
```
- Define estilos de texto e cor de fundo clara nas cartas.

---

## ✅ DICAS FINAIS

- CSS trabalha junto com HTML: o HTML monta a estrutura e o CSS deixa bonito!
- Use classes (`.classe`) para aplicar estilos em vários elementos.
- Use o Live Server para ver as mudanças ao vivo!

---

