import { types, Event } from '../types';

export const getEventsRequest = () => ({
  type: types.GET_EVENTS_REQUEST,
});

export const getEventsSuccess = (
  events: Event[]
): BaseAction<Event[]> => ({
  type: types.GET_EVENTS_SUCCESS,
  payload: events,
});

export const getEventsError = (
  message: RequestError
): BaseAction<RequestError> => ({
  type: types.GET_EVENTS_FAILED,
  payload: message,
});

export const resetGetEventsError = (): BaseAction => ({
  type: types.RESET_EVENTS_ERROR,
});
