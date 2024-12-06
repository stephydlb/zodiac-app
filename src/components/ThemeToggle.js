import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="theme-toggle" onClick={handleToggle}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;
