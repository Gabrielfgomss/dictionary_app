import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './features/themeContext/themeSlice.ts';
import inputTextSlice from './features/inputTextContext/inputTextSlice.ts';
import fontFamiliSlice from './features/fontFamilyContext/fontFamiliSlice.ts';
import wordSlice from './features/DataContext/wordSlice.ts';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    inputText: inputTextSlice,
    fontFamily: fontFamiliSlice,
    word: wordSlice
  }
});

export default store;
