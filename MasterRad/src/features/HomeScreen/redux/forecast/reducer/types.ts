import {ForecastType} from '../../../../../types/Weather/Forecast';

export const forecastReducerName = 'forecast';

export type ForecastReducerType = {
  forecast: ForecastType | null;
};
