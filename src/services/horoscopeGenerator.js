const horoscopeTemplates = {
  love: [
    "Love is in the air today. Expect surprising encounters.",
    "Focus on self-love and personal growth.",
    "A significant relationship development awaits you."
  ],
  career: [
    "Professional opportunities will present themselves.",
    "Take initiative in your workplace.",
    "A career breakthrough is imminent."
  ],
  health: [
    "Pay attention to your physical well-being today.",
    "Energy levels are high - perfect for starting new habits.",
    "Take time for mental relaxation."
  ]
};

export const generateDailyHoroscope = (sign) => {
  const today = new Date().toISOString().split('T')[0];
  const storedHoroscope = localStorage.getItem(`horoscope_${sign}_${today}`);
  
  if (storedHoroscope) {
    return JSON.parse(storedHoroscope);
  }

  const newHoroscope = {
    date: today,
    love: horoscopeTemplates.love[Math.floor(Math.random() * horoscopeTemplates.love.length)],
    career: horoscopeTemplates.career[Math.floor(Math.random() * horoscopeTemplates.career.length)],
    health: horoscopeTemplates.health[Math.floor(Math.random() * horoscopeTemplates.health.length)],
  };

  localStorage.setItem(`horoscope_${sign}_${today}`, JSON.stringify(newHoroscope));
  return newHoroscope;
};
