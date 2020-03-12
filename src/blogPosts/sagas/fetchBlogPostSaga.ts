import { call, put, takeLatest } from 'redux-saga/effects'

import getBlogPostApiCall from '../../api/getBlogPost'

import {
  BLOG_POST_FETCH_REQUESTED,
  FetchBlogPostRequestedAction,
  fetchBlogPostSucceeded,
  fetchBlogPostFailed
} from '../actions'
import { showErrorNotification } from '../../notification'

function* fetchBlogPost(action: FetchBlogPostRequestedAction) {
  try {
    const item: BlogPostExpandedUser = yield call(
      getBlogPostApiCall,
      action.id
    )
    yield put(fetchBlogPostSucceeded(item))
  } catch (e) {
    yield put(
      showErrorNotification('Unexpected error while getting the blog post')
    )
    yield put(fetchBlogPostFailed(action.id))
  }
}

export default function* fetchBlogPostSaga() {
  yield takeLatest(BLOG_POST_FETCH_REQUESTED, fetchBlogPost)
}
