/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initAnalyticsTrackers} from './src/utils/AnalyticsTrackers/AnalyticsEventsInit';
import * as Sentry from '@sentry/react-native';

initAnalyticsTrackers();

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Sentry.wrap(App));
