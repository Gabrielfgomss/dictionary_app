import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './context/themeContext/themeSlice.ts';
import inputTextSlice from './context/inputTextContext/inputTextSlice.ts';
import fontFamiliSlice from './context/fontFamilyContext/fontFamiliSlice.ts';
import wordSlice from './context/DataContext/wordSlice.ts';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    inputText: inputTextSlice,
    fontFamily: fontFamiliSlice,
    word: wordSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
