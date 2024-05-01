import {RootState} from '../../../redux/rootReducer';
import {LoadingStatus} from '../../../types/loadingStatus';
import {featureReducerName} from '../../redux';
import {searchReducerName} from './reducer/types';

const getState = (state: RootState) =>
  state[featureReducerName][searchReducerName];

export const selectLoadingStatus = (state: RootState) =>
  getState(state).loadingStatus;

export const selectIsLoading = (state: RootState) =>
  getState(state).loadingStatus === LoadingStatus.Initializing;

export const selectLocations = (state: RootState) => getState(state).locations;
