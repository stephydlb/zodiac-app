import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FindSign.css';

function FindSign() {
  const [birthDate, setBirthDate] = useState('');
  const [zodiacSign, setZodiacSign] = useState(null);
  const navigate = useNavigate();

  const getZodiacSign = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Bélier";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taureau";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gémeaux";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Lion";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Vierge";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Balance";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpion";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittaire";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorne";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Verseau";
    return "Poissons";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date(birthDate);
    const sign = getZodiacSign(date);
    setZodiacSign(sign);

    // Save user data
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const updatedUser = {
      ...user,
      zodiacSign: sign,
      birthDate: birthDate
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));

    // Redirect to horoscope after 2 seconds
    setTimeout(() => {
      navigate('/horoscope');
    }, 2000);
  };

  return (
    <div className="find-sign-container">
      <form onSubmit={handleSubmit} className="date-form">
        <h2>Découvrez votre signe</h2>
        <div className="input-group">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            Découvrir mon signe
          </button>
        </div>
      </form>
      
      {zodiacSign && (
        <div className="result-card">
          <h3>Votre signe est :</h3>
          <div className="sign-result">{zodiacSign}</div>
          <p className="redirect-message">
            Redirection vers votre horoscope...
          </p>
        </div>
      )}
    </div>
  );
}

export default FindSign;