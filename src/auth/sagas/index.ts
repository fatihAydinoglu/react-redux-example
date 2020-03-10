import { all, fork } from 'redux-saga/effects'

import fetchCurrentUserSaga from './fetchCurrentUserSaga'

export default function* authSagas() {
  yield all([fork(fetchCurrentUserSaga)])
}
