import { EventsState } from '../types';

export const getEventsRequestReducer = (
  state: EventsState
): EventsState => {
  return {
    ...state,
    events: {
      ...state.events,
      fetch: 'pending',
    },
  };
};
