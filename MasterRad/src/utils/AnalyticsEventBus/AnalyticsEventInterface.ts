export type AnalyticsEventWildcardType = '*';

export interface AnalyticsEventInterface<
  EventName = AnalyticsEventWildcardType,
> {
  eventName: EventName;
}
