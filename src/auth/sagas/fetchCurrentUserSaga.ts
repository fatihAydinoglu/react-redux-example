import { call, put, takeLatest } from 'redux-saga/effects'

import getCurrentUser, {
  GetServerTokenResponse
} from '../../api/getCurrentUser'
import { removeLocalToken } from '../token'

import {
  CURRENT_USER_FETCH_REQUESTED,
  fetchCurrentUserSucceeded,
  fetchCurrentUserFailed
} from '../actions'
import { showErrorNotification } from '../../notification'

function* fetchCurrentUser() {
  try {
    const currentUser: GetServerTokenResponse = yield call(getCurrentUser)
    yield put(fetchCurrentUserSucceeded(currentUser))
  } catch (e) {
    removeLocalToken()
    yield put(
      showErrorNotification('Unexpected error while getting current user')
    )
    yield put(fetchCurrentUserFailed())
  }
}

export default function* fetchCurrentUserSaga() {
  yield takeLatest(CURRENT_USER_FETCH_REQUESTED, fetchCurrentUser)
}
