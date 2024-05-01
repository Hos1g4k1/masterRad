import {createAction, createReducer} from '@reduxjs/toolkit';
import {fetchForecast} from '../modules';
import {ForecastReducerType} from './types';

const initialState: ForecastReducerType = {
  forecast: null,
  currentLocation: 'Belgrade',
};

export const setCurrentLocation = createAction<string>('setCurrentLocation');

const forecastReducer = createReducer(initialState, builder => {
  builder.addCase(fetchForecast.fulfilled, (state, action) => {
    state.forecast = action.payload;
  });
  builder.addCase(setCurrentLocation, (state, action) => {
    state.currentLocation = action.payload;
  });
});

export {forecastReducer};
