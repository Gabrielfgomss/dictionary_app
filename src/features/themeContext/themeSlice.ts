import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'light',
  isChecked: true,
  invert: 'invert-0'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeState: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
      state.isChecked = !state.isChecked;
      state.invert = state.invert === 'invert' ? 'invert-0' : 'invert';
    },
  },
});

export const { changeState } = themeSlice.actions;

export default themeSlice.reducer;
