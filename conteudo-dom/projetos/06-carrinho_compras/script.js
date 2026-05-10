// ── Estado do carrinho (carregado do localStorage) ──────────────────────────
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ── Elementos do DOM ────────────────────────────────────────────────────────
const listaProdutosEl  = document.getElementById("lista-produtos");
const painelCarrinho   = document.getElementById("painel-carrinho");
const itensCarrinhoEl  = document.getElementById("itens-carrinho");
const totalEl          = document.getElementById("total");
const badgeEl          = document.getElementById("badge");
const btnCarrinho      = document.getElementById("btn-carrinho");
const btnFechar        = document.getElementById("btn-fechar");
const btnFinalizar     = document.getElementById("btn-finalizar");
const btnLimpar        = document.getElementById("btn-limpar");

// ── Persistência ────────────────────────────────────────────────────────────
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// ── Catálogo de produtos ─────────────────────────────────────────────────────
function renderizarProdutos() {
  listaProdutosEl.innerHTML = "";

  PRODUTOS.forEach(produto => {
    const card = document.createElement("div");
    card.className = "card-produto";

    card.innerHTML = `
      <div class="produto-emoji">${produto.emoji}</div>
      <h3 class="produto-nome">${produto.nome}</h3>
      <p class="produto-preco">${formatarPreco(produto.preco)}</p>
      <button class="btn-adicionar" data-id="${produto.id}">
        Adicionar ao carrinho
      </button>
    `;

    listaProdutosEl.appendChild(card);
  });
}

// ── Carrinho ─────────────────────────────────────────────────────────────────
function adicionarAoCarrinho(id) {
  const produto = PRODUTOS.find(p => p.id === id);
  const itemExistente = carrinho.find(item => item.id === id);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  salvarCarrinho();
  atualizarCarrinho();
  mostrarNotificacao(produto.nome);
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  salvarCarrinho();
  atualizarCarrinho();
}

function alterarQuantidade(id, delta) {
  const item = carrinho.find(item => item.id === id);
  if (!item) return;

  item.quantidade += delta;

  if (item.quantidade <= 0) {
    removerDoCarrinho(id);
    return;
  }

  salvarCarrinho();
  atualizarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  salvarCarrinho();
  atualizarCarrinho();
}

// ── Renderização do carrinho ──────────────────────────────────────────────────
function atualizarCarrinho() {
  renderizarItensCarrinho();
  atualizarTotal();
  atualizarBadge();
}

function renderizarItensCarrinho() {
  if (carrinho.length === 0) {
    itensCarrinhoEl.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio.</p>';
    return;
  }

  itensCarrinhoEl.innerHTML = "";

  carrinho.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-carrinho";

    div.innerHTML = `
      <span class="item-emoji">${item.emoji}</span>
      <div class="item-info">
        <span class="item-nome">${item.nome}</span>
        <span class="item-preco-unit">${formatarPreco(item.preco)}</span>
      </div>
      <div class="item-controles">
        <button class="btn-qtd" data-id="${item.id}" data-delta="-1">−</button>
        <span class="item-qtd">${item.quantidade}</span>
        <button class="btn-qtd" data-id="${item.id}" data-delta="1">+</button>
      </div>
      <button class="btn-remover" data-id="${item.id}" title="Remover">×</button>
    `;

    itensCarrinhoEl.appendChild(div);
  });
}

function atualizarTotal() {
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  totalEl.textContent = formatarPreco(total);
}

function atualizarBadge() {
  const qtdTotal = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  if (qtdTotal > 0) {
    badgeEl.textContent = qtdTotal;
    badgeEl.classList.remove("oculto");
  } else {
    badgeEl.classList.add("oculto");
  }
}

// ── Utilitários ───────────────────────────────────────────────────────────────
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function mostrarNotificacao(nomeProduto) {
  const notif = document.createElement("div");
  notif.className = "notificacao";
  notif.textContent = `"${nomeProduto}" adicionado!`;
  document.body.appendChild(notif);

  setTimeout(() => notif.remove(), 2000);
}

// ── Eventos ───────────────────────────────────────────────────────────────────
listaProdutosEl.addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-adicionar")) {
    const id = parseInt(e.target.dataset.id);
    adicionarAoCarrinho(id);
  }
});

itensCarrinhoEl.addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-qtd")) {
    const id    = parseInt(e.target.dataset.id);
    const delta = parseInt(e.target.dataset.delta);
    alterarQuantidade(id, delta);
  }

  if (e.target.classList.contains("btn-remover")) {
    const id = parseInt(e.target.dataset.id);
    removerDoCarrinho(id);
  }
});

btnCarrinho.addEventListener("click", () => painelCarrinho.classList.toggle("oculto"));
btnFechar.addEventListener("click",   () => painelCarrinho.classList.add("oculto"));
btnLimpar.addEventListener("click",   limparCarrinho);

btnFinalizar.addEventListener("click", function() {
  if (carrinho.length === 0) {
    alert("Adicione produtos antes de finalizar!");
    return;
  }
  const totalFinal = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  alert(`Pedido finalizado!\nTotal: ${formatarPreco(totalFinal)}\nObrigado pela compra!`);
  limparCarrinho();
  painelCarrinho.classList.add("oculto");
});

// ── Inicialização ─────────────────────────────────────────────────────────────
renderizarProdutos();
atualizarCarrinho();
