import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './features/theme/themeSlice.ts';
import inputTextSlice from './features/inputText/inputTextSlice.ts';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    inputText: inputTextSlice
  }
});
