/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initAnalyticsTrackers} from './src/utils/AnalyticsTrackers/AnalyticsEventsInit';

initAnalyticsTrackers();

AppRegistry.registerComponent(appName, () => App);
