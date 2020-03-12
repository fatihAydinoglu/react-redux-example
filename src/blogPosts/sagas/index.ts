import { all, fork } from 'redux-saga/effects'

import fetchBlogPostListSaga from './fetchBlogPostListSaga'
import fetchBlogPostSaga from './fetchBlogPostSaga'

export default function* blogPostSagas() {
  yield all([fork(fetchBlogPostListSaga), fork(fetchBlogPostSaga)])
}
