function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

async function loadProduct() {
  const id = getParam('id');
  if (!id) return;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const p = await res.json();
  const container = document.getElementById('productDetails');
  container.innerHTML = `
    <img src="${p.image}" alt="${p.title}" class="h-60 mx-auto mb-4 object-contain">
    <h2 class="text-2xl mb-2 font-bold">${p.title}</h2>
    <p class="mb-2">$${p.price}</p>
    <p class="mb-4">${p.description}</p>
    <button class="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded" onclick="addToCart(${p.id})">Adicionar ao carrinho</button>
  `;
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const exists = cart.find(i => i.id === id);
  if (!exists) cart.push({ id, qty: 1 });
  else exists.qty += 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Adicionado ao carrinho');
}

loadProduct();
