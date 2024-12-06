import { configureStore } from '@reduxjs/toolkit';
import zodiacReducer from './zodiacSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    zodiac: zodiacReducer,
    theme: themeReducer,
  },
});
