function formatPriceBRL(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export async function loadProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  const container = document.getElementById('productList');
  container.innerHTML = '';
  products.forEach(p => {
    const wrapper = document.createElement('div');
    wrapper.className = 'product-wrapper';
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="product-img">
    `;
    const info = document.createElement('div');
    info.className = 'product-info';
    info.innerHTML = `
      <h3 class="product-title">${p.title}</h3>
      <p class="product-price">${formatPriceBRL(p.price)}</p>
      <button class="add-btn" data-id="${p.id}">Adicionar</button>
    `;
    wrapper.appendChild(card);
    wrapper.appendChild(info);
    container.appendChild(wrapper);
  });
  // Adiciona evento aos botões de adicionar
  container.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      addToCart(Number(btn.dataset.id));
    });
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

export function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const exists = cart.find(i => i.id === id);
  if (!exists) cart.push({ id, qty: 1 });
  else exists.qty += 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  showToast('Adicionado com sucesso!');
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

loadProducts();
loadCategories();
