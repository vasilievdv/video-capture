import { call, put, takeLatest } from 'redux-saga/effects';

import { getEvents } from '../../../requests';

import {
  getEventsError,
  getEventsSuccess,
  resetGetEventsError,
} from '../actions';
import { types, Event } from '../types';

function* requestEventsWorker(): Generator<any, any, any> {
  try {    
    const result: Event[] = yield call(getEvents);
    
    yield put(resetGetEventsError());

    yield put(getEventsSuccess(result));
  } catch (e) {
    const error = e as RequestError;
    yield put(getEventsError(error));
  }
}

export function* fetchEventsWatcher() {
  yield takeLatest(types.GET_EVENTS_REQUEST, requestEventsWorker);
}
