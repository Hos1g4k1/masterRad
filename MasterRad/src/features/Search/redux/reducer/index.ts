import {createReducer} from '@reduxjs/toolkit';
import {SearchReducerType} from './types';
import {fetchLocations} from '../module';
import {LoadingStatus} from '../../../../types/loadingStatus';

const initialState: SearchReducerType = {
  locations: [],
  loadingStatus: LoadingStatus.NotInitialized,
};

const searchReducer = createReducer(initialState, builder => {
  builder.addCase(fetchLocations.fulfilled, (state, action) => {
    state.locations = action.payload;
    state.loadingStatus = LoadingStatus.Fetched;
  });
  builder.addCase(fetchLocations.pending, state => {
    state.loadingStatus = LoadingStatus.Initializing;
  });
  builder.addCase(fetchLocations.rejected, state => {
    state.loadingStatus = LoadingStatus.Failed;
  });
});

export {searchReducer};
