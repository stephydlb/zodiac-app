const horoscopeLabels = {
  title: "Votre Horoscope du Jour",
  selectSign: "Sélectionnez votre signe",
  readMore: "Lire plus",
  addToFavorites: "Ajouter aux favoris",
  removeFromFavorites: "Retirer des favoris",
  todayPrediction: "Prédiction du jour",
  loveTitle: "Amour",
  workTitle: "Travail",
  healthTitle: "Santé",
  luckyNumber: "Chiffre chanceux",
  compatibility: "Signe compatible",
  mood: "Humeur du jour"
};

const zodiacSigns = {
  belier: "Bélier",
  taureau: "Taureau",
  gemeaux: "Gémeaux",
  cancer: "Cancer",
  lion: "Lion",
  vierge: "Vierge",
  balance: "Balance",
  scorpion: "Scorpion",
  sagittaire: "Sagittaire",
  capricorne: "Capricorne",
  verseau: "Verseau",
  poissons: "Poissons"
};

import { getHoroscope } from '../utils/horoscopeService';
import { FavorisService } from '../utils/favorisService';
import { NotificationService } from '../utils/notificationService';

// Utilisation dans le composant
const chargerHoroscope = async (signe) => {
  const horoscope = await getHoroscope(signe);
  // Traitement des données
};
