import React, { useEffect, useState } from 'react';
import { generateDailyHoroscope } from '../services/horoscopeGenerator';
import '../styles/Horoscope.css';

const Horoscope = () => {
  const [horoscope, setHoroscope] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const today = new Date().toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  useEffect(() => {
    if (user?.zodiacSign) {
      const dailyHoroscope = generateDailyHoroscope(user.zodiacSign);
      setHoroscope(dailyHoroscope);
    }
  }, [user?.zodiacSign]);

  return (
    <div className="horoscope-container">
      <div className="horoscope-header">
        <h2>Votre Horoscope du Jour</h2>
        <p className="date">{today}</p>
      </div>
      {horoscope ? (
        <div className="horoscope-content">
          <div className="zodiac-banner">
            <h3>{user?.zodiacSign}</h3>
            <span className="zodiac-date">21 mars - 19 avril</span>
          </div>
          <div className="predictions-grid">
            <div className="prediction-card love">
              <h4>❤️ Amour</h4>
              <p>{horoscope.love}</p>
              <div className="luck-meter">Chance: 85%</div>
            </div>
            <div className="prediction-card career">
              <h4>💼 Carrière</h4>
              <p>{horoscope.career}</p>
              <div className="luck-meter">Chance: 92%</div>
            </div>
            <div className="prediction-card health">
              <h4>🌟 Bien-être</h4>
              <p>{horoscope.health}</p>
              <div className="luck-meter">Chance: 78%</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="setup-prompt">
          <p>Configurez votre signe astrologique dans votre profil' pour découvrir votre horoscope.</p>
        </div>
      )}
    </div>
  );
};

export default Horoscope;