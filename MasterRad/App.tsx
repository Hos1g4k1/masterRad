import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';
import NavigationComponent from './src/navigation';
import * as Sentry from '@sentry/react-native';

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation({
  enableTimeToInitialDisplay: true,
});

Sentry.init({
  dsn: 'https://626ccbd77d09e9a1949cf8029d1a015b@o4506208597180416.ingest.us.sentry.io/4506208611729408',
  integrations: [new Sentry.ReactNativeTracing({routingInstrumentation})],
  tracesSampleRate: 1,
  _experiments: {
    profilesSampleRate: 1.0,
  },
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationComponent routingInstrumentation={routingInstrumentation} />
      </SafeAreaView>
    </Provider>
  );
}

export default Sentry.wrap(App);
