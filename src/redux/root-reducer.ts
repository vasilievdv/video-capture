import { combineReducers } from 'redux';

import { TrainSpeedReducer, EventsState } from '../components/MainPage';

const rootReducer = combineReducers({
  events: TrainSpeedReducer,
});

export interface State {
  events: EventsState;
}

export default rootReducer;
