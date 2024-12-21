import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

return (
    <nav className="nav-container">
    <button 
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
    >
        <span></span>
        <span></span>
        <span></span>
    </button>
    <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
        <Link to="/find-sign" className="nav-link" onClick={() => setIsMenuOpen(false)}>Trouver mon signe</Link>
        <Link to="/compatibility" className="nav-link" onClick={() => setIsMenuOpen(false)}>Compatibilité</Link>
        <Link to="/horoscope" className="nav-link" onClick={() => setIsMenuOpen(false)}>Horoscope</Link>
    </div>
    </nav>
  );
}

export default Navigation;
