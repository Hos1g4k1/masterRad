import {
  AnalyticsEventName,
  AnalyticsEventWildcard,
  AnalyticsTrackerLogFunc,
  getAllEventsExcept,
  LogFuncMap,
} from './AnalyticsEventTypes';

export type AnalyticsTrackerInitFunc = (
  environment: 'debug' | 'release',
) => void;

export type AnalyticsTrackerConfig = {
  name: string;
  init?: AnalyticsTrackerInitFunc;
  processors: LogFuncMap;
};

export class AnalyticsTracker {
  getEventNames = (): AnalyticsEventName[] =>
    Array.from(this.eventProcessors.keys());

  isListeningTo = (eventName: AnalyticsEventName): boolean =>
    this.eventProcessors.has(eventName) ||
    this.eventProcessors.has(AnalyticsEventWildcard);

  private eventProcessors: LogFuncMap;

  name: string;

  private initProcessorsMap = (processors: LogFuncMap): LogFuncMap => {
    if (!processors.has(AnalyticsEventWildcard)) {
      return processors;
    }

    const logDefault = processors.get(AnalyticsEventWildcard)!;
    processors.delete(AnalyticsEventWildcard);
    const eventNames = getAllEventsExcept(Array.from(processors.keys()));
    eventNames.forEach(eventName => {
      processors.set(eventName, logDefault);
    });

    return processors;
  };

  init: AnalyticsTrackerInitFunc;

  constructor(config: AnalyticsTrackerConfig) {
    this.name = config.name;
    this.eventProcessors = this.initProcessorsMap(config.processors);
    this.init = config.init;
  }

  log: AnalyticsTrackerLogFunc = event => {
    if (this.isListeningTo(event.eventName)) {
      this.eventProcessors.get(event.eventName)!(event);
    }
  };
}
