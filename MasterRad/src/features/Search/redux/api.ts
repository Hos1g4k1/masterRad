import {AxiosPromise} from 'axios';
import customAxios from '../../../config/axios';
import {LocationType} from '../../../types/Search/location';
import {API_KEY} from '../../../constants';

export const getLocations = (
  location: string = '',
): AxiosPromise<Array<LocationType>> =>
  customAxios.get(
    `https://api.weatherapi.com/v1/search.json?q=${location}&key=${API_KEY}`,
  );
