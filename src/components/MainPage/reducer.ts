import createReducer from '../../redux/create-reducer';


import {
  getEventsRequestReducer,
  getEventsSuccessReducer,
  getEventsFailedReducer,
  getEventsResetErrorReducer,
} from './reducers';
import { types, EventsState } from './types';

export const initialState: EventsState = {
  events: {
    fetch: 'idle',
    data: [],
    error: null,
  },
};

export const TrainSpeedReducer = createReducer(initialState, {
  [types.GET_EVENTS_REQUEST]: getEventsRequestReducer,
  [types.GET_EVENTS_SUCCESS]: getEventsSuccessReducer,
  [types.GET_EVENTS_FAILED]: getEventsFailedReducer,
  [types.RESET_EVENTS_ERROR]: getEventsResetErrorReducer,
});
