import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  font: 'serif'
};

const fontFamilySlice = createSlice({
  name: 'fontFamily',
  initialState,
  reducers: {
    changeFontFamily: (state, action) => {
      state.font = action.payload;
    },
  },
});

export const { changeFontFamily } = fontFamilySlice.actions;

export default fontFamilySlice.reducer;
