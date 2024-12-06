import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/find-sign" className="nav-link">Trouver mon signe</Link>
        <Link to="/compatibility" className="nav-link">Compatibilité</Link>
        <Link to="/horoscope" className="nav-link">Horoscope</Link>
      </div>
    </nav>
  );
}

export default Navigation;
