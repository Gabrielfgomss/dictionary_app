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
      console.log(action.payload);
      if (typeof action.payload === 'string') return { error: action.payload };
      state.word = action.payload.word;
      state.phonetics = action.payload.phonetics;
      state.audio = action.payload.audio;
      state.meanings = action.payload.meanings;
      state.error = '';
    },
  },
});

export const { changeMeanings } = wordSlice.actions;

export default wordSlice.reducer;
