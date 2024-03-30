import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './mainNavigator';
import {navigationRef} from './utils';
import analyticsEventBus from '../utils/AnalyticsEventBus/AnalyticsEventBus';
import {SCREEN_VIEW_EVENT} from '../utils/AnalyticsTrackers/AnalyticsEventsNames';

const NavigationComponent = () => {
  const [prevRoute, setPrevRoute] = useState<string>('');

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={_ => {
        // Old implementation was problematic because on every navigation state change we were log new screenView event.
        // That leads to wrong statistics. With this implementation we resolved that issue, also we have exact number
        // of renders because react is smart enough to discard unnecessary renders.
        if (navigationRef.current?.getCurrentRoute().name !== prevRoute) {
          analyticsEventBus.log({
            eventName: SCREEN_VIEW_EVENT,
            screenName: navigationRef.current.getCurrentRoute().name,
          });
          setPrevRoute(navigationRef.current.getCurrentRoute().name);
        }
      }}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default NavigationComponent;
