# Documentação do Projeto

Este documento apresenta uma explicação detalhada do projeto, dividido em duas seções principais: **CSS** e **JavaScript**. Cada parte do código foi cuidadosamente comentada para facilitar o entendimento, mesmo para quem não tem experiência prévia em programação.

---

## CSS

A parte de CSS é responsável pela aparência visual do jogo, definindo estilos para que os elementos fiquem organizados e com o visual desejado.

### Seletores e Propriedades

- `body`
  - `margin: 0;`  
    Remove a margem padrão do navegador para que o conteúdo ocupe toda a área da tela, evitando espaços em branco nas bordas.
  - `background-color: #000;`  
    Define o fundo da página como preto, para dar contraste com os elementos do jogo.
  - `overflow: hidden;`  
    Impede que barras de rolagem apareçam, mantendo o foco no jogo dentro da tela.

- `.game-container`
  - Define a área principal onde o jogo acontece.
  - `position: relative;`  
    Permite que os elementos filhos posicionados absolutamente se baseiem neste container.
  - `width` e `height` fixos para criar uma área de jogo com tamanho definido.
  - `background-color: #333;`  
    Dá um fundo cinza escuro para destacar o cenário do jogo.

- `.hero`
  - Representa o personagem controlado pelo jogador.
  - `position: absolute;`  
    Permite movimentar o herói dentro do container usando propriedades `left` e `bottom`.
  - `width` e `height` definem o tamanho do personagem.
  - `background-image` com sprites do personagem.
  - `image-rendering: pixelated;`  
    Mantém o estilo retrô do jogo, fazendo com que as imagens pareçam pixeladas, evitando suavização.

- `.hero.idle` e `.hero.run`
  - Classes que controlam a animação do personagem.
  - `background-position` diferente para cada estado, mostrando frames distintos do sprite para simular movimento ou parada.

- `.platform`
  - Representa plataformas onde o herói pode andar ou pular.
  - `position: absolute;`
  - `background-color: #555;`  
    Cor cinza para diferenciar do fundo.
  - `border` para dar um contorno visível.
  - `width` e `height` para definir o tamanho da plataforma.

Cada propriedade CSS foi escolhida para criar uma experiência visual clara, funcional e com estilo retrô, essencial para o tema do jogo.

---

## JavaScript

O código JavaScript é responsável pela lógica do jogo: movimentação do personagem, física do pulo, detecção de colisões e atualização da tela.

### Inicialização do Herói

- Definimos variáveis para controlar a posição (`x`, `y`), velocidade horizontal (`velocidadeX`), velocidade vertical (`velocidadeY`), e estado do pulo (`pulando`).
- O herói começa na posição inicial definida no CSS, e suas propriedades serão atualizadas dinamicamente.

### Controle de Classes CSS (`idle` / `run`)

- O personagem possui duas classes principais para indicar seu estado:
  - `idle`: quando parado.
  - `run`: quando em movimento.
- O código adiciona ou remove essas classes com base na movimentação do jogador, para trocar a animação exibida.

### Variáveis de Estado

- `x` e `y`: representam a posição atual do herói no eixo horizontal e vertical, respectivamente.
- `velocidadeX`: controla a velocidade horizontal do personagem, positiva para direita, negativa para esquerda.
- `velocidadeY`: controla a velocidade vertical, usada para simular o pulo e a queda.
- `pulando`: booleano que indica se o personagem está no ar (true) ou no chão (false).

### Lógica de Gravidade e Pulo

- A cada frame, a velocidade vertical (`velocidadeY`) é atualizada para simular a gravidade, diminuindo a velocidade para que o personagem caia.
- Quando o jogador pressiona a tecla de pulo e o personagem não está pulando, a velocidade vertical é ajustada para cima, iniciando o pulo.
- A posição vertical (`y`) é atualizada com base na velocidade vertical, e o código verifica se o personagem atingiu o chão para parar o pulo.

### Cálculo de Colisão

- O código verifica colisões laterais e no topo da "box" do personagem para evitar que ele saia dos limites da tela ou atravesse plataformas.
- Se o personagem atingir o limite esquerdo ou direito, sua posição é ajustada para não ultrapassar.
- A colisão com o chão é detectada para resetar o estado de pulo e a posição vertical.

### `requestAnimationFrame`

- A função principal de atualização do jogo é chamada repetidamente usando `requestAnimationFrame`.
- Isso garante que o jogo seja atualizado de forma suave e eficiente, sincronizado com a taxa de atualização do navegador.
- Dentro dessa função, são atualizadas as posições, estado do personagem, animações e verificações de colisão.

### Event Listeners (`keydown`, `keyup`)

- `keydown`: detecta quando o jogador pressiona uma tecla.
  - Atualiza a velocidade horizontal para mover o personagem para esquerda ou direita.
  - Inicia o pulo se a tecla de pulo for pressionada e o personagem não estiver pulando.
  - Atualiza as classes CSS para mudar a animação.
- `keyup`: detecta quando o jogador solta uma tecla.
  - Para o movimento horizontal se as teclas de movimento forem soltas.
  - Atualiza as classes CSS para colocar o personagem em estado `idle`.

---

Com essa documentação, esperamos ter facilitado a compreensão do funcionamento do projeto, tanto na parte visual (CSS) quanto na lógica (JavaScript). Qualquer dúvida, sinta-se à vontade para consultar os comentários no código ou buscar mais informações.
