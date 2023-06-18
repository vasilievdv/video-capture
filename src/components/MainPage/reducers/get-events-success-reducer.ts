import { EventsState, Event } from '../types';

export const getEventsSuccessReducer = (
  state: EventsState,
  action: BaseAction<Event[]>
): EventsState => {  
  const sortedEvents = action.payload!.sort((a, b) => a.timestamp - b.timestamp);
  return {
    ...state,
    events: {
      ...state.events,
      fetch: 'resolve',
      data: sortedEvents,
    },
  };
};
