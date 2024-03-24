import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/utils';
import MainNavigator from './src/navigation/mainNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Sentry from '@sentry/react-native';
import {Provider} from 'react-redux';
import store from './src/store';

Sentry.init({
  dsn: 'https://626ccbd77d09e9a1949cf8029d1a015b@o4506208597180416.ingest.sentry.io/4506208611729408',
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer ref={navigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default Sentry.wrap(App);
