export const FavorisService = {
  ajouterFavori: (horoscope) => {
    const favoris = JSON.parse(localStorage.getItem('favoris') || '[]');
    favoris.push(horoscope);
    localStorage.setItem('favoris', JSON.stringify(favoris));
  },

  recupererFavoris: () => {
    return JSON.parse(localStorage.getItem('favoris') || '[]');
  },

  supprimerFavori: (id) => {
    const favoris = JSON.parse(localStorage.getItem('favoris') || '[]');
    const nouveauxFavoris = favoris.filter(favori => favori.id !== id);
    localStorage.setItem('favoris', JSON.stringify(nouveauxFavoris));
  }
};
