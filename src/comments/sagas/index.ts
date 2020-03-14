import { all, fork } from 'redux-saga/effects'

import fetchCommentListSaga from './fetchCommentListSaga'
import saveCommentSaga from './saveCommentSaga'

export default function* blogPostSagas() {
  yield all([fork(fetchCommentListSaga), fork(saveCommentSaga)])
}
