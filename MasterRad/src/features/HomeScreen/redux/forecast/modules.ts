import {createAsyncThunk} from '@reduxjs/toolkit';
import {getForecast} from './api';
import {ForecastType} from '../../../../types/Weather/Forecast';
import {forecastReducerName} from './reducer/types';

interface Args {
  location: string;
}
export const fetchForecast = createAsyncThunk<ForecastType, Args>(
  `${forecastReducerName}/getForecast`,
  async ({location}) => {
    const response = await getForecast(location);
    return response.data;
  },
);
