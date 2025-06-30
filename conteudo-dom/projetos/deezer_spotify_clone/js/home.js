function renderTracks(tracks, containerId, removable = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (const track of tracks) {
    const div = document.createElement('div');
    const fav = isFavorite(track.id);
    div.className = 'bg-gray-800 text-white rounded p-4 flex flex-col';
    div.innerHTML = `
      <img src="${track.album.cover_medium}" alt="${track.title}" class="mb-2 rounded">
      <p class="font-semibold">${track.title}</p>
      <p class="text-sm text-gray-400">${track.artist.name}</p>
      <audio controls class="w-full mt-2" src="${track.preview}"></audio>
      <button class="mt-2 bg-gray-700 p-1 rounded favorite-btn flex items-center gap-1 ${fav ? 'text-green-500' : ''}">
        <i class="bi ${fav ? 'bi-heart-fill' : 'bi-heart'}"></i> ${removable ? 'Remover' : 'Favoritar'}
      </button>
    `;
    const btn = div.querySelector('.favorite-btn');
    btn.addEventListener('click', () => {
      const added = toggleFavorite(track);
      if (removable && !added) {
        div.remove();
        return;
      }
      const icon = btn.querySelector('i');
      if (added) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
        btn.classList.add('text-green-500');
      } else {
        icon.classList.add('bi-heart');
        icon.classList.remove('bi-heart-fill');
        btn.classList.remove('text-green-500');
      }
    });
    container.appendChild(div);
  }
}

function showSkeletons(containerId, count = 8) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const sk = document.createElement('div');
    sk.className = 'animate-pulse bg-gray-800 rounded p-4 flex flex-col space-y-2';
    sk.innerHTML = `
      <div class="h-32 bg-gray-700 rounded"></div>
      <div class="h-4 bg-gray-700 rounded w-3/4"></div>
      <div class="h-3 bg-gray-700 rounded w-1/2"></div>
    `;
    container.appendChild(sk);
  }
}

function clearContainer(containerId) {
  document.getElementById(containerId).innerHTML = '';
}

const key = 'deezerFavorites';

function getFavorites() {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveFavorites(favs) {
  localStorage.setItem(key, JSON.stringify(favs));
}

function isFavorite(id) {
  return getFavorites().some(t => t.id === id);
}

function toggleFavorite(track) {
  const favs = getFavorites();
  const idx = favs.findIndex(t => t.id === track.id);
  if (idx !== -1) {
    favs.splice(idx, 1);
    saveFavorites(favs);
    return false;
  }
  favs.push(track);
  saveFavorites(favs);
  return true;
}

async function loadGenres() {
  try {
    const response = await fetch('https://api.deezer.com/genre');
    const data = await response.json();
    const select = document.getElementById('genreSelect');
    select.innerHTML = '<option value="0">Todos</option>';
    for (const genre of data.data || []) {
      const opt = document.createElement('option');
      opt.value = genre.id;
      opt.textContent = genre.name;
      select.appendChild(opt);
    }
    select.addEventListener('change', () => loadTopTracks(select.value));
  } catch (err) {
    console.error(err);
  }
}

async function loadTopTracks(genreId = '0') {
  try {
    showSkeletons('tracks');
    const response = await fetch(`https://api.deezer.com/chart/${genreId}/tracks`);
    const data = await response.json();
    renderTracks(data.data || [], 'tracks');
  } catch (err) {
    console.error(err);
    clearContainer('tracks');
  }
}

function setupSearch() {
  const form = document.getElementById('searchForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = document.getElementById('searchInput').value.trim();
    if (q) {
      window.location.href = `search.html?q=${encodeURIComponent(q)}`;
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupSearch();
  loadGenres();
  loadTopTracks();
});
