import { all, call } from 'redux-saga/effects';

import { fetchEventsWatcher } from './get-events-saga';

export function* eventsSagas() {
  yield all([call(fetchEventsWatcher)]);
}
