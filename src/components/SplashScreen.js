import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return isLoading ? (
    <div className="splash-screen">
      <div className="zodiac-symbol">♈</div>
      <div className="loading-text">Zodiac App</div>
    </div>
  ) : null;
};

export default SplashScreen;
