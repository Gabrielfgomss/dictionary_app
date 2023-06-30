import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  word: '',
  phonetics: '',
  audio: '',
  meanings: [],
  error: ''
};

const wordSlice = createSlice({
  name: 'fetchWord',
  initialState,
  reducers: {
    changeMeanings: (state, action) => {
      console.log(typeof action.payload === 'string');
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.word = action.payload.word;
        state.phonetics = action.payload.phonetics;
        state.audio = action.payload.audio;
        state.meanings = action.payload.meanings;
        state.error = '';
      }
    },
  },
});

export const { changeMeanings } = wordSlice.actions;

export default wordSlice.reducer;
