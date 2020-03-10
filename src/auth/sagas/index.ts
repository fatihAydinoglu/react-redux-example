import { all, fork } from 'redux-saga/effects'

import fetchCurrentUserSaga from './fetchCurrentUserSaga'
import createUserSaga from './createUserSaga'

export default function* authSagas() {
  yield all([fork(fetchCurrentUserSaga), fork(createUserSaga)])
}
