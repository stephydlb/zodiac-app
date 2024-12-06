import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!isAuthenticated) {
    return (
      <div className="user-menu">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    );
  }

  return (
    <div className="user-menu">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
