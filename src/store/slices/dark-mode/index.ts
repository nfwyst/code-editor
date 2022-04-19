import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const darkModeSlice = createSlice({
  initialState,
  name: 'darkMode',
  reducers: {
    toggleDarkMode: (state) => {
      return !state;
    }
  }
})

export const { toggleDarkMode } = darkModeSlice.actions;
export const { reducer: darkModeReducer } = darkModeSlice;
