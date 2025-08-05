
# Mini GDD — Jogo Estilo Zelda 2D com JavaScript

## 🎯 Objetivo do Projeto
Criar um jogo 2D simples onde o personagem pode se mover livremente por um mapa top-down, ao estilo Zelda clássico, com controles via teclado. O projeto visa aprendizado e experimentação com mecânicas básicas como movimentação, limites e (futuramente) colisões.

---

## 🎮 Jogabilidade
- **Visão**: Top-down (visão de cima).
- **Controles**: Setas do teclado para mover.
- **Objetivo**: Por enquanto, explorar o cenário.
- **Interações**: Nenhuma no início — foco na movimentação.
- **Foco**: Simulação de movimentação livre em um mapa fixo com limites definidos.

---

## 🧍‍♂️ Personagem
- Representado por uma imagem PNG.
- Controlado via teclado.
- Movimentação baseada em `top` e `left` com `position: absolute`.

---

## 🗺️ Mapa
- Será uma imagem grande (PNG) que representa o cenário do jogo.
- Inserida como plano de fundo de uma `div` (`position: relative`).
- Inicialmente estática — o personagem anda sobre ela.
- O personagem **não pode sair da área visível**.

---

## 🧱 Limites
- Implementar verificação de bordas:
  - Se o personagem atingir os cantos, ele para.
  - Os limites são definidos pelo tamanho da `div` cenário.

---

## 🧊 Colisões (Fase futura)
- Futuramente, o jogo terá colisões com obstáculos.
- Ideia inicial: usar "hitboxes invisíveis" como `div`s espalhadas pelo cenário.
- Ou então evoluir para um mapa em matriz (grid) onde certos blocos são intransponíveis.

---

## 📦 Tecnologia
- **Linguagens**: HTML, CSS e JavaScript puro (Vanilla).
- **Sem bibliotecas externas** neste início.
- Layout simples com foco total em lógica e movimentação.

---

## 🌱 Fase atual
- Personagem já se move com `margin`.
- Próximo passo: trocar para `position: absolute` e `top/left`.
- Depois: definir imagem de mapa, colocar personagem sobre ela, aplicar limites.
