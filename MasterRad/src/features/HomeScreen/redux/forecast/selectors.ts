import {RootState} from '../../../../redux/rootReducer';
import {
  ForecastDayDayType,
  ForecastDaysType,
  ForecastHourType,
} from '../../../../types/Weather/Forecast';
import {featureReducerName} from '../../../redux';
import {forecastReducerName} from './reducer/types';
import dayjs from 'dayjs';
const getState = (state: RootState) =>
  state[featureReducerName][forecastReducerName];

export const selectLocation = (state: RootState) =>
  getState(state).forecast?.location;

export const selectForecast = (state: RootState) =>
  getState(state).forecast?.forecast;

export const selectCurrentWeather = (state: RootState) =>
  getState(state).forecast?.current;

export const selectCurrentDayForecast = (state: RootState) =>
  getState(state).forecast?.forecast.forecastday[0].day;

export const selectForecastDataForTheNextTwentyFourHours = (
  state: RootState,
): Array<ForecastHourType> => {
  if (getState(state).forecast === null) {
    return [];
  }
  const currentHour = dayjs().hour();
  const currentDay = getState(
    state,
  ).forecast?.forecast.forecastday[0].hour.slice(currentHour - 1, 23);
  const nextDay = getState(state).forecast?.forecast.forecastday[1].hour.slice(
    0,
    currentHour,
  );

  return [...currentDay!, ...nextDay!];
};

export const selectForecastForNextThreeDays = (
  state: RootState,
): Array<ForecastDayDayType> => {
  const forecast = getState(state).forecast;
  if (!forecast) {
    return [];
  }
  return forecast.forecast.forecastday.slice(0, 3);
};
