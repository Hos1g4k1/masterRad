import {AxiosPromise} from 'axios';
import {ForecastType} from '../../../../types/Weather/Forecast';
import customAxios from '../../../../config/axios';
export const getForecast = (
  location: string = 'Belgrade',
): AxiosPromise<ForecastType> => {
  return customAxios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=33637bdac514482489e211636232805&days=1&q=${location}&aqi=yes&alerts=no`,
  );
};
