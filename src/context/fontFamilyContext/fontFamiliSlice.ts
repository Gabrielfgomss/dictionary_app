/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  font: 'serif'
};

const fontFamilySlice = createSlice({
  name: 'fontFamily',
  initialState,
  reducers: {
    changeFontFamily: (state, action) => {
      console.log(action.payload);
      state.font = action.payload;
    },
  },
});

export const { changeFontFamily } = fontFamilySlice.actions;

export default fontFamilySlice.reducer;
