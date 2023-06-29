import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: ''
};

const inputTextSlice = createSlice({
  name: 'inputText',
  initialState,
  reducers: {
    changeInputState: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { changeInputState } = inputTextSlice.actions;

export default inputTextSlice.reducer;
