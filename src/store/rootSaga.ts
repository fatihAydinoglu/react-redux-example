import { all, fork } from 'redux-saga/effects'
import authSagas from '../auth/sagas'
import blogPostSagas from '../blogPosts/sagas'
import commentSagas from '../comments/sagas'

function* rootSaga() {
  yield all([fork(authSagas), fork(blogPostSagas), fork(commentSagas)])
}

export default rootSaga
