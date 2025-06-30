function loadFavorites() {
  const favs = JSON.parse(localStorage.getItem('deezerFavorites')) || [];
  renderTracks(favs, 'favTracks', true);
}

window.addEventListener('DOMContentLoaded', loadFavorites);
