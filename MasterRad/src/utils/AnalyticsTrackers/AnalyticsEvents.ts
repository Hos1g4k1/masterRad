import {AnalyticsEventInterface} from '../AnalyticsEventBus/AnalyticsEventInterface';
import * as EventNames from './AnalyticsEventsNames';

export interface ScreenViewEvent
  extends AnalyticsEventInterface<typeof EventNames.SCREEN_VIEW_EVENT> {
  screenName: string;
}

export type AEvents = ScreenViewEvent | AnalyticsEventInterface;
