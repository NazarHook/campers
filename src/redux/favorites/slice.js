import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'favorite',
    initialState: {
      loading: false,
      error: null,
      items: [],
    },
    reducers: {
      addFavorite: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (!existingItem) {
          state.items.push(action.payload);
        }
      },
      removeFavorite: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      },
    },
  });
  
  export const { addFavorite, removeFavorite } = slice.actions;
  export const favoriteReducer = slice.reducer;
  