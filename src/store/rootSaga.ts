import { all, fork } from 'redux-saga/effects'
import authSagas from '../auth/sagas'
import blogPostSagas from '../blogPosts/sagas'

function* rootSaga() {
  yield all([fork(authSagas), fork(blogPostSagas)])
}

export default rootSaga
