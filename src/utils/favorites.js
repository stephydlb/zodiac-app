const FavoritesManager = {
  addFavorite(horoscope) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(horoscope);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  },

  removeFavorite(id) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updated = favorites.filter(fav => fav.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updated));
  },

  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }
};

export default FavoritesManager;
