import { call, put, takeLatest } from 'redux-saga/effects'

import getBlogPostsApiCall from '../../api/getBlogPosts'

import {
  BLOG_POSTS_FETCH_REQUESTED,
  fetchBlogPostsSucceeded,
  fetchBlogPostsFailed
} from '../actions'
import { showErrorNotification } from '../../notification'

function* fetchBlogPosts() {
  try {
    const list: BlogPostExpandedUser[] = yield call(getBlogPostsApiCall)
    yield put(fetchBlogPostsSucceeded(list))
  } catch (e) {
    yield put(
      showErrorNotification('Unexpected error while getting blog posts')
    )
    yield put(fetchBlogPostsFailed())
  }
}

export default function* fetchBlogPostsSaga() {
  yield takeLatest(BLOG_POSTS_FETCH_REQUESTED, fetchBlogPosts)
}
