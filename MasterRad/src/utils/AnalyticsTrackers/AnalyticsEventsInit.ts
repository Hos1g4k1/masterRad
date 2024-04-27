import analyticsEventBus from '../AnalyticsEventBus/AnalyticsEventBus';
import {AnalyticsTracker} from '../AnalyticsEventBus/AnalyticsTracker';
import * as Events from '../AnalyticsTrackers/AnalyticsEventsNames';
import {ConsoleTracker} from '../AnalyticsTrackers/ConsoleAnalyticsTracker';
import {addEventNames} from '../AnalyticsEventBus/AnalyticsEventTypes';

const addTrackers = (
  trackers: AnalyticsTracker[],
  environment: 'release' | 'debug',
) => {
  trackers.forEach(tracker => {
    analyticsEventBus.addTracker(tracker, environment);
  });
};

export const initAnalyticsTrackers = () => {
  addEventNames(Events.SCREEN_VIEW_EVENT, Events.CLICKED_GRAPH_TYPE_EVENT);

  const DEBUG_TRACKERS = [ConsoleTracker];
  addTrackers(DEBUG_TRACKERS, 'debug');
};
