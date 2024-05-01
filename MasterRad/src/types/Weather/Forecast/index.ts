import {LocationType} from '../Location';
import {ConditionType, CurrentWeatherType} from '../currentWeather.ts';

type AstroType = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonPhase: string;
  isMoonUp: boolean;
  isSunUp: boolean;
};

type HourType = {
  time: string;
  tempC: number;
  isDay: boolean;
  condition: ConditionType;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMb: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  willItRain: boolean;
  chanceOfRain: number;
  willItSnow: boolean;
  chanceOfSnow: number;
  uv: number;
};

type ForecastDayType = {
  maxtempC: number;
  mintempC: number;
  avgtempC: number;
  maxwindKph: number;
  totalprecipMm: number;
  totalsnowcm: number;
  avghumidity: number;
  dailyWillItRain: boolean;
  dailyChanceOfRain: number;
  dailyWillItSnow: boolean;
  dailyChanceOfSnow: number;
  condition: ConditionType;
  uv: number;
  astro: AstroType;
  hour: Array<HourType>;
};

export type ForecastHourType = {
  chanceOfRain: number;
  chanceOfSnow: number;
  cloud: number;
  condition: ConditionType;
  feelslikeC: number;
  humidity: number;
  isDay: number;
  precipMm: number;
  pressureMb: number;
  snowCm: number;
  tempC: number;
  windKph: number;
  time: string;
};
export type ForecastDayDayType = {
  day: ForecastDayType;
  hour: Array<ForecastHourType>;
  date: string;
};

export type ForecastDaysType = {
  forecastday: Array<ForecastDayDayType>;
};

export type ForecastType = {
  location: LocationType;
  current: CurrentWeatherType;
  forecast: ForecastDaysType;
};
