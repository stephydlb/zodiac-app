export const getHoroscope = async (sign) => {
  try {
    const response = await fetch(`/api/horoscope/${sign}`);
    const data = await response.json();
    return {
      amour: data.love,
      travail: data.work,
      sante: data.health,
      chiffreChanceux: data.luckyNumber,
      humeur: data.mood,
      compatibilite: data.compatibility
    };
  } catch (error) {
    throw new Error('Erreur lors du chargement de l\'horoscope');
  }
};
