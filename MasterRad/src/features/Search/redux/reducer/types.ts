import {LocationType} from '../../../../types/Search/location';
import {LoadingStatus} from '../../../../types/loadingStatus';

export const searchReducerName = 'search';

export type SearchReducerType = {
  locations: Array<LocationType>;
  loadingStatus: LoadingStatus;
};
