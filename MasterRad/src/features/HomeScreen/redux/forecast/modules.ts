import {createAsyncThunk} from '@reduxjs/toolkit';
import {getForecast} from './api';
import {ForecastType} from '../../../../types/Weather/Forecast';
import {forecastReducerName} from './reducer/types';

interface Args {
  location: string;
  lang?: string;
}
export const fetchForecast = createAsyncThunk<ForecastType, Args>(
  `${forecastReducerName}/getForecast`,
  async ({location, lang}) => {
    const response = await getForecast(location, lang);
    return response.data;
  },
);
