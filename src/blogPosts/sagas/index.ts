import { all, fork } from 'redux-saga/effects'

import fetchBlogPostsSaga from './fetchBlogPostsSaga'

export default function* blogPostSagas() {
  yield all([fork(fetchBlogPostsSaga)])
}
