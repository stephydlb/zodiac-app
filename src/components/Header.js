import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-section">
        <Link to="/">
          <h1>✨ Zodiac</h1>
        </Link>
      </div>
      <div className="header-actions">
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
