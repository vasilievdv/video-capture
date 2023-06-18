import { EventsState } from '../types';

export const getEventsResetErrorReducer = (
  state: EventsState
): EventsState => {
  return {
    ...state,
    events: {
      ...state.events,
      error: null,
    },
  };
};
