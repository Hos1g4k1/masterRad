import {AnalyticsEventInterface} from '../AnalyticsEventBus/AnalyticsEventInterface';
import * as EventNames from './AnalyticsEventsNames';

export interface ScreenViewEvent
  extends AnalyticsEventInterface<typeof EventNames.SCREEN_VIEW_EVENT> {
  screenName: string;
}

export interface ClickedGraphTypeEvent
  extends AnalyticsEventInterface<typeof EventNames.CLICKED_GRAPH_TYPE_EVENT> {
  type: string;
}

export type AEvents =
  | ScreenViewEvent
  | AnalyticsEventInterface
  | ClickedGraphTypeEvent;
