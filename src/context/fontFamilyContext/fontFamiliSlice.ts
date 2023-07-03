/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  font: 'lato'
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
