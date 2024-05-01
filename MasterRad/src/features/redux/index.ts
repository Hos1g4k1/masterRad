import {combineReducers} from '@reduxjs/toolkit';
import {forecastReducerName} from '../HomeScreen/redux/forecast/reducer/types';
import {forecastReducer} from '../HomeScreen/redux/forecast/reducer';
import {searchReducerName} from '../Search/redux/reducer/types';
import {searchReducer} from '../Search/redux/reducer';

export const featureReducerName = 'featureReducer';

const featureReducer = combineReducers({
  [forecastReducerName]: forecastReducer,
  [searchReducerName]: searchReducer,
});

export default featureReducer;
