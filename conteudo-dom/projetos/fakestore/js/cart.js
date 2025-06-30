function formatPriceBRL(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

async function loadCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json();
  const dropdown = document.getElementById('dropdownCategories');
  if (dropdown) {
    dropdown.innerHTML = '';
    categories.forEach(cat => {
      const a = document.createElement('a');
      a.href = `category.html?cat=${encodeURIComponent(cat)}`;
      a.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
      dropdown.appendChild(a);
    });
  }
}

let selectedInstallment = 1;
let lastCartTotal = 0;

function getCartTotal(cart, products) {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function updateCartTotal(cart, products) {
  let total = getCartTotal(cart, products);
  lastCartTotal = total;
  // Verifica se há juros
  if (selectedInstallment === 11) {
    total = total * 1.05;
  } else if (selectedInstallment === 12) {
    total = total * 1.10;
  }
  const totalDiv = document.getElementById('cartTotal');
  if (totalDiv) {
    totalDiv.textContent = `Total: ${formatPriceBRL(total)}`;
  }
}

function renderInstallments(total) {
  const installmentsDiv = document.getElementById('installments');
  if (!installmentsDiv) return;
  let html = '';
  let maxNoInterest = total > 1000 ? 10 : 3;
  if (total > 0) {
    html += `<div class='installment-label'>Parcelamento:</div>`;
    html += `<select id="installmentSelect" class="installment-select">`;
    for (let i = 1; i <= maxNoInterest; i++) {
      html += `<option value="${i}" ${i==selectedInstallment?'selected':''}>${i}x de ${formatPriceBRL(total/i)} sem juros</option>`;
    }
    html += `<option value="11"${selectedInstallment==11?' selected':''}>11x de ${formatPriceBRL((total*1.05)/11)} com juros</option>`;
    html += `<option value="12"${selectedInstallment==12?' selected':''}>12x de ${formatPriceBRL((total*1.10)/12)} com juros</option>`;
    html += `</select>`;
  }
  installmentsDiv.innerHTML = html;
  const select = installmentsDiv.querySelector('#installmentSelect');
  if (select) {
    select.addEventListener('change', (e) => {
      selectedInstallment = Number(select.value);
      updateCartTotal(
        JSON.parse(localStorage.getItem('cart') || '[]'),
        window._cartProducts || []
      );
    });
  }
}

async function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Carrinho vazio</p>';
    document.getElementById('cartTotal').textContent = '';
    renderInstallments(0);
    setupPaymentToggle();
    return;
  }
  // Buscar todos os produtos do carrinho
  const products = await Promise.all(cart.map(async item => {
    const res = await fetch(`https://fakestoreapi.com/products/${item.id}`);
    return await res.json();
  }));
  window._cartProducts = products;
  cart.forEach((item, idx) => {
    const product = products[idx];
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="cart-item-img">
      <div class="cart-item-info">
        <span class="cart-item-title">${product.title}</span>
        <div class="cart-item-qty-controls">
          <button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
        </div>
      </div>
      <span class="cart-item-price">${formatPriceBRL(product.price * item.qty)}</span>
    `;
    container.appendChild(div);
  });
  // Eventos dos botões de quantidade
  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(btn.dataset.id);
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const item = cart.find(i => i.id === id);
      if (!item) return;
      if (btn.dataset.action === 'increase') item.qty += 1;
      if (btn.dataset.action === 'decrease') {
        item.qty -= 1;
        if (item.qty <= 0) {
          cart = cart.filter(i => i.id !== id);
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart();
    });
  });
  updateCartTotal(cart, products);
  renderInstallments(getCartTotal(cart, products));
  setupPaymentToggle();
}

// Alternar layouts de pagamento
function setupPaymentToggle() {
  const radioCartao = document.querySelector('input[name="payment"][value="cartao"]');
  const radioPix = document.querySelector('input[name="payment"][value="pix"]');
  const cardPayment = document.getElementById('cartCardPayment');
  const pixPayment = document.getElementById('cartPixPayment');
  function toggle() {
    if (radioCartao.checked) {
      cardPayment.style.display = 'block';
      pixPayment.style.display = 'none';
    } else {
      cardPayment.style.display = 'none';
      pixPayment.style.display = 'block';
    }
  }
  if (radioCartao && radioPix && cardPayment && pixPayment) {
    radioCartao.addEventListener('change', toggle);
    radioPix.addEventListener('change', toggle);
    toggle();
  }
}

// Mostrar/ocultar input de busca
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
if (searchIcon && searchInput) {
  searchIcon.addEventListener('click', () => {
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
      searchInput.style.display = 'inline-block';
      searchInput.focus();
    } else {
      searchInput.style.display = 'none';
    }
  });
}

loadCart();
loadCategories();
setupPaymentToggle();
