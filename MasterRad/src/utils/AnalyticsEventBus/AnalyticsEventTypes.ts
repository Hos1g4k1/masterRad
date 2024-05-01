/**
 * EventBus
 * - event filter for listeners: listen to all except these few events, or listen only to these few events
 * - strictly typed event payload
 * - current pool of trackers: console.log
 * - type hint test when a payload is an DefaultEventPayload
 *
 * Plans for the future:
 * - CLI scaffolding to add a new event
 */

import {AEvents} from '../AnalyticsTrackers/AnalyticsEvents';
import {AnalyticsEventWildcardType} from './AnalyticsEventInterface';

export type AnalyticsEvent = AEvents;

export type AnalyticsEventName = AnalyticsEvent['eventName'];

export type AnalyticsTrackerLogFunc<
  Event extends AnalyticsEvent = AnalyticsEvent,
> = (event: Event) => void;

export class LogFuncMap extends Map<
  AnalyticsEventName,
  AnalyticsTrackerLogFunc
> {}

export class LogFuncArrayMap extends Map<
  AnalyticsEventName,
  AnalyticsTrackerLogFunc[]
> {}

export const AnalyticsEventWildcard: AnalyticsEventWildcardType = '*';

const AllEventNames: AnalyticsEventName[] = [];

export const addEventNames = (...eventNames: AnalyticsEventName[]): number => {
  let count = 0;

  eventNames.forEach(eventName => {
    if (!AllEventNames.includes(eventName)) {
      count += AllEventNames.push(eventName);
    }
  });

  return count;
};

export const getAllEventNames = (): AnalyticsEventName[] => [...AllEventNames];

export const getAllEventsExcept = (
  excludedEventNames: AnalyticsEventName[],
): AnalyticsEventName[] =>
  getAllEventNames().filter(event => !excludedEventNames.includes(event));

export const getPayloadWithoutEventName = (event: AnalyticsEvent): object => {
  const payload: {eventName?: string} = {...event};
  delete payload.eventName;
  return payload;
};
