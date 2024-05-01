import {AnalyticsTrackerLogFunc, LogFuncArrayMap} from './AnalyticsEventTypes';
import {AnalyticsTracker} from './AnalyticsTracker';

export class AnalyticsEventBus {
  private static instance: AnalyticsEventBus | null = null;

  private trackers: AnalyticsTracker[] = [];

  private EventsPerListeners: LogFuncArrayMap = new LogFuncArrayMap();

  getTrackers = (): AnalyticsTracker[] => this.trackers;

  addTracker = (
    tracker: AnalyticsTracker,
    environment: 'debug' | 'release',
  ): void => {
    if (tracker.init) {
      tracker.init(environment);
    }
    this.trackers.push(tracker);
    const eventNames = tracker.getEventNames();

    eventNames.forEach(event => {
      if (!this.EventsPerListeners.get(event)) {
        this.EventsPerListeners.set(event, []);
      }

      this.EventsPerListeners.get(event)!.push(tracker.log);
    });
  };

  log: AnalyticsTrackerLogFunc = event => {
    this.EventsPerListeners.get(event.eventName)?.forEach(listenerLog =>
      listenerLog(event),
    );
  };

  public static getInstance = () => {
    if (!AnalyticsEventBus.instance) {
      AnalyticsEventBus.instance = new AnalyticsEventBus();
    }
    return AnalyticsEventBus.instance;
  };
}

const analyticsEventBus = AnalyticsEventBus.getInstance();

export default analyticsEventBus;
