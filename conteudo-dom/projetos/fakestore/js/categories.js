async function loadCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json();
  const list = document.getElementById('categoryList');
  categories.forEach(cat => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="category.html?name=${encodeURIComponent(cat)}" class="underline">${cat}</a>`;
    list.appendChild(li);
  });
}

loadCategories();
