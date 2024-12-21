export const ThemeService = {
  THEME_KEY: 'zodiac-theme',
  
  setTheme: (theme) => {
    localStorage.setItem(ThemeService.THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  getTheme: () => {
    return localStorage.getItem(ThemeService.THEME_KEY) || 'light';
  }
};
