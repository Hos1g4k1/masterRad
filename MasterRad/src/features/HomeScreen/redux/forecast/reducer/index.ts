import {createReducer} from '@reduxjs/toolkit';
import {fetchForecast} from '../modules';
import {ForecastReducerType} from './types';

const initialState: ForecastReducerType = {
  forecast: null,
};

const forecastReducer = createReducer(initialState, builder => {
  builder.addCase(fetchForecast.fulfilled, (state, action) => {
    state.forecast = action.payload;
  });
});

export {forecastReducer};
