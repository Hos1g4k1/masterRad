import {combineReducers} from '@reduxjs/toolkit';
import featureReducer, {featureReducerName} from '../features/redux';

const rootReducer = combineReducers({
  [featureReducerName]: featureReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
