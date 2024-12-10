import React, { useEffect, useState } from 'react';
import { generateDailyHoroscope } from '../services/horoscopeGenerator';
import '../styles/Horoscope.css';

const Horoscope = () => {
  const [horoscope, setHoroscope] = useState(null);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const today = new Date().toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  useEffect(() => {
    if (user?.zodiacSign) {
      try {
        const dailyHoroscope = generateDailyHoroscope(user.zodiacSign);
        setHoroscope(dailyHoroscope);
      } catch (err) {
        setError("Impossible de générer l'horoscope");
      }
    } else {
      setError("Veuillez d'abord définir votre signe astrologique");
    }
  }, [user?.zodiacSign]);

  if (error) {
    return <div className="horoscope-error">{error}</div>;
  }

  if (!horoscope) {
    return <div className="horoscope-loading">Chargement de votre horoscope...</div>;
  }

  return (
    <div className="horoscope-container">
      <h2>Horoscope du {today}</h2>
      <div className="horoscope-sign">
        <h3>Signe: {user?.zodiacSign}</h3>
      </div>
      <div className="horoscope-sections">
        <div className="horoscope-section">
          <h4>❤️ Amour</h4>
          <p>{horoscope.love}</p>
        </div>
        <div className="horoscope-section">
          <h4>💼 Carrière</h4>
          <p>{horoscope.career}</p>
        </div>
        <div className="horoscope-section">
          <h4>🌟 Santé</h4>
          <p>{horoscope.health}</p>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;