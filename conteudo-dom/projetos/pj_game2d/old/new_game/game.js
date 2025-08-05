const hero = document.getElementById('hero');
const box = document.getElementById('box');
const passo = 10;

let posX = 100;
let posY = 100;

const MAPA_LARGURA = 800;
const MAPA_ALTURA = 600;

function atualizarPosicao() {
  hero.style.left = posX + 'px';
  hero.style.top = posY + 'px';
}

function colisao(nx, ny) {
  const [hw, hh] = [hero.offsetWidth, hero.offsetHeight];
  const [bx, by, bw, bh] = [
    parseInt(box.style.left), parseInt(box.style.top),
    box.offsetWidth, box.offsetHeight
  ];
  return nx < bx + bw && nx + hw > bx && ny < by + bh && ny + hh > by;
}

window.addEventListener('keydown', (e) => {
  let [nx, ny] = [posX, posY];
  if (e.key === 'ArrowRight') nx += passo;
  if (e.key === 'ArrowLeft') nx -= passo;
  if (e.key === 'ArrowDown') ny += passo;
  if (e.key === 'ArrowUp') ny -= passo;

  nx = Math.max(0, Math.min(MAPA_LARGURA - hero.offsetWidth, nx));
  ny = Math.max(0, Math.min(MAPA_ALTURA - hero.offsetHeight, ny));

  if (!colisao(nx, ny)) {
    posX = nx;
    posY = ny;
    atualizarPosicao();
  }
});

atualizarPosicao();
