import {StackActions} from '@react-navigation/native';
import {navigationRef} from './utils';

export const goToSearchScreen = (): void => {
  navigationRef.current?.dispatch(StackActions.push('Search'));
};

export const goToLanguageScreen = (): void => {
  navigationRef.current?.dispatch(StackActions.push('LanguageScreen'));
};
