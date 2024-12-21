export const DateUtils = {
  formatDate: (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  },

  getZodiacSign: (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const signs = {
      'Capricorne': [[1, 1], [1, 19]],
      'Verseau': [[1, 20], [2, 18]],
      'Poissons': [[2, 19], [3, 20]],
      'Bélier': [[3, 21], [4, 19]],
      'Taureau': [[4, 20], [5, 20]],
      'Gémeaux': [[5, 21], [6, 20]],
      'Cancer': [[6, 21], [7, 22]],
      'Lion': [[7, 23], [8, 22]],
      'Vierge': [[8, 23], [9, 22]],
      'Balance': [[9, 23], [10, 22]],
      'Scorpion': [[10, 23], [11, 21]],
      'Sagittaire': [[11, 22], [12, 21]]
    };

    for (let [signe, [[startMonth, startDay], [endMonth, endDay]]] of Object.entries(signs)) {
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return signe;
      }
    }
  }
};
