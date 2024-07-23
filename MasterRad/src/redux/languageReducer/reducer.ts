import {createAction, createReducer} from '@reduxjs/toolkit';
import {LanguageReducerType} from './types';
import * as Localize from 'react-native-localize';

const initialState: LanguageReducerType = {
  currentLanguage: Localize.getLocales()[0].languageCode,
};

export const setCurrentLanguage = createAction<string>('setCurrentLanguage');

const languageReducer = createReducer(initialState, builder => {
  builder.addCase(setCurrentLanguage, (state, action) => {
    state.currentLanguage = action.payload;
  });
});

export {languageReducer};
