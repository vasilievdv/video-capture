import { all, fork } from 'redux-saga/effects';

import { eventsSagas } from '../components/MainPage';

export default function* root() {
  yield all([fork(eventsSagas)]);
}
