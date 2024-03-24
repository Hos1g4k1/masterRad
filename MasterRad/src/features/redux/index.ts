import {combineReducers} from '@reduxjs/toolkit';
import {forecastReducerName} from '../HomeScreen/redux/forecast/reducer/types';
import {forecastReducer} from '../HomeScreen/redux/forecast/reducer';

export const featureReducerName = 'featureReducer';

const featureReducer = combineReducers({
  [forecastReducerName]: forecastReducer,
});

export default featureReducer;
