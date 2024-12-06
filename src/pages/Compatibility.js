import React, { useState } from 'react';
import '../styles/Compatibility.css';

function Compatibility() {
  const [selectedSign1, setSelectedSign1] = useState('');
  const [selectedSign2, setSelectedSign2] = useState('');
  const [compatibilityScore, setCompatibilityScore] = useState(null);

  const zodiacSigns = [
    "Bélier", "Taureau", "Gémeaux", "Cancer", 
    "Lion", "Vierge", "Balance", "Scorpion",
    "Sagittaire", "Capricorne", "Verseau", "Poissons"
  ];

  const calculateCompatibility = () => {
    const compatibilityScores = {
      'Feu': ['Bélier', 'Lion', 'Sagittaire'],
      'Terre': ['Taureau', 'Vierge', 'Capricorne'], 
      'Air': ['Gémeaux', 'Balance', 'Verseau'],
      'Eau': ['Cancer', 'Scorpion', 'Poissons']
    };

    let score = 0;
    const getElement = (sign) => {
      return Object.entries(compatibilityScores).find(([_, signs]) => 
        signs.includes(sign)
      )?.[0];
    };

    const element1 = getElement(selectedSign1);
    const element2 = getElement(selectedSign2);

    if (selectedSign1 === selectedSign2) score = 100;
    else if (element1 === element2) score = 80;
    else if ((element1 === 'Feu' && element2 === 'Air') || 
             (element1 === 'Air' && element2 === 'Feu') ||
             (element1 === 'Terre' && element2 === 'Eau') ||
             (element1 === 'Eau' && element2 === 'Terre')) score = 60;
    else score = 40;

    setCompatibilityScore(score);
  };

  return (
    <div className="compatibility-container">
      <h2>Test de Compatibilité</h2>
      <div className="compatibility-form">
        <select 
          value={selectedSign1} 
          onChange={(e) => setSelectedSign1(e.target.value)}
          className="zodiac-select"
        >
          <option value="">Premier signe</option>
          {zodiacSigns.map(sign => (
            <option key={sign} value={sign}>{sign}</option>
          ))}
        </select>

        <select 
          value={selectedSign2} 
          onChange={(e) => setSelectedSign2(e.target.value)}
          className="zodiac-select"
        >
          <option value="">Second signe</option>
          {zodiacSigns.map(sign => (
            <option key={sign} value={sign}>{sign}</option>
          ))}
        </select>

        <button 
          onClick={calculateCompatibility}
          className="calculate-btn"
          disabled={!selectedSign1 || !selectedSign2}
        >
          Calculer la compatibilité
        </button>
      </div>

      {compatibilityScore !== null && (
        <div className="compatibility-result">
          <div className="progress-bar">
            <div 
              style={{ width: `${compatibilityScore}%` }} 
              className="progress"
            ></div>
          </div>
          <p className="score-text">{compatibilityScore}% de compatibilité</p>
          <p className="signs-text">{selectedSign1} + {selectedSign2}</p>
        </div>
      )}
    </div>
  );
}

export default Compatibility;