import {combineReducers} from '@reduxjs/toolkit';
import featureReducer, {featureReducerName} from '../features/redux';
import {languageReducerName} from './languageReducer/types';
import {languageReducer} from './languageReducer/reducer';

const rootReducer = combineReducers({
  [featureReducerName]: featureReducer,
  [languageReducerName]: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
