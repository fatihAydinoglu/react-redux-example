import { all, fork } from 'redux-saga/effects'

import fetchCommentListSaga from './fetchCommentListSaga'

export default function* blogPostSagas() {
  yield all([fork(fetchCommentListSaga)])
}
