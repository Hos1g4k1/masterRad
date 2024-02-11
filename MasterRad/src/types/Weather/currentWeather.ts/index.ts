export type ConditionType = {
  text: string;
  icon: string;
};

export type AirQualityType = {
  co: number;
  no2: number;
  o3: number;
  so2: number;
};

export type CurrentWeatherType = {
  tempC: number;
  isDay: boolean;
  condition: ConditionType;
  windKmp: number;
  windDegree: number;
  windDir: string;
  preassureMb: number;
  precipMm: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  uv: number;
  airQuality: AirQualityType;
};
