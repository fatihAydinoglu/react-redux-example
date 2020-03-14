import { all, fork } from 'redux-saga/effects'

import fetchCommentListSaga from './fetchCommentListSaga'
import saveCommentSaga from './saveCommentSaga'
import deleteCommentSaga from './deleteCommentSaga'

export default function* blogPostSagas() {
  yield all([
    fork(fetchCommentListSaga),
    fork(saveCommentSaga),
    fork(deleteCommentSaga),
  ])
}
