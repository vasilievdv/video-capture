import { EventsState } from '../types';

export const getEventsFailedReducer = (
  state: EventsState,
  action: BaseAction<RequestError>
): EventsState => {
  return {
    ...state,
    events: {
      ...state.events,
      fetch: 'rejected',
      error: action.payload!,
    },
  };
};
