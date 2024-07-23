import {AxiosPromise} from 'axios';
import {ForecastType} from '../../../../types/Weather/Forecast';
import customAxios from '../../../../config/axios';
import {API_KEY} from '../../../../constants';

export const getForecast = (
  location: string = 'Belgrade',
  lang: string = 'en',
): AxiosPromise<ForecastType> =>
  customAxios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3&q=${location}&aqi=yes&alerts=no&lang=${lang}`,
  );
