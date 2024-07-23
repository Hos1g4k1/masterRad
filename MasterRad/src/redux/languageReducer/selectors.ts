import {RootState} from '../rootReducer';
import {languageReducerName} from './types';
const getState = (state: RootState) => state[languageReducerName];

export const selectCurrentLanguage = (state: RootState) =>
  getState(state).currentLanguage;
