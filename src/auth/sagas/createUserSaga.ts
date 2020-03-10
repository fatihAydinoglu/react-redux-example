import { call, put, takeLatest } from 'redux-saga/effects'

import createUserApiCall, { CreateUserResponse } from '../../api/createUser'

import {
  CREATE_USER_REQUESTED,
  CreateUserAction,
  createUserSucceeded,
  createUserFailed
} from '../actions'
import {
  showErrorNotification,
  showSuccessNotification
} from '../../notification'

function* createUser(action: CreateUserAction) {
  try {
    const savedUser: CreateUserResponse = yield call(
      createUserApiCall,
      action.user
    )
    yield put(createUserSucceeded(savedUser))
    yield put(
      showSuccessNotification('You can login with your saved credentials')
    )
  } catch (e) {
    yield put(showErrorNotification('Unexpected error while saving new user'))
    yield put(createUserFailed())
  }
}

export default function* createUserSaga() {
  yield takeLatest(CREATE_USER_REQUESTED, createUser)
}
