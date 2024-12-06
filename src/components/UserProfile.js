import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  return (
    <div className="user-profile">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p>Email: {user?.email}</p>
        <p>Zodiac Sign: {user?.zodiacSign}</p>
        <button onClick={() => navigate('/favorites')}>My Favorites</button>
        <button onClick={() => {
          localStorage.clear();
          window.location.href = '/login';
        }}>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
