export const types = {
  GET_EVENTS_REQUEST: 'GET_EVENTS_REQUEST',
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
  GET_EVENTS_FAILED: 'GET_EVENTS_FAILED',
  RESET_EVENTS_ERROR: 'RESET_EVENTS_ERROR',
};

export interface Event {
  id: number;
  timestamp: number;
  duration: number;
  zone: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

export interface EventsState {
  events: StoreFetchState<Event[]>;
}
