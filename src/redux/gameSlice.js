import {createSlice} from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    games: [],
    selectedPlatform: 'all',
    selectedCategory: '',
    selectedSortBy: '',
  },
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
    },
    setSelectedPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedSortBy: (state, action) => {
      state.selectedSortBy = action.payload;
    },
  },
});

export const {
  setGames,
  setSelectedPlatform,
  setSelectedCategory,
  setSelectedSortBy,
} = gameSlice.actions;

export default gameSlice.reducer;
