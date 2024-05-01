import {createAsyncThunk} from '@reduxjs/toolkit';
import {LocationType} from '../../../types/Search/location';
import {searchReducerName} from './reducer/types';
import {getLocations} from './api';

interface Args {
  location: string;
}
export const fetchLocations = createAsyncThunk<Array<LocationType>, Args>(
  `${searchReducerName}/getLocations`,
  async ({location}) => {
    const response = await getLocations(location);
    return response.data;
  },
);
