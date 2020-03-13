import { call, put, takeLatest } from 'redux-saga/effects'

import { LoadingStatus } from '../../common'
import getBlogPostListApiCall from '../../api/getBlogPostList'

import {
  BLOG_POST_LIST_FETCH_REQUESTED,
  fetchBlogPostListSucceeded,
  fetchBlogPostListFailed,
  BlogPostExpandedUserItems
} from '../actions/fetchListActions'
import { showErrorNotification } from '../../notification'

function* fetchBlogPostList() {
  try {
    const list: BlogPostExpandedUser[] = yield call(getBlogPostListApiCall)
    const items: BlogPostExpandedUserItems = {}
    list.forEach(item => {
      items[item.id] = { isLoading: LoadingStatus.LOADED, detail: { ...item } }
    })
    yield put(fetchBlogPostListSucceeded(items))
  } catch (e) {
    yield put(
      showErrorNotification('Unexpected error while getting blog posts')
    )
    yield put(fetchBlogPostListFailed())
  }
}

export default function* fetchBlogPostListSaga() {
  yield takeLatest(BLOG_POST_LIST_FETCH_REQUESTED, fetchBlogPostList)
}
