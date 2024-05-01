import {
  AnalyticsEventWildcard,
  AnalyticsTrackerLogFunc,
  getPayloadWithoutEventName,
  LogFuncMap,
} from '../AnalyticsEventBus/AnalyticsEventTypes';
import {AnalyticsTracker} from '../AnalyticsEventBus/AnalyticsTracker';

const logDefault: AnalyticsTrackerLogFunc = event => {
  console.log(
    'Development Console',
    '::',
    event.eventName,
    '::',
    getPayloadWithoutEventName(event),
  );
};

const ConsoleProcessors = new LogFuncMap([
  [AnalyticsEventWildcard, logDefault],
]);

export const ConsoleTracker = new AnalyticsTracker({
  name: 'Development Console',
  processors: ConsoleProcessors,
});
