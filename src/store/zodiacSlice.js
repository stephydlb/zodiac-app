import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSign: null,
  birthDate: '',
  compatibility: {
    sign1: '',
    sign2: '',
    score: null
  },
  favorites: []
};

export const zodiacSlice = createSlice({
  name: 'zodiac',
  initialState,
  reducers: {
    setCurrentSign: (state, action) => {
      state.currentSign = action.payload;
    },
    setBirthDate: (state, action) => {
      state.birthDate = action.payload;
    },
    setCompatibility: (state, action) => {
      state.compatibility = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
    }
  }
});

export const { 
  setCurrentSign, 
  setBirthDate, 
  setCompatibility, 
  addToFavorites, 
  removeFromFavorites 
} = zodiacSlice.actions;

export default zodiacSlice.reducer;
