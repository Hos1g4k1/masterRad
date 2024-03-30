import {StackActions} from '@react-navigation/native';
import {navigationRef} from './utils';

export const goToSearchScreen = (): void => {
  navigationRef.current?.dispatch(StackActions.push('Search'));
};
