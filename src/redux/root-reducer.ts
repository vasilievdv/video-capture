import { combineReducers } from 'redux';

import { EventsReducer, EventsState } from '../components/MainPage';

const rootReducer = combineReducers({
  events: EventsReducer,
});

export interface State {
  events: EventsState;
}

export default rootReducer;
